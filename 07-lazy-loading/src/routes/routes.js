import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactUsPage from "../pages/ContactUsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AboutPage />,
        path: "about-us",
      },
      {
        element: <ContactUsPage />,
        path: "contact-us",
      },
    ],
  },
]);
