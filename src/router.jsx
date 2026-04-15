import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import FriendDetailsPage from "./pages/FriendDetailsPage"
import TimelinePage from "./pages/TimelinePage"
import StatsPage from "./pages/StatsPage"
import NotFoundPage from "./pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "friend/:id",
        element: <FriendDetailsPage />,
      },
      {
        path: "timeline",
        element: <TimelinePage />,
      },
      {
        path: "stats",
        element: <StatsPage />,
      },
    ],
  },
])

export default router