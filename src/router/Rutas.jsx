import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout";
import Index from "../pages/Index";
import Services from "../pages/Services";
import Projects from "../pages/Projects";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
]);

export {
    router,
    RouterProvider
}