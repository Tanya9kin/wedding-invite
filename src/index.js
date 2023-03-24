import * as ReactDOMClient from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import RSVP from "./components/RSVP/RSVP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "RSVP",
        element: <RSVP />,
      },
    ],
  },
]);
/*
 The index.html file is created with webpack, so there is no root div
 This code adds a root div as the only child of the html body tag
 */
const rootNode = document.createElement("div");
rootNode.id = "root";
document.body.appendChild(rootNode);

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
