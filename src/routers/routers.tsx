import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage/AuthPage'
import Register from '../components/auth/Register'
import Discover from '../pages/Discover'
import ForAdults from '../pages/ForAdults'
import ForChildren from '../pages/ForChildren'
import Login from '../components/auth/Login'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
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
                    {
                        path: '/auth/login',
                        element: <Login />,
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
