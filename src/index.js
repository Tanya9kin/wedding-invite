import * as ReactDOMClient from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./i18n";
import App from "./App";
import ErrorPage from "./error-page";
import RSVP from "./components/RSVP/RSVP";
import i18n from "./i18n";

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

const loadingMarkup = (
  <div>
    <h3>Loading...</h3>
  </div>
);

/*
 The index.html file is created with webpack, so there is no root div
 This code adds a root div as the only child of the html body tag
 */
const rootNode = document.createElement("div");
rootNode.id = "root";
document.body.appendChild(rootNode);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
document.querySelector("html").lang = "en";
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>
);
