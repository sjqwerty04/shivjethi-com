# shivjethi.com — Portfolio

A high-performance portfolio website for [shivjethi.com](https://shivjethi.com) built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and TypeScript.

Featuring a **pixel-perfect replica** of the interactive timeline component from [x.ai/colossus](https://x.ai/colossus).

---

## ⚡ Features

- **Colossus Timeline Replica (1:1 with x.ai/colossus)**:
  - **Fluid Mouse Scrubbing**: Instant milestone updating as the cursor moves over the horizontal track via bounding rect calculations.
  - **Spring Motion Progress Bar**: Smooth spring dynamics (`stiffness: 300, damping: 30`) matching the production x.ai motion curves.
  - **Dynamic Numeral Morphing**: Character-level number transitions using `@number-flow/react` with 600ms ease-out timing.
  - **Auto-Width Header Animation**: `ResizeObserver` based width interpolation with custom cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`).
  - **Discrete & Continuous Scrubbing**: Works seamlessly on hover/scrub or direct dot click, with touch support.
- **Dual Mode Timeline**:
  - **x.ai Colossus Timeline**: The exact 7 milestones from the gigafactory build (May 2024 to Feb 2025, from 0 to 276 days).
  - **Shiv Jethi Career Journey**: Interactive engineering milestones tracking key systems and distributed architectures.
- **Aesthetic**:
  - Dark-mode minimalist aesthetic (`#0a0a0a`), subtle 80px architectural grid backdrop, typography tuned to Geist Sans & Geist Mono.
  - Responsive design across desktop, tablet, and mobile.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/sjqwerty04/shivjethi-com.git
cd shivjethi-com

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Number Transitions**: `@number-flow/react`
- **Icons**: Lucide Icons & Custom Brand SVGs
- **Language**: TypeScript
