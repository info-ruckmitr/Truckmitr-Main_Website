# TruckMitr

India’s driver-centric trucking platform — Vite + React SPA with an Indian tricolor design system, six marketing pages, client-side job filters, and Framer Motion route transitions.

## Repository

Source: [github.com/info-ruckmitr/Truckmitr-Main_Website](https://github.com/info-ruckmitr/Truckmitr-Main_Website)

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — ESLint

## Stack

- React 19, React Router, Framer Motion, Lucide icons, clsx
- Static Unsplash image URLs in `src/utils/constants.js` (no API key required)

## Structure

Domain-driven layout under `src/components` (`ui`, `layout`, `sections`, `shared`), pages under `src/pages`, shared data under `src/data`, path aliases in `vite.config.js`.

## Environment

Copy `.env.example` to `.env` if you add optional API keys. Defaults work without any secrets.
