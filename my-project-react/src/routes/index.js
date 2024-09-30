import React from "react";
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import Header from '../components/Header';

// Componente Layout que inclui o Header
const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // O Layout renderiza o Header e o Outlet,
        children: [
            {
                index: true, // Para a rota "/"
                element: <Login />,
            },
            {
                path: '*',
                element: <Page404 />,
            },
        ],
    },
]);

export { router }; // Exporte o router para ser usado no App
