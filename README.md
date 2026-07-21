# Uwebly Style Guide

Official design system and style guide for Uwebly platform.

---

## Overview

Uwebly Style adalah panduan desain resmi dan komprehensif untuk memastikan konsistensi visual di seluruh platform Uwebly. Repository ini berisi komponen UI, design tokens, dan guidelines untuk membangun interface yang kohesif dan user-friendly.

Tujuan utama:

- Memastikan konsistensi visual di semua produk Uwebly
- Menyediakan komponen reusable dan well-documented
- Mempercepat proses development melalui component library
- Menjaga standar kualitas design yang tinggi
- Memudahkan kolaborasi antara designer dan developer

---

## Tech Stack

### UI Framework & Tooling

- **React 19** - Component library foundation
- **Vite 6** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Storybook** - Interactive component documentation
- **ESLint** - Code quality and consistency

### Design Tokens

- Color palette dan typography definitions
- Spacing dan sizing scales
- Component variants dan states
- Dark/light theme support

---

## Style Components

Komponen UI yang tersedia dalam design system:

| Category | Component Types |
|---|---|
| Form | Input, Button, Checkbox, Radio, Select, Textarea |
| Navigation | Navigation, Sidebar, Breadcrumb, Tabs |
| Feedback | Modal, Alert, Toast, Spinner, Progress |
| Content | Card, Badge, Avatar, Icon, Typography |
| Layout | Grid, Flexbox, Container, Spacing utilities |
| Theme | Color tokens, Typography scale, Dark/Light modes |

---

## Design Principles

- **Consistency** - Unified visual language across all products
- **Accessibility** - WCAG compliant components
- **Simplicity** - Clean and intuitive interfaces
- **Scalability** - Component system yang dapat tumbuh
- **Performance** - Optimized assets dan lean CSS

---

## Project Structure

```bash
uwebly-style/
├── src/
│   ├── components/          # Reusable UI components
│   ├── styles/              # Global styles & design tokens
│   ├── stories/             # Storybook stories
│   ├── assets/              # Icons, images, fonts
│   ├── index.css            # Global CSS
│   └── main.jsx             # Entry point
├── public/                  # Static assets
├── storybook/               # Storybook configuration
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint rules
├── package.json             # Dependencies
└── README.md                # This file
```

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Storybook

```bash
npm run storybook
```

### Build

```bash
npm run build
```
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── context/
│   ├── hooks/
│   ├── utils/
│   └── App.jsx
│
├── netlify/
│   └── functions/
│
├── scripts/
└── package.json
````

---

# Development

## Requirements

* Node.js 24.12.0
* npm 11.6.2

---

## Installation

```bash
git clone https://github.com/your-username/uweb-react.git

cd uweb-react

npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_DATABASE_URL=
```

---

## Run Development Server

```bash
npm run dev
```

Default local server:

```bash
http://localhost:5173
```

---

# Build & Deployment

## Production Build

```bash
npm run build
```

Build output:

```bash
dist/
```

---

## Deployment Stack

| Service           | Purpose                |
| ----------------- | ---------------------- |
| Netlify           | Frontend hosting       |
| Netlify Functions | Serverless APIs        |
| Firebase          | Backend infrastructure |

---

# Performance Considerations

* Vite-based fast development builds
* Lazy-loaded routes and assets
* Infinite scrolling for feed optimization
* Firebase realtime synchronization
* PWA caching support
* Responsive media rendering

---

# Security

* Firebase Authentication-based access control
* Environment variable isolation
* Protected user data access
* Cloud Storage-based media handling

---

# Progressive Web App

Uwebly supports Progressive Web App functionality:

* Installable on desktop and mobile
* Offline asset caching
* Native-like navigation experience

---

# Future Improvements

Planned engineering improvements include:

* Unit and integration testing
* CI/CD pipeline automation
* Media compression pipeline
* Feed ranking optimization
* WebSocket abstraction layer
* Monitoring and analytics integration

---

# Author

## Umar Fauzan Irvan

Founder & Fullstack Developer

* Website: [https://uwebly.com](https://uwebly.com)
* GitHub: [https://github.com/umarfauzan11](https://github.com/umarfauzan11)

---

# License

© 2026 Bmdu Studio.
All rights reserved.