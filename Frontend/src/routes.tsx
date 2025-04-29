import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import AnimeDatailPage from "./pages/AnimeDatailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "anime/:id", element: <AnimeDatailPage /> },
    ],
  },
]);

export default router;
