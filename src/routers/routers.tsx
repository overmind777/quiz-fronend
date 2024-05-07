import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage/AuthPage'
import Register from '../components/Register'
import Discover from '../pages/Discover'
import ForAdults from '../pages/ForAdults'
import ForChildren from '../pages/ForChildren'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                // path: '/home',
                index: true,
                element: <Home />,
            },
            {
                path: '/auth',
                element: <AuthPage />,
                children: [
                    {
                        path: '/auth/register',
                        element: <Register />,
                    },
                ],
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

export default appRouter
