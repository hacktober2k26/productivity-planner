# Productivity Planner

Productivity Planner is a modern, single-page and multi-view web application featuring daily hour-by-hour planning, interactive task management, a Pomodoro timer, habit streak tracking, and personalized profile analytics.

The project is built using **HTML, CSS, and JavaScript**, so you do not need to know a framework or use any complicated setup to contribute.

This repository is especially suitable for **first-time open-source contributors**.

---

## About the Project

The Productivity Planner brings essential focus and daily organization tools into a clean, glassmorphic web workspace.

### Current Features

* **Daily Planner** — Plan tasks hour-by-hour from 8:00 AM to 8:00 PM with real-time hour indicator highlighting.
* **Task & Goal Management** — Create, prioritize, and categorize tasks with due dates, active/completed filters, and search indexing.
* **Pomodoro Focus Timer** — Interactive 25-minute focus countdown timer with pause, reset, and session logging.
* **Habit Streak Tracker** — Daily consistency logger with current and best streak counters.
* **Profile Analytics** — Productivity score progress bar and statistical summary of completed tasks, focus sessions, and planner entries.
* **Live Weather Widget** — Geolocation-based weather card fetching real-time temperature, condition icons, humidity, and wind speed.
* **Daily Inspiration Quotes** — Dynamic motivational quote generator updating on page refresh.

---

## Tech Stack

This project uses basic web technologies:

* HTML5
* CSS3 (Vanilla CSS with flexbox, grid, and glassmorphism styling)
* JavaScript (ES6+ Vanilla JS)
* Remix Icon (Icon font library)

No framework or build tool is required.

---

## Project Structure

```text
Productivity App/
│
├── index.html                 # Main dashboard page
├── style.css                  # Main dashboard layout, clock, and weather styling
├── script.js                  # Dashboard controller (clock, weather API, goals)
├── README.md                  # Open-source contributor guide
│
└── pages/                     # Application subpages
    ├── planner.html           # Daily hourly planner page
    ├── planner.css            # Hour slot grid layout & current-hour styles
    ├── planner.js             # Hourly schedule local storage state logic
    │
    ├── tasks.html             # Full task manager page
    ├── tasks.css              # Priority tags, search bar, & task card layout
    ├── tasks.js               # Task list filtering, search, and storage
    │
    ├── timer.html             # Pomodoro focus timer page
    ├── timer.css              # Large timer display & button control styling
    ├── timer.js               # Pomodoro countdown interval logic
    │
    ├── streaks.html           # Streak tracking page
    ├── streaks.css            # Streak card & statistic counter styles
    ├── streaks.js             # Streak verification logic
    │
    ├── profile.html           # Profile analytics dashboard
    ├── profile.css            # Avatar, badge cards, & progress bar styles
    ├── profile.js             # Aggregated statistic calculations
    │
    └── components/            # Shared UI components
        ├── sidebar.html       # Universal navigation sidebar
        ├── sidebar.css        # Sidebar layout & hover transitions
        └── sidebar.js         # Dynamic sidebar component loader
```

You can start by opening `index.html` in your browser and exploring the application.

---

# Open Bugs

These are existing problems in the project that contributors can help fix.

| ID   | Issue                                                                 | Difficulty   | Area                      |
| ---- | --------------------------------------------------------------------- | ------------ | ------------------------- |
| B-01 | Mobile responsive layout breaks on smaller screens                    | Intermediate | CSS / Responsive          |
| B-02 | Streak tracker fails to reset consecutive count when days are missed  | Intermediate | JavaScript / Logic        |
| B-03 | Sidebar component missing or has broken CSS relative paths on subpages| Beginner     | HTML / CSS                |
| B-04 | Dark mode toggle button on dashboard does not change theme            | Beginner     | JavaScript / CSS          |
| B-05 | Weather widget fails silently when browser location access is denied   | Intermediate | JavaScript / API          |
| B-06 | Back to Dashboard link on profile page renders as unstyled blue text  | Beginner     | HTML / CSS                |
| B-07 | Duplicate `setInterval` clock loop running simultaneously in script.js| Beginner     | JavaScript                |
| B-08 | Weather card padding and margin misalignment in dashboard grid        | Beginner     | CSS                       |
| B-09 | Timer completion alert allows immediate restart without resetting     | Beginner     | JavaScript / Logic        |

> Each bug has detailed information in the codebase to help you locate and solve the issue.

---

# Feature Ideas

These features can be added to improve the application.

| ID   | Feature                                                         | Difficulty   | Area                      |
| ---- | --------------------------------------------------------------- | ------------ | ------------------------- |
| F-01 | Manual weather location search input option fallback            | Beginner     | JavaScript / UI           |
| F-02 | Customizable user profile name, avatar picture, and bio        | Beginner     | JavaScript / LocalStorage |
| F-03 | Achievement badges unlock system for productivity milestones    | Intermediate | JavaScript / UI           |
| F-04 | GitHub-style daily contribution heatmap grid on Streaks page    | Intermediate | JavaScript / Canvas / UI  |
| F-05 | Audio sound effects and chimes for Pomodoro timer completion    | Intermediate | JavaScript / Audio        |
| F-06 | Configurable Pomodoro work and break duration settings          | Beginner     | JavaScript / UI           |
| F-07 | Date navigation selector in Daily Planner                       | Intermediate | JavaScript / Logic        |
| F-08 | LocalStorage dark mode theme persistence across browser reloads | Beginner     | JavaScript / CSS          |

> Feature ideas are suggestions. Contributors can choose an idea that matches their skill level.

---

## Difficulty Guide

Not sure which issue to choose?

### Beginner

Good starting point if this is your first contribution.

Usually involves:

* HTML structural changes
* CSS fixes, padding/margin cleanups, and style additions
* Small JavaScript fixes
* Fixing broken file paths or unstyled elements
* Simple bug fixes

### Intermediate

Requires some familiarity with JavaScript logic, APIs, or DOM manipulation.

Usually involves:

* LocalStorage data persistence and state synchronization
* Geolocation API fallback and error handling logic
* Date logic and streak calculation algorithms
* Responsive CSS breakpoints and layout refactoring
* Building interactive UI modal dialogs or heatmaps

### Advanced

Suitable for contributors who are comfortable working with larger parts of the application.

Usually involves:

* Complete modular JavaScript architecture refactoring
* Complex canvas or SVG data rendering (e.g. contribution heatmap grid)
* Full accessibility (a11y) keyboard navigation and ARIA landmarks audit
* Advanced audio synthesis via Web Audio API for timer notifications

---

## How to Contribute

If you find an issue you'd like to work on:

1. Open the **Issues** section of this repository.
2. Read the issue description carefully.
3. Check whether someone is already working on it.
4. Comment on the issue if you want to work on it.
5. Fork the repository and make your changes.
6. Test your changes locally.
7. Create a Pull Request explaining what you changed.

You don't need to be an experienced developer to contribute. Start with an issue that matches your current skill level and learn as you go.

---

Thank you for taking the time to contribute to Productivity Planner.

Every contribution counts — whether it is a small CSS fix, a JavaScript improvement, documentation update, or a completely new feature.
