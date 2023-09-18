import React from "react";
import ReactDOM from 'react-dom/client'
import { router, RouterProvider } from "./router/Rutas";

import './css/normalize.css'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)