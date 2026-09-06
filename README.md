# Qiskit Fall Fest 2026 — Official Website

Official website for **Qiskit Fall Fest 2026**, hosted by **VIT Chennai × QuantumPlators**.

## 🔬 Event Highlights & Identity
- **Name:** Qiskit Fall Fest 2026
- **Host:** VIT Chennai × QuantumPlators
- **Tentative Period:** October 2026
- **Format:** 3-Day Main Event + 2-Day Outreach Extension
- **Venue:** MG Auditorium, VIT Chennai
- **Taglines:** *"Explore Quantum. Build with Qiskit. Connect with the Future."* & *"Something major is happening at VIT."*
- **Targets (Aspirational Goals):** 1,000+ participants · 50+ external colleges · ₹5–10 lakh sponsorship ecosystem

---

## 🛠️ Tech Stack
- **Framework:** React 18 + TypeScript
- **Bundler:** Vite 6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Canvas:** Custom animated Quantum Circuit Canvas with qubit wires, gate nodes, and probability particles

---

## 📁 Component Architecture
```
src/
├── components/
│   ├── About.tsx                 # Verbatim about copy & overview
│   ├── AnimatedSection.tsx       # Scroll-triggered reveal animations
│   ├── Experience.tsx            # 5 Pillars (Learn, Build, Connect, Compete, Explore)
│   ├── Footer.tsx                # Branding, quick links & resources
│   ├── GetInvolved.tsx           # Sponsorship ecosystem & partner categories
│   ├── Hackathon.tsx             # Hackathon overview, tracks & process flow
│   ├── Hero.tsx                  # Quantum circuit canvas background & CTAs
│   ├── Highlights.tsx            # 7 core festival highlights
│   ├── Navbar.tsx                # Frosted-glass sticky navigation + mobile drawer
│   ├── Organizers.tsx            # Faculty organizers & Student Core Team
│   ├── PastEvent.tsx             # Link to 2025 edition (site & repo)
│   ├── QuantumCircuitCanvas.tsx  # Dynamic HTML5 canvas animation
│   ├── RegisterCTA.tsx           # Static external registration link CTA
│   └── SectionHeading.tsx        # Reusable title with gradient underline
├── data/
│   ├── highlights.ts             # Highlights, pillars & hackathon tracks
│   ├── organizers.ts             # Faculty and student team members
│   └── schedule.ts               # Days 1–5 detailed schedule
├── App.tsx                       # Single-page compose view with smooth anchor navigation
├── index.css                     # Tailwind directives, theme variables & resets
└── main.tsx                      # Root mount point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```
Production assets are generated in `dist/`.

---

## ☁️ Deployment (Netlify)
The repository includes a ready-to-use [`netlify.toml`](./netlify.toml) configured for Vite:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **SPA redirect:** `/* -> /index.html (200)`
