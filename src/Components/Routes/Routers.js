import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Booking from '../Booking/Booking';
import Rooms from '../Rooms/Rooms';
import Home from '../Home/Home';
import Main from '../Layouts/Main';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import ProtectedRoutes from './ProtectedRoutes';
import Blogs from '../Blogs/Blogs';

export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookings',
                element: <ProtectedRoutes><Booking></Booking></ProtectedRoutes>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/:id',
                loader: ({ params }) => fetch(`https://travelly-server.vercel.app/${params.id}`),
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }

        ]
    }
])
