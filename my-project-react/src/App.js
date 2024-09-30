import React from 'react';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { router } from './routes/index'; // Importa o router que você vai criar

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <GlobalStyles />
        </>
    );
}

export default App;
