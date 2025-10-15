// src/App.jsx

import React from 'react';
import { useAuth } from './context/AuthContext';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Box from './composants/Box';
import Auth from './composants/Auth/Auth';
import './App.css';

function App() {
    const { currentUser } = useAuth();

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className='App'>
            {currentUser ? (
                // On ajoute un conteneur principal pour la mise en page
                <div className="main-container">
                    <header className="app-header">
                        <h1 className="app--title">CYBER TIMER</h1>
                        <button 
                            onClick={handleLogout} 
                            className='button btn-logout'
                        >
                            Déconnexion
                        </button>
                    </header>
                    <Box />
                </div>
            ) : (
                <Auth />
            )}
        </div>
    );
}

export default App;