import React from 'react';
import { RouterProvider } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import toastConfig from './config/color'
import GlobalStyles from './styles/GlobalStyles';
import { router } from './routes/index'; // Importa o router que você vai criar


function App() {
    return (
        <>
            <RouterProvider router={router} />
            <GlobalStyles />
            <ToastContainer {...toastConfig}/>
        </>
    );
}

export default App;
