#!/usr/bin/env node
/**
 * scripts/sync-rules.mjs
 * Syncs terms and policy markdown files from Uwebly repo into public/rules/
 * Supports local relative path with fallback to GitHub raw repository.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const TARGET_DIR = path.join(projectRoot, 'public', 'rules');
const LOCAL_UWEBLY_TERMS = path.resolve(projectRoot, '..', 'Uwebly', 'src', 'content', 'terms');
const REMOTE_RAW_BASE = 'https://raw.githubusercontent.com/ufauzan/Uwebly/main/src/content/terms';

const RULES_FILES = [
  { filename: 'uwebly.md', title: 'Uwebly Terms of Service' },
  { filename: 'umessage.md', title: 'UMessage Terms & Privacy Policy' },
];

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

async function fetchRemoteFile(url) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'bmdu-rules-sync' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    return await res.text();
  } catch (err) {
    return null;
  }
}

async function main() {
  console.log('🔄 [BMDU Rules Sync] Starting sync to public/rules/ ...');
  let hasErrors = false;

  for (const { filename, title } of RULES_FILES) {
    const localSource = path.join(LOCAL_UWEBLY_TERMS, filename);
    const targetFile = path.join(TARGET_DIR, filename);
    let content = null;
    let sourceUsed = '';

    // 1. Try local repository first
    if (fs.existsSync(localSource)) {
      try {
        content = fs.readFileSync(localSource, 'utf8');
        sourceUsed = `Local (${localSource})`;
      } catch (err) {
        console.warn(`⚠️ Failed reading local file ${localSource}: ${err.message}`);
      }
    }

    // 2. Fallback to remote raw GitHub
    if (!content) {
      const remoteUrl = `${REMOTE_RAW_BASE}/${filename}`;
      console.log(`🌐 Fetching ${filename} from GitHub: ${remoteUrl} ...`);
      content = await fetchRemoteFile(remoteUrl);
      if (content) {
        sourceUsed = `Remote GitHub (${remoteUrl})`;
      }
    }

    // 3. Fallback to existing target file if present
    if (!content && fs.existsSync(targetFile)) {
      console.log(`ℹ️ Retaining existing cached file for ${filename}`);
      continue;
    }

    if (content) {
      fs.writeFileSync(targetFile, content, 'utf8');
      console.log(`✅ Synced ${filename} (${title}) via ${sourceUsed}`);
    } else {
      console.error(`❌ Could not fetch or find ${filename}!`);
      hasErrors = true;
    }
  }

  if (hasErrors) {
    console.warn('⚠️ Some rules files could not be synced.');
  } else {
    console.log('🎉 [BMDU Rules Sync] All rules synced successfully to public/rules/');
  }
}

main().catch((err) => {
  console.error('Fatal error syncing rules:', err);
  process.exit(0); // Exit cleanly to avoid breaking Netlify build
});
