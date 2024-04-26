import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Discover from './pages/Discover.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'

import './index.css'
import 'modern-normalize/modern-normalize.css'
import store from './redux/store.ts'
import ForAdults from './pages/ForAdults.tsx'
import ForChildren from './pages/ForChildren.tsx'

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
            {
                path: '/adults',
                element: <ForAdults />,
            },
            {
                path: '/children',
                element: <ForChildren />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    </React.StrictMode>
)
