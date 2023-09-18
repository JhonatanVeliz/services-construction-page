import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />
    }
]);

export {
    router,
    RouterProvider
}