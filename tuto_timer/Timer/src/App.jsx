// src/App.jsx

import React from 'react';
import { useAuth } from './context/AuthContext'; // On importe notre hook
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import Box from './composants/Box';
import Auth from './composants/Auth/Auth';
import './App.css';

function App() {
    const { currentUser } = useAuth(); // On récupère l'utilisateur depuis le contexte

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className='App'>
            {currentUser ? (
                // Si un utilisateur est connecté, on affiche les timers
                <>
                    <button 
                        onClick={handleLogout} 
                        style={{
                            position: 'absolute', 
                            top: '20px', 
                            right: '20px',
                            zIndex: 10
                        }}
                        className='button btn-cancel'
                    >
                        Déconnexion
                    </button>
                    <Box />
                </>
            ) : (
                // Sinon, on affiche le formulaire de connexion
                <Auth />
            )}
        </div>
    );
}

export default App;