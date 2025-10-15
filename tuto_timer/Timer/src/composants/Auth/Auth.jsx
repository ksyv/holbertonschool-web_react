// src/composants/Auth/Auth.jsx

import React, { useState } from 'react';
import { auth } from '../../firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from 'firebase/auth';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }
        } catch (err) {
            setError("Erreur : L'email ou le mot de passe est incorrect.");
            console.error(err);
        }
    };

    return (
        <div className="main-container">
            <header className="app-header">
                <h1 className="app--title">CYBER TIMER</h1>
            </header>
            <div className='boxed--view' style={{ maxWidth: '400px', marginTop: '3rem' }}>
                <div className='form'>
                    <form onSubmit={handleSubmit} className='form--content'>
                        <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
                        {error && <p style={{ color: 'var(--danger-neon)' }}>{error}</p>}
                        <div className='form--item'>
                            <label>Email</label>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='form--item'>
                            <label>Mot de passe</label>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className='button' style={{ borderRadius: '8px', marginTop: '1rem' }}>
                            {isLogin ? 'Se connecter' : "S'inscrire"}
                        </button>
                    </form>
                    <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <span
                            onClick={() => setIsLogin(!isLogin)}
                            style={{ cursor: 'pointer', color: 'var(--primary-neon)' }}
                        >
                            {isLogin ? "Pas de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;