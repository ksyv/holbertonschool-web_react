import React, { useEffect } from 'react';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import { themes } from './themes';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Box from './composants/Box';
import Auth from './composants/Auth/Auth';
import './App.css';
import Footer from './composants/Footer';

function ThemeSelector() {
    const { themeName, setThemeName } = useTheme();

    return (
        <select 
            value={themeName} 
            onChange={(e) => setThemeName(e.target.value)}
            className="theme-selector"
        >
            {Object.keys(themes).map(themeKey => (
                <option key={themeKey} value={themeKey}>
                    {themes[themeKey].name}
                </option>
            ))}
        </select>
    );
}

function App() {
    const { currentUser } = useAuth();
    const { theme } = useTheme();

    useEffect(() => {
        const root = document.documentElement;
        Object.keys(theme.colors).forEach(key => {
            root.style.setProperty(key, theme.colors[key]);
        });

        const fontLink = document.createElement('link');
        fontLink.id = 'app-font';
        fontLink.href = `https://fonts.googleapis.com/css2?family=${theme.googleFont}:wght@400;700;900&display=swap`;
        fontLink.rel = 'stylesheet';
        
        const existingFontLink = document.getElementById('app-font');
        if (existingFontLink) {
            existingFontLink.remove();
        }
        document.head.appendChild(fontLink);
        
        document.body.style.fontFamily = `'${theme.googleFont}', sans-serif`;

    }, [theme]);

    const handleLogout = () => signOut(auth);

    return (
        <div className='App'>
            <div className='main'>
                {currentUser ? (
                    <div className="main-container">
                        <header className="app-header">
                            <h1 className="app--title">{theme.title}</h1>
                            <div className="header-controls">
                                <ThemeSelector />
                                <button onClick={handleLogout} className='button btn-logout'>
                                    Déconnexion
                                </button>
                            </div>
                        </header>
                        <Box />
                    </div>
                ) : ( <Auth /> )}
            </div>
            <Footer />
        </div>
    );
}

export default App;