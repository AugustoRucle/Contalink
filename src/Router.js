import React from 'react';

import ListInvoicesPage from './pages/ListInvoices';
import NotFoundPage from './pages/NotFound';
import App from './App';

import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

function Router() {
    const location = useLocation();

    return <App>
        <Routes
            location={location}
            key={location.pathname}
        >
            <Route
                index
                element={
                    <ListInvoicesPage />
                }
            />

            <Route
                path="*"
                element={
                    <NotFoundPage />
                }
            />
        </Routes>
    </App>
}

export default Router;
