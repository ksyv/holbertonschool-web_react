
import React, {useState} from 'react';
import { useTheme } from '../../context/ThemeContext';
import { auth } from '../../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

function Auth() {
    const { theme } = useTheme();
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
                <h1 className="app--title">{theme.title}</h1>
            </header>

            <div className="auth-description">
                <h2>Maîtrisez votre temps, boostez votre focus.</h2>
                <p>Créez et personnalisez vos chronomètres, minuteurs et sessions Pomodoro. Choisissez votre thème et transformez votre productivité.</p>
            </div>

            <div className='boxed--view'>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form--content'>
                        <h2>{isLogin ? 'Connexion' : 'Inscription'}</h2>
                        {error && <p style={{ color: 'var(--danger-neon)' }}>{error}</p>}
                        <div className='form--item'>
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='form--item'>
                            <label>Mot de passe</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <div className='form--button'>
                        <button type="submit" className='button btn--submit'>
                            {isLogin ? 'Se connecter' : "S'inscrire"}
                        </button>
                        <span onClick={() => setIsLogin(!isLogin)} className='button btn--cancel' style={{ cursor: 'pointer', textTransform: 'none', fontSize: '1.4rem' }}>
                            {isLogin ? "S'inscrire" : 'Se connecter'}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;