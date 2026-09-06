<div align="center">

# Qiskit Fall Fest 2026 — VIT Chennai

**Official web portal for Qiskit Fall Fest 2026, hosted by The QuantumPlators Club at Vellore Institute of Technology (VIT), Chennai in collaboration with IBM Quantum.**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Qiskit](https://img.shields.io/badge/IBM_Qiskit-SDK_1.x-6929C4?style=flat-square&logo=ibm&logoColor=white)](https://qiskit.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](./LICENSE)

*Explore Quantum. Build with Qiskit. Connect with the Future.*

[Explore Event](#-event-overview) • [Tech Stack](#-tech-stack) • [Quick Start](#-quick-start) • [Architecture](#-architecture) • [Brand System](#-brand-system)

</div>

---

## 🔬 Event Overview

**Qiskit Fall Fest** is IBM Quantum's premier worldwide university event series empowering student chapters to lead quantum computing education on their campuses. 

The 2026 edition at **VIT Chennai** features a multi-day immersive curriculum combining introductory workshops, advanced algorithm sessions, and an overnight hands-on quantum hackathon.

| Attribute | Details |
| :--- | :--- |
| **Host Chapter** | The QuantumPlators Club, VIT Chennai |
| **Venue** | MG Auditorium, VIT Chennai Campus |
| **Timeline** | October 2026 (3-Day Core Program + 2-Day Outreach Extension) |
| **Target Participants** | 1,000+ Students across 50+ Regional Universities |
| **Primary Platform** | IBM Qiskit SDK (Python) |
| **Eligibility** | Open to all undergraduate & postgraduate students (Zero prior physics required) |

---

## ✨ Key Platform Features

- **True Responsive Desktop & Mobile Architecture:** Fully fluid layouts utilizing widescreen 12-column grids on desktop (`max-w-7xl`) and touch-optimized flows on mobile.
- **Interactive 3D Bloch Sphere:** Real-time Three.js mathematical visualization displaying state vectors, measurement axes, and superposition geometry.
- **Interactive Quantum Concept Explorer:** Deep-dive into 12 foundational quantum computing principles (Superposition, Entanglement, Qiskit Transpilation, Shor's Algorithm, Decoherence).
- **Overnight Quantum Hackathon Hub:** 6 challenge tracks (Algorithms, QML, Optimization, Simulation, Cryptography, Quantum + AI) with 5-stage timeline progression.
- **Curated 5-Day Schedule Matrix:** Day-by-day filterable schedule distinguishing core auditorium tracks from regional outreach extensions.
- **Design Restraint:** Strict brand adherence to IBM Qiskit's official `#6929C4` purple against near-black surfaces (`#050505` / `#0b0b12`), avoiding distracting multi-color gradients.

---

## 🛠 Tech Stack

- **Core:** [React 18](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/) with Fast Refresh
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with native CSS theme variables
- **3D Graphics:** [Three.js](https://threejs.org/) for interactive Bloch Sphere state vector simulation
- **Motion:** [Framer Motion](https://www.framer.com/motion/) with viewport-aware staggered reveals
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📂 Architecture

```
qiskit-fall-fest-2026/
├── public/                     # Static assets & OpenGraph banners
│   ├── favicon.svg             # Quantum qubit brand mark
│   └── og-image.png            # Social sharing preview
├── src/
│   ├── components/             # Modular, accessible UI sections
│   │   ├── About.tsx           # Institutional context & event overview
│   │   ├── AnimatedSection.tsx # Viewport reveal wrapper
│   │   ├── BlochSphere.tsx     # Three.js 3D qubit visualization
│   │   ├── Community.tsx       # Student chapter & IBM Quantum network
│   │   ├── EventCountdown.tsx  # Live countdown to October 2026
│   │   ├── Experience.tsx      # 5 core experience pillars
│   │   ├── FAQ.tsx             # 2-column responsive accordion grid
│   │   ├── Footer.tsx          # 4-column widescreen directory & links
│   │   ├── GetInvolved.tsx     # 7-column sponsorship ecosystem
│   │   ├── Hackathon.tsx       # Tracks, flow, and prize structure
│   │   ├── Hero.tsx            # Headline, quick stats & 3D hero display
│   │   ├── Highlights.tsx      # Key festival hallmarks
│   │   ├── MetricsBar.tsx      # Target participant & college statistics
│   │   ├── Navbar.tsx          # Frosted glass responsive navigation
│   │   ├── Organizers.tsx      # Faculty leadership & committee
│   │   ├── PastEvent.tsx       # 2025 retrospective archive & metrics
│   │   ├── QuantumFactSection  # Interactive concept explorer
│   │   ├── RegisterCTA.tsx     # 12-column registration portal banner
│   │   ├── Schedule.tsx        # Filterable 5-day schedule matrix
│   │   ├── SpeakersTeaser.tsx  # Mentor & researcher tracks
│   │   └── Venue.tsx           # Auditorium details, security & transit
│   ├── data/                   # Decoupled content & schedule data
│   ├── App.tsx                 # Master single-page layout
│   ├── index.css               # Design tokens & quantum grid backgrounds
│   └── main.tsx                # App entrypoint
├── netlify.toml                # Netlify edge deployment config
├── package.json
└── vite.config.ts
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/Iceandlava124/qiskit-fall-fest-2026.git

# Navigate to directory
cd qiskit-fall-fest-2026

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the live local site.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Brand System

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Qiskit Purple** | `#6929C4` | Primary brand accent, active states, key CTAs |
| **Purple Light** | `#8A3FFC` | Hover states and subtle highlights |
| **Near Black** | `#050505` | Primary section background |
| **Deep Surface** | `#0B0B12` | Alternating section background & card surfaces |
| **Border Tone** | `#1A1A2E` | Quiet divider and structural card borders |

---

## 🤝 Community & Credits

- **Organized by:** The QuantumPlators Club — VIT Chennai
- **Mentorship:** Vellore Institute of Technology, Chennai Campus
- **Global Initiative:** IBM Quantum / Qiskit Community

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
