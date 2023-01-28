import React from 'react';
import { createRoot } from "react-dom/client"
import './index.css';
import App from './App';
import Context from './Context';

const RenderApp = () => {
    return (
        <Context>
            <App />
        </Context>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RenderApp />)

