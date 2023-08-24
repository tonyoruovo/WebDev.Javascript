import { Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";

const routes = (signedIn) => [{
    path: "/",
    /*This will be changed so that the user goes to their dashboard immediately */
    element: <Home />,
    children: [
        {path: "/dashbord", element: ""}
    ]
}]

export default routes;
