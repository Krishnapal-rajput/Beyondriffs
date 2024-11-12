import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
const root = createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
