import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../components/error/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "error",
    Component: Error,
  },
]);
