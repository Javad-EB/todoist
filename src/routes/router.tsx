import { createBrowserRouter } from "react-router-dom";
import React from "react";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import Layout from "../component/Layout";
import Todos from "../pages/Todos";
import Page405 from "../component/Page405";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));
const Contact = React.lazy(() => import("../pages/Contact"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/:id",
        element: <Todos />,
      },
      {
        path: "/todos/add",
        element: <Todos />,
      },
      {
        path: "/*",
        element: <Page405 />,
      },
    ],
  },
]);
