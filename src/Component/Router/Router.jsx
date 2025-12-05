
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Root from "../Root";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/available-foods", element: <AvailableFoods></AvailableFoods> },
      {path :"/register",Component: Register},
      {path:"/Login",Component:Login},

]
  }
]);
