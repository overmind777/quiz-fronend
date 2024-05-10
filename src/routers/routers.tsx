import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import AuthPage from '../pages/AuthPage/AuthPage'
import Register from '../components/auth/Register'
import Discover from '../pages/Discover'
import ForAdults from '../pages/ForAdults'
import ForChildren from '../pages/ForChildren'
import Login from '../components/auth/Login'
import UserHomePage from '../pages/UserHomePage/UserHomePage'
import FavoritePage from '../pages/FavoritePage'
import OwnerQuiz from '../pages/OwnerQuiz'

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
            {
                path: '/favorite',
                element: <FavoritePage />,
            },
            {
                path: '/myQuiz',
                element: <OwnerQuiz />,
            },
            {
                path: '/home',
                element: <UserHomePage />,
            },
        ],
    },
])

export default appRouter
