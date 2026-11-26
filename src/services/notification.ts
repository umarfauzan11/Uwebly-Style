/**
 * Global notification system for Uwebly / Barticle
 */

export type NotificationType = 'info' | 'success' | 'error' | 'warning';

export function showNotification(
  message: string,
  type: NotificationType = 'info',
  duration: number = 5000
): HTMLDivElement {
  // Remove existing notifications if any
  const existing = document.querySelectorAll('.uweb-notification');
  existing.forEach((n) => n.remove());

  // Create element
  const notif = document.createElement('div');
  notif.className = 'uweb-notification';
  notif.setAttribute('data-type', type);
  notif.style.cssText = `
    position: fixed;
    bottom: 94px;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    min-width: 300px;
    max-width: 400px;
    background: #1c1c1c;
    color: white;
    border-radius: 12px;
    padding: 12px 20px;
    z-index: 99999;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
    font-size: 14px;
    border-left: none;
    pointer-events: none;
  `;

  notif.innerHTML = `
    <div class="uweb-notification-content" style="display: flex; align-items: center; gap: 12px;">
      <span class="uweb-notification-message" style="flex: 1; color: #ffffff;">
        ${message}
      </span>
      <button class="uweb-notification-close" style="
        background: none; border: none; font-size: 18px;
        cursor: pointer; color: #999; padding: 0 4px;
        line-height: 1; transition: color 0.2s;
      ">×</button>
    </div>
  `;

  document.body.appendChild(notif);

  // Trigger animation
  requestAnimationFrame(() => {
    notif.style.opacity = '1';
    notif.style.transform = 'translateX(-50%) translateY(0)';
    notif.style.pointerEvents = 'auto';
  });

  // Close button handler
  const closeBtn = notif.querySelector('.uweb-notification-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dismissNotification(notif);
    });
  }

  // Auto dismiss
  if (duration > 0) {
    setTimeout(() => {
      dismissNotification(notif);
    }, duration);
  }

  return notif;
}

function dismissNotification(notif: HTMLDivElement | null): void {
  if (!notif || !notif.parentElement) return;
  notif.style.opacity = '0';
  notif.style.transform = 'translateX(-50%) translateY(100px)';
  notif.style.pointerEvents = 'none';
  setTimeout(() => {
    if (notif.parentElement) notif.remove();
  }, 300);
}
