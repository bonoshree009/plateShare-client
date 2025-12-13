
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AvailableFoods from "../Pages/AvailableFoods";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Root from "../Root";
import PrivateRoute from "../Auth/PrivateRoute";
import AddFood from '../Pages/AddFood'
import ManageFoods from "../Pages/ManageFoods";
import UpdateFood from "../Pages/UpdateFood";
import NotFound from "../Pages/NotFound";
import FoodDetails from "../Pages/FoodDetails";
import FoodRequests from "../Pages/FoodRequests"

export const router = createBrowserRouter([
  {
    path: "/",Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/available-foods", element: <AvailableFoods></AvailableFoods> },
      {path :"/register",Component: Register},
      {path:"/Login",Component:Login},
      {path:'/add-food',element:( <PrivateRoute><AddFood></AddFood></PrivateRoute>)},
      {path:'/manage-my-foods',element:(<PrivateRoute><ManageFoods></ManageFoods></PrivateRoute>)},
      {path: "/update-food/:id",element: ( <PrivateRoute><UpdateFood /></PrivateRoute>  )},
      { path: "/food/:id", element: <PrivateRoute><FoodDetails /></PrivateRoute> },
      {path:"/foodRequests", element:<PrivateRoute><FoodRequests></FoodRequests></PrivateRoute>}

]
  },
   { path:"*", Component: NotFound}
]);
