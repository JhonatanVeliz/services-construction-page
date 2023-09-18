import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Index from "../pages/Index";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            }
        ]
    }
]);

export {
    router,
    RouterProvider
}