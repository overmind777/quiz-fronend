import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Discover from './pages/Discover.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'

import './index.css'
import 'modern-normalize/modern-normalize.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/discover',
                element: <Discover />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
