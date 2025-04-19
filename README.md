# MyAnimes - (myanimelist clone) 🎌

This project is a personal adaptation of the myAnimeList website, that is being developed with the intention of sharpening my Frontend Skills. It follows the best pratices of architecture and design principles recommended for react applications. 

---

## 📦 Tech Stack

- **React 18**
- **TypeScript**
- **Chakra UI** (with token-based theming and color mode switching)
- **Vite** (bundler)
- **Zustand** (state management)
- **React Query** (data fetching)
- **React Router DOM v6** (routing)
- **Custom Theming System** with Chakra + `createSystem`
- **Responsive Design** using Chakra Grid + breakpoints

---

## 🚧 Project Overview

This is a two-phase project that evolves over time. The app is a media browser that fetches and filters anime titles, very similar to the [myAnimeList](https://myanimelist.net/) website.

---

## ✅ Part 1 - Completed Features

> 📍 [First phase code](https://github.com/GabeMed/my-anime-list-clone/tree/3d1c7cb23df876b9300d67e8ebc339e8a06739f2).

The first phase of the project includes all the core UI and filtering logic:

### Features
- 🎨 Light/Dark mode with customized color palettes
- 🧭 Side panel for genre selection
- 🔍 Search input with live filtering
- 📱 Fully responsive grid layout
- 🔃 Loading skeletons
- 🔘 Custom color mode switch using `next-themes` and Chakra UI
- 🎛️ Clean component structure

### Theme Customization
- Semantic tokens configured for background and text based on color mode
- Custom `gray` palette used across the application
- Accessible contrast in both themes

---

## 🚀 Part 2 - Upcoming Features

> 🔨 This is being developed in this repo.

The following features will be implemented:

### Planned Features
- 📄 Detail pages with dynamic routes for anime
- 🌟 Platform, rating, and release year filters
- 📷 Thumbnail and meta information display improvements
- ⚙️ API integration with detailed info per item
- 🧠 Better global state management with Zustand selectors
- 💬 Review sections or user interactions

### Dev Enhancements
- 🌐 Deployment-ready Vite config
- 💡 Accessibility improvements
- ✅ TypeScript strict mode & custom hooks
- 🧪 Unit and integration tests (maybe)

---

## 🔗 Project Milestones

| Phase | Description | Status |
|-------|-------------|--------|
| Part 1 | Core layout, filtering, theming, and responsiveness | ✅ Complete |
| Part 2 | Routing, filtering enhancements, detailed pages | 🚧 In Progress |

---

## 📂 Structure

```bash
src/
├── components/
│   ├── ui/              # Chakra-based UI wrappers
│   ├── layout/          # Grid and layout helpers
│   └── features/        # Domain-specific components (GenreList, AnimeCard, etc.)
├── hooks/               # Custom hooks
├── data/                # Static/mock data (in early stages)
├── theme/               # Chakra system + design tokens
├── App.tsx              # Root layout
├── main.tsx             # Vite/React bootstrap
```

---

## 📍 Reference Commit for Part 1

You can view the completed first phase here:
**👉 [PART 1](https://github.com/GabeMed/my-anime-list-clone/tree/3d1c7cb23df876b9300d67e8ebc339e8a06739f2)**

---

## ✨ Inspiration

This project is inspired in [CodeWithMosh](https://github.com/mosh-hamedani/game-hub) project that makes a clone of the [Rawg](https://rawg.io/) website, and aims to explore UI/UX polish and anime-themed adaptations for a similar media browsing app.

---

## 📫 Contact

If you're working on a similar project, feel free to reach out and connect!

