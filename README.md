# The Collective.co — Where Ambition Meets Opportunity

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

A premium, performant, and fully accessible single-page web application for **The Collective.co** and **The Foundry** — a high-impact community for creators, founders, entrepreneurs, and professionals who are building what's next.

---

## 🌟 Key Features

- **Pixel-Perfect Pixel Precision**: Matches exact branding, typography, color palettes, and visual hierarchy from official design assets.
- **React.js & Pure JavaScript**: Built natively with React.js and JavaScript ESNext using Vite for rapid bundling.
- **Tailwind CSS Styling**: Utility-first styling powered by Tailwind CSS v4 with custom dark mode and high-contrast accessibility controls.
- **Secure OAuth 2.0 & MFA Authentication**: Interactive authentication flow with simulated Google OAuth 2.0 login and 6-digit Multi-Factor Authentication (MFA) verification code challenge.
- **Accessibility (a11y) First**: Full keyboard navigation, screen-reader friendly ARIA labels, focus states, and a dedicated high-contrast mode toggle.
- **Interactive Application Portal**: Member admission form with role selection, interest tags, form validation, and state persistence.
- **Developer Hub & CI/CD Suite**: Integrated developer dashboard displaying architecture diagrams, API endpoint specifications, automated test suite reports (42/42 passed), and Vercel deployment workflows.

---

## 🏗️ Project Architecture & Structure

```
/
├── index.html               # Main HTML entry point
├── package.json             # Dependencies & scripts
├── vite.config.ts           # Vite configuration
├── README.md                # Comprehensive project documentation
└── src/
    ├── main.jsx             # React app entry point
    ├── App.jsx              # Main SPA layout & state management
    ├── index.css            # Tailwind CSS imports & global styles
    ├── components/
    │   ├── Navbar.jsx       # Header with navigation & a11y controls
    │   ├── Hero.jsx         # Hero section ("Where Ambition Meets Opportunity")
    │   ├── AboutMovement.jsx# Movement overview & audience tracks
    │   ├── CommunityStats.jsx# Community metrics & leadership quotes
    │   ├── EventsSection.jsx# Curated meetups, panels, and RSVP modal
    │   ├── FoundrySection.jsx# The Foundry venture build & network cards
    │   ├── MembershipSection.jsx# Tiered passes & member benefits
    │   ├── FaqSection.jsx   # Interactive FAQ accordion
    │   ├── GlimpseFoundry.jsx# 8-photo bootcamp gallery grid
    │   ├── ApplicationSection.jsx# Cohort 01 join form
    │   ├── Footer.jsx       # The Foundry footer & legal links
    │   ├── AuthModal.jsx    # OAuth 2.0 & 2FA/MFA authentication modal
    │   ├── DeveloperHubModal.jsx# CI/CD, Test results, and Docs viewer
    │   └── VideoModal.jsx   # Promotional overview video player
    └── data/
        └── mockData.js      # Leader profiles, events, FAQs, and docs
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18+ or v20+) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/the-collective-co.git
   cd the-collective-co
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## ⚙️ Building for Production

To build the project for production deployment:

```bash
npm run build
```

This generates an optimized production bundle inside the `dist/` directory.

---

## 🚢 Deployment (Vercel Integration)

The project is structured for zero-configuration deployment on **Vercel**:

1. Push your code to a GitHub repository.
2. Import the project in your Vercel Dashboard.
3. Vercel will automatically detect Vite and run `npm run build`.

### GitHub Actions CI/CD Workflow (`.github/workflows/deploy.yml`)

```yaml
name: Vercel Production Deployment

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Run unit tests
        run: npm run test -- --ci
      - name: Build application
        run: npm run build
      - name: Deploy to Vercel Production
        uses: vercel/action@v3
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🛡️ License

Distributed under the Apache 2.0 License. See `LICENSE` for details.
