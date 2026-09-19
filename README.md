# Voice Dine Delight — Restaurant Website with AI Voice Ordering Agent

A restaurant website (Domino's-style) built with React, TypeScript, and shadcn/ui, featuring an embedded **AI voice assistant** (powered by [Vapi.ai](https://vapi.ai)) that lets customers place orders and ask questions by voice.

## Features

- **Hero, About, and Menu sections** — pizzas, sides, and more, with pricing and descriptions
- **Table reservation form** — name, phone, date, time, guest count, and seating preference (Regular, Family, Window, Quiet Zone, VIP Private), with instant toast confirmation
- **Contact section** for customer inquiries
- **Floating AI Voice Agent button** — opens a Vapi.ai-powered voice assistant in a new tab, letting customers talk to an AI agent instead of filling out forms or calling in
- Fully responsive, built with Tailwind CSS and shadcn/ui components
- Client-side routing (React Router) with a custom 404 page

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Routing:** React Router
- **Data/forms:** React Hook Form, TanStack Query
- **Voice AI:** [Vapi.ai](https://vapi.ai) (embedded voice assistant)
- **Testing:** Vitest, Playwright (E2E)

## Project Structure

```
├── src/
│   ├── components/          # Page sections (Hero, Menu, Reservation, Contact, Navbar, Footer)
│   │   ├── ui/                # shadcn/ui component library
│   │   └── VoiceAssistant.tsx # Floating button linking to the Vapi.ai voice agent
│   ├── pages/                # Route-level pages (Index, NotFound)
│   ├── assets/                # Images
│   └── App.tsx                 # App shell & routing
├── public/                   # Static assets
├── docs/                     # Project documentation
│   ├── SRS.docx                # Software Requirements Specification
│   └── Presentation.pptx       # Project presentation slides
├── demo/
│   └── app_demo.mp4            # Screen-recorded demo of the app in action
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+ (or [Bun](https://bun.sh), since a `bun.lock` is included)

### Installation

```bash
# with npm
npm install

# or with bun
bun install
```

### Run in development

```bash
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

### Build for production

```bash
npm run build
```

### Run tests

```bash
npm run test          # unit tests (Vitest)
npx playwright test   # end-to-end tests (Playwright)
```

## Voice Agent

The floating chat-bot button (bottom-right corner) links to a live Vapi.ai voice assistant demo configured for this restaurant. Clicking it opens a new tab where customers can talk to the AI agent directly. The assistant ID and demo share key are configured in `src/components/VoiceAssistant.tsx`.

## Documentation

- **`docs/SRS.docx`** — full Software Requirements Specification for the voice ordering agent
- **`docs/Presentation.pptx`** — project presentation slides
- **`demo/app_demo.mp4`** — a ~2.5 minute screen recording demonstrating the website and voice agent in action

## Notes

- This project was originally scaffolded with [Lovable](https://lovable.dev) (hence the `vite_react_shadcn_ts` project name in `package.json`).
- Two lockfiles (`bun.lock`/`bun.lockb` and `package-lock.json`) are present from development with both Bun and npm — pick whichever package manager you prefer and delete the other lockfile(s) if you want a single source of truth going forward.
