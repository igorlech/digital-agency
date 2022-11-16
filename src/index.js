import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import MainLayout from "./components/layout/MainLayout";
import ThemeContext from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeContext.Provider value={{
                primaryColor: '#ffffff',
                secondaryColor: '#87ef65',
                backgroundColor: '#000000',
                textColor: '#000000',
                elevationColor: '#75757C',
                // secondaryFont: 'TODO'
            }}>
                <MainLayout>
                    <App/>
                </MainLayout>
            </ThemeContext.Provider>
        </BrowserRouter>
    </React.StrictMode>
);