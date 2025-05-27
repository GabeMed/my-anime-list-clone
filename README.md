# AnimeVerse - (myanimelist clone) 🎌

This project is a personal adaptation of the myAnimeList website, that is being developed with the intention of sharpening my Frontend Skills. It follows the best pratices of architecture and design principles recommended for react applications.

---

## 🔥 Check it Here: [AnimeVerse](https://animeverse-theta.vercel.app/)


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

## ✅ Part 1 

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

## 🚀 Part 2 

The second part of the project includes the following features:

### Features
- 📄 Detail pages with dynamic routes for anime
- 🌟 Platform, rating, and release year filters
- 🎥 Anime trailler display
- 📷 Thumbnail and meta information display improvements
- ⚙️ API integration with detailed info per item
- 🧠 Better global state management with Zustand selectors

### Dev Enhancements
- 🌐 Deploy to vercel, and link git repository with the vercel project for hot updates.

---

## 🔗 Project Milestones

| Phase | Description | Status |
|-------|-------------|--------|
| Part 1 | Core layout, filtering, theming, and responsiveness | ✅ Complete |
| Part 2 | Routing, filtering enhancements, detailed pages |  ✅ Complete |

---

## 📂 Structure

```bash
src/
├── components/
│   ├── ui/
│   ├── component1.tsx
│   (...)
├── data/
├── entities/
├── hooks/
├── pages/
├── services/
├── utils/
├── main.tsx
├── routes.tsx
├── store.tsx
├── theme.ts
```

**Directory Explanations:**

- **components/**: UI components and domain-specific components.
- **data/**: Static/mock data.
- **entities/**: Domain models and business objects.
- **hooks/**: Custom hooks.
- **pages/**: Complete views or routes of the application.
- **services/**: API integrations and business logic services.
- **utils/**: Helper functions and utility modules.
- **main.tsx**: Vite/React bootstrap file.
- **routes.tsx**: Route definitions for navigating between views.
- **store.tsx**: Global state management using Zustand.
- **theme.ts**: Chakra UI theming and design tokens.

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

