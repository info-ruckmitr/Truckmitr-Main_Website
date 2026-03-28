## TruckMitr React Project Structure (index.js focused)

### Folder Structure:
```
truckmitr-web/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── videos/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Common/        # Buttons, Inputs, Modals
│   │   ├── Layout/        # Navbar, Footer, Sidebar
│   │   ├── Charts/        # Data visualization components
│   │   └── Sections/      # Page-specific sections (Hero, Features, KPIs)
│   ├── pages/             # Main route components
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── Home.module.css
│   │   ├── Driver/
│   │   │   ├── index.js
│   │   ├── FleetOwner/
│   │   │   ├── index.js
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── context/           # Global state management
│   ├── services/          # API calls and external services
│   ├── utils/             # Helper functions, constants
│   ├── styles/            # Global styles and theme tokens
│   ├── App.js             # Main App component with routing
│   └── index.js           # Entry point
├── .gitignore
├── package.json
└── README.md
```

### Detailed Development Prompt:
"Build a high-performance React.js (v18+) web application for TruckMitr using the provided folder structure. Use `index.js` for all component and page entry points. Ensure a mobile-responsive, first-class UI that uses a 'merged-with-background' card aesthetic (no heavy box-shadows). 

Key Features to Implement:
1. Two-Path Entry: Homepage with immediate 'Driver' (Hindi-first) and 'Fleet Owner/OEM' (English-first) CTA branches.
2. Dashboard Integration: Use Recharts or Chart.js for subtle, integrated KPI charts on B2B pages.
3. WhatsApp API Integration: Prominent WhatsApp CTA for driver engagement.
4. Multilingual Support: Context-driven language switching (Hindi/English).
5. Clean Code: Functional components, custom hooks for data fetching, and CSS Modules for scoped styling.

The goal is to present this to investors for ₹100+ Cr funding, so focus on performance, scalability, and premium visual polish."