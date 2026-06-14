# Seconai

A web application built with [Next.js](https://nextjs.org) (App Router), [React 19](https://react.dev), and [Material UI](https://mui.com).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19 + Material UI v7 (`@mui/material`, `@mui/icons-material`)
- **Styling:** Emotion + a central MUI theme (`app/theme.js`)
- **Tooling:** ESLint (`eslint-config-next`) + Prettier

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script                 | Description                              |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server (Turbopack) |
| `npm run build`        | Create a production build                |
| `npm run start`        | Run the production build                 |
| `npm run lint`         | Lint the codebase with ESLint            |
| `npm run format`       | Format all files with Prettier           |
| `npm run format:check` | Check formatting without writing changes |

## Project Structure

```
app/
  layout.js          Root layout — fonts, metadata, ThemeRegistry
  page.js            Home route (/)
  theme.js           Central MUI theme (colors, typography)
  ThemeRegistry.js   Client-side ThemeProvider + CssBaseline
  globals.css        Global CSS reset and base styles
components/
  navbar/Navbar.js   Top navigation bar (responsive, with mobile drawer)
public/              Static assets
```

## Styling & Theming

Colors and typography are defined once in `app/theme.js` and consumed through
MUI's `sx` prop (e.g. `bgcolor: "background.paper"`, `color="primary"`). Avoid
hardcoding hex values in components — extend the theme instead.
