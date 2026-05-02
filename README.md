# Nurse Station Dashboard — LG webOS TV App

A real-time nursing station dashboard designed for hospital TV displays running LG webOS. The app provides nurses and hospital staff with an at-a-glance view of patient call statuses across all floors, enabling faster response times and better patient care.

## About the Project

This application is built to run on LG commercial/hospitality TVs mounted at nursing stations. It replaces traditional call light panels with a modern, digital dashboard that displays real-time room statuses on a large screen visible to the entire nursing team.

### Key Features

- **Multi-Floor Room Monitoring** — Displays rooms across 4 hospital floors (General Ward, ICU, Pediatrics, Maternity) in a 2×2 grid layout optimized for TV screens
- **Real-Time Call Alerts** — Rooms actively calling for assistance are highlighted with animated visual indicators, making them immediately noticeable from a distance
- **Alert Badge Bar** — A dedicated alert panel at the top shows all active calls with timestamps, sorted by most recent
- **Live Clock** — Real-time clock display for shift coordination
- **Time Tracking** — Each active call shows elapsed time (e.g., "3 mins ago") to help prioritize response
- **Simulation Panel** — Built-in controls to simulate nurse calls and cancellations for testing and demo purposes

### Functional Overview

| Floor | Ward | Rooms |
|---|---|---|
| Floor 1 | General Ward | 101–108 (8 rooms) |
| Floor 2 | ICU | 201–206 (6 rooms) |
| Floor 3 | Pediatrics | 301–307 (7 rooms) |
| Floor 4 | Maternity | 401–405 (5 rooms) |

**Room States:**
- **Idle** (green indicator) — No active call, patient is not requesting assistance
- **Calling** (red animated glow) — Patient has pressed the call button, nurse attention required

**Alert System:**
- Active calls appear as badges in the alert bar with room number and elapsed time
- When no calls are active, the bar shows "All Clear"
- Calls auto-refresh every 15 seconds to update elapsed time displays

**Simulation Panel:**
- Select any room from a dropdown
- Trigger a call or cancel an existing call
- Useful for demos, testing, and training staff

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.2.x | UI framework |
| React DOM | 19.2.x | DOM rendering |
| Vite | 8.0.x | Build tool & dev server |
| ESLint | 10.2.x | Code linting |
| Node.js | 22.x+ | Runtime |
| LG webOS TV SDK | latest | TV deployment & emulator |

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Main layout
│   │   ├── Header.jsx          # Title + live clock
│   │   ├── AlertPanel.jsx      # Active call badges
│   │   ├── FloorSection.jsx    # Floor card with room grid
│   │   ├── RoomCard.jsx        # Individual room status
│   │   └── SimPanel.jsx        # Simulation controls
│   ├── hooks/
│   │   ├── useClock.js         # Real-time clock hook
│   │   └── useNurseCalls.js    # Call state management
│   ├── data/
│   │   └── floors.js           # Floor/room configuration
│   ├── styles/
│   │   └── index.css           # Global styles
│   ├── App.jsx
│   └── main.jsx
├── webos-build/                # Production build for webOS
├── appinfo.json                # webOS app manifest
├── icon.png                    # App icon (80x80)
├── largeIcon.png               # Large app icon (130x130)
├── vite.config.js
└── package.json
```

## Prerequisites

- [Node.js](https://nodejs.org/) v22 or later
- [LG webOS TV SDK](https://webostv.developer.lge.com/develop/tools/sdk-introduction) (includes `ares-*` CLI tools and emulator)
- [VS Code](https://code.visualstudio.com/) with [webOS Studio extension](https://marketplace.visualstudio.com/items?itemName=webOS.webos-studio) (recommended)

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd lg-tvwebos-nursing-station-dashboard

# Install dependencies
npm install
```

## Development

```bash
# Start dev server with hot reload
npm run dev
# Opens at http://localhost:5173
```

## Build for webOS TV

```bash
# Build and prepare webOS package
npm run webos:build
```

This outputs a ready-to-deploy app in the `webos-build/` directory.

## Run on Emulator

### Using webOS Studio (VS Code)

1. Open the project in VS Code
2. Import `webos-build/` folder via **webOS TV > Import webOS TV App**
3. Right-click the project and select **Run on Simulator**

### Using CLI

```bash
# Package the app
ares-package webos-build/

# Install on emulator
ares-install --device emulator com.domain.app_1.0.0_all.ipk

# Launch
ares-launch --device emulator com.domain.app
```

## Deploy to Physical TV

```bash
# Set up your TV as a device
ares-setup-device

# Install
ares-install --device <device-name> com.domain.app_1.0.0_all.ipk

# Launch
ares-launch --device <device-name> com.domain.app
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run webos:build` | Build + copy webOS assets to `webos-build/` |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## License

MIT
