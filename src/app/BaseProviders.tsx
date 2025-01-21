import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';


const BaseProviders = ({children} : {children : ReactNode}) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </React.StrictMode>
    );
};

export default BaseProviders;