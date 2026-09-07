# 💼 JobTrackr — Intelligent Job Application Tracker & Analytics

[![Live Demo](https://img.shields.io/badge/Demo-jobtrackr.vercel.app-blue?style=for-the-badge&logo=vercel)](https://jobtrackr.vercel.app/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> **JobTrackr** is a streamlined, responsive, and data-driven job application tracking platform designed to help job seekers organize opportunities, monitor interview stages, and visualize application velocity and conversion metrics in one clean workspace.

🔗 **Live Deployment:** [https://jobtrackr.vercel.app/](https://jobtrackr.vercel.app/)  
📂 **Repository:** [https://github.com/Hitheshamin24/JobTrackr](https://github.com/Hitheshamin24/JobTrackr)

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
  - [1. Executive Dashboard](#1-executive-dashboard)
  - [2. Applications Management](#2-applications-management)
  - [3. Dynamic Search, Filter & Sort](#3-dynamic-search-filter--sort)
  - [4. Visual Analytics & Insights](#4-visual-analytics--insights)
- [Tech Stack](#-tech-stack)
- [Architecture & Design Pattern](#-architecture--design-pattern)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Building for Production](#building-for-production)
- [State Management & Data Persistence](#-state-management--data-persistence)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author & Acknowledgments](#-author--acknowledgments)

---

## 🌟 Overview

During an active job search, keeping track of dozens of applications across multiple portals, dates, stages, and salary ranges quickly becomes overwhelming. **JobTrackr** solves this problem by offering:

- A unified command center with high-level KPI cards.
- A full-featured application manager with instant edit/delete operations and duplicate company prevention.
- Rich filtering and sorting capabilities.
- An in-depth analytics dashboard featuring custom SVG trend charts, CSS conic-gradient pipeline donut graphs, role breakdown progress bars, and geographic tracking.
- Client-side persistence using `localStorage` for zero-setup, private, and offline-resilient data management.

---

## ✨ Key Features

### 1. Executive Dashboard
- **Instant KPIs:** Displays real-time counts for **Total Applications**, **Interviews**, **Offers**, and **Rejections**.
- **Weekly Momentum:** Dynamic badge indicating how many applications were submitted in the current calendar week (`✓ X this week`).
- **Interview Radar:** Calculates and flags upcoming interviews scheduled after today's date.
- **Motivational Context:** Dynamic status messaging (e.g. *"Congratulations"* upon receiving offers, *"Keep pushing!"* for rejections).

### 2. Applications Management
- **Full CRUD Operations:** Add new applications, update details on the fly, or delete obsolete entries.
- **Duplicate Prevention:** Intelligently checks against existing company records and warns the user before creating duplicates.
- **Detailed Schema:**
  - Company name & direct job posting URL link
  - Target role / job title
  - Work model: `Remote`, `Hybrid`, `On-site`
  - Employment type: `Full-time`, `Part-time`, `Contract`
  - Location (City / Region)
  - Expected compensation / salary
  - Current stage: `Applied`, `Interviewing`, `Offer`, `Rejected`
  - Application date & upcoming interview schedule date
- **Interactive Modals:** Built with `react-hook-form` for validated, performant input handling and styled using Tailwind CSS.
- **Toast Alerts:** Feedback via `react-toastify` for actions like creations, updates, duplicate alerts, and deletions.

### 3. Dynamic Search, Filter & Sort
- **Live Search:** Instant fuzzy search matching company names, job titles, or location arrangements.
- **Auto-Generated Dropdowns:** Filters dynamically adapt based on distinct values present in your records (Status, Location, and Work Type).
- **Date Sorting:** One-click toggle between ascending and descending application dates.
- **Filter Reset:** Instant "Clear" button to restore unfiltered views.

### 4. Visual Analytics & Insights
- **Top Metrics Overview:**
  - Month-over-month application volume delta (`+% this month`).
  - Response Rate (`[Interviewing + Offer] / Total`) with monthly comparison delta.
  - Overall Interview Conversion Rate.
  - Offer Conversion Rate.
- **Application Velocity Chart:** Custom responsive SVG line and gradient area chart tracking submission velocity across the last 8 weeks (`W1` to `W8`).
- **Pipeline Status Donut:** CSS `conic-gradient` interactive donut chart visualizing the exact stage distribution across your pipeline.
- **Role Categories Breakdown:** Ranked distribution of your top targeted job titles with animated percentage progress bars.
- **Top Locations Tracker:** Identifies top hiring hubs and work preferences with ranking badges and geographic indicators.

---

## 🛠 Tech Stack

| Category | Technology | Description |
|---|---|---|
| **Core** | [React 19](https://react.dev/) | Latest React with optimized rendering and concurrent features |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Next-generation frontend tooling with lightning-fast HMR |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) + [React-Redux](https://react-redux.js.org/) | Predictable global store for application list and active filter states |
| **UI Context** | React Context API | Scoped modal visibility and active editing entity state |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine via `@tailwindcss/vite` |
| **Routing** | [React Router v8](https://reactrouter.com/) | Declarative client-side routing with `createBrowserRouter` |
| **Form Management** | [React Hook Form](https://react-hook-form.com/) | Flexible and performant form validation |
| **Notifications** | [React Toastify](https://fkhadra.github.io/react-toastify/) | Customized alert banners for asynchronous user feedback |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent SVG icons |
| **Persistence** | Browser `localStorage` | Fast local data storage without requiring an external backend |
| **Deployment** | [Vercel](https://vercel.com/) | Edge-optimized continuous deployment |

---

## 📐 Architecture & Design Pattern

JobTrackr adopts a **Feature-Based / Modular Architecture** to ensure clean separation of concerns, scalability, and maintainability:

```
src/
├── app/                  # Application configuration & layout layer
│   ├── app.js            # Redux store configuration combining feature reducers
│   └── layout/
│       └── MainLayout.jsx# Shell layout (Sidebar, Context Provider, Modal Host, Outlet)
│
├── features/             # Domain-driven feature modules
│   ├── applications/     # Core Applications domain
│   │   ├── context/      # Context for UI dialogs (open/close, active record)
│   │   ├── hooks/        # Custom hooks for CRUD & filtered memoization
│   │   ├── state/        # Redux slices: applicationSlice & filterSlice
│   │   └── ui/           # Table, toolbar, modal form & page components
│   │
│   ├── analytics/        # Analytics & Metrics domain
│   │   ├── hooks/        # useAnalytics calculation engine (velocity, rates, donut)
│   │   └── ui/           # Chart components, KPI cards & Analytics page
│   │
│   └── routes/           # Application route definitions
│       └── AppRoutes.jsx # BrowserRouter setup with index redirection
│
└── shared/               # Shared design system & utilities
    ├── hooks/            # useDashboardHook (KPI counts, weekly metrics)
    └── ui/               # Reusable UI elements (Navbar, PageHeader, StatCard)
```

---

## 📁 Project Directory Structure

```plaintext
JobTrackr/
├── public/
│   ├── favicon.png             # Application Favicon
│   └── jobtrackrLogo.png       # Brand Logo
├── src/
│   ├── app/
│   │   ├── app.js              # Redux store configuration
│   │   └── layout/
│   │       └── MainLayout.jsx  # App container with fixed Sidebar & modal outlet
│   ├── features/
│   │   ├── analytics/
│   │   │   ├── hooks/
│   │   │   │   └── useAnalytics.jsx
│   │   │   └── ui/
│   │   │       ├── components/
│   │   │       │   ├── AnalyticsContent.jsx
│   │   │       │   ├── ApplicationVelocity.jsx
│   │   │       │   ├── MetricsOverview.jsx
│   │   │       │   ├── PipelineStatus.jsx
│   │   │       │   ├── RoleCategories.jsx
│   │   │       │   └── TopLocations.jsx
│   │   │       └── pages/
│   │   │           └── AnalyticsPage.jsx
│   │   ├── applications/
│   │   │   ├── context/
│   │   │   │   ├── ApplicationContext.jsx
│   │   │   │   ├── ApplicationProvider.jsx
│   │   │   │   └── useApplicationContext.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useAppicationsHook.jsx
│   │   │   ├── state/
│   │   │   │   ├── applicationSlice.js
│   │   │   │   └── filterSlice.js
│   │   │   └── ui/
│   │   │       ├── components/
│   │   │       │   ├── ApplicationForm.jsx
│   │   │       │   ├── ApplicationsTable.jsx
│   │   │       │   └── ApplicationsToolbar.jsx
│   │   │       └── pages/
│   │   │           └── ApplicationsPage.jsx
│   │   └── routes/
│   │       └── AppRoutes.jsx
│   ├── shared/
│   │   ├── hooks/
│   │   │   └── useDashboardHook.jsx
│   │   └── ui/
│   │       ├── component/
│   │       │   ├── Navbar.jsx
│   │       │   ├── PageHeader.jsx
│   │       │   └── StatCard.jsx
│   │       └── pages/
│   │           └── DashboardPage.jsx
│   ├── App.jsx                 # Root component with ToastContainer
│   ├── index.css               # Tailwind CSS import
│   └── main.jsx                # DOM mounting & Redux Provider injection
├── eslint.config.js            # ESLint rules configuration
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and npm scripts
└── vite.config.js              # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

Follow these steps to run JobTrackr locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version **18.x** or higher recommended)
- [npm](https://www.npmjs.com/) (or yarn / pnpm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Hitheshamin24/JobTrackr.git
   cd JobTrackr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running Locally

Start the Vite development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

Compile and bundle the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

To run lint checks:
```bash
npm run lint
```

---

## 💾 State Management & Data Persistence

JobTrackr utilizes a hybrid state pattern to maximize performance and maintainability:

1. **Redux Store (`applicationSlice`):**
   - Keeps the master list of all application records.
   - Synchronizes automatically with `localStorage` under the key `"jobTrackrApplications"`.
   - Dispatches mutations: `addApplication`, `updateApplication`, and `deleteApplication`.
2. **Redux Store (`filterSlice`):**
   - Manages state for search query, active status filter, location filter, job mode filter, and date sort toggles.
3. **Application Context (`ApplicationProvider`):**
   - Handles localized modal dialog states (`showApplicationForm`, `editingApplication`), keeping global Redux state unpolluted with transient UI toggles.

---

## 🔮 Roadmap

- [ ] **Export & Import:** Export applications list to CSV / JSON and import from backup.
- [ ] **Resume & Cover Letter Attachment:** Link resumes and cover letter versions to specific applications.
- [ ] **Kanban Board View:** Drag-and-drop board to transition applications across stages (`Applied` ➔ `Interviewing` ➔ `Offer`).
- [ ] **Cloud Sync / Backend Authentication:** Optional Supabase or Firebase integration for multi-device sync.
- [ ] **Dark Mode Support:** Sleek, high-contrast dark theme toggle.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👤 Author & Acknowledgments

- **Author:** [Hithesh Amin](https://github.com/Hitheshamin24)
- **GitHub:** [@Hitheshamin24](https://github.com/Hitheshamin24)
- **Live Demo:** [jobtrackr.vercel.app](https://jobtrackr.vercel.app/)

---

<p align="center">Made with ❤️ for job seekers worldwide.</p>
