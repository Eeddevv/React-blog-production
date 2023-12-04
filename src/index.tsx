import App from "./App";
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import ThemeProvider from "./theme/ThemeProvider";

const AppWithProviders = () => {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithProviders />);
