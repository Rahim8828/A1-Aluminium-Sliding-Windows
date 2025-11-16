# A1 Aluminium, Glass & Netting Solutions Website

A professional service website built with Next.js 14, TypeScript, and Tailwind CSS for A1 Aluminium, Glass & Netting Solutions - a Mumbai-based business offering comprehensive aluminium fabrication, glass installation, and safety netting services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS v3
- **Code Quality**: ESLint + Prettier
- **Package Manager**: npm

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   ├── data/            # Static data
│   └── types/           # TypeScript interfaces
├── public/              # Static assets
└── .kiro/              # Kiro specs and documentation
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Configuration

### TypeScript

TypeScript is configured with strict mode enabled in `tsconfig.json`. Path aliases are set up:
- `@/*` maps to `./src/*`

### Tailwind CSS

Custom Tailwind configuration in `tailwind.config.ts` includes:
- Custom color palette (primary blue, secondary orange)
- Custom font families
- Extended spacing and sizing utilities

### ESLint

ESLint is configured with Next.js recommended rules in `eslint.config.mjs`.

### Prettier

Prettier is configured with Tailwind CSS plugin for automatic class sorting.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict mode
- ✅ Tailwind CSS with custom configuration
- ✅ ESLint for code quality
- ✅ Prettier for code formatting
- ✅ Optimized project structure with src directory
- ✅ Path aliases configured

## Development Guidelines

1. Follow TypeScript strict mode - no implicit any types
2. Use Prettier for consistent code formatting
3. Run ESLint before committing code
4. Follow the component structure defined in the design document
5. Use Tailwind CSS utility classes for styling

## Next Steps

Refer to `.kiro/specs/a1-aluminium-website/tasks.md` for the implementation plan and next tasks to complete.

## Documentation

- Requirements: `.kiro/specs/a1-aluminium-website/requirements.md`
- Design: `.kiro/specs/a1-aluminium-website/design.md`
- Tasks: `.kiro/specs/a1-aluminium-website/tasks.md`
