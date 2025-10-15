// src/context/AuthContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase'; // On importe notre config firebase
import { onAuthStateChanged } from 'firebase/auth';

// 1. On crée le portail de téléportation
const AuthContext = createContext();

// 2. On crée un "fournisseur" qui mettra les données dans le portail
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // onAuthStateChanged est une fonction magique de Firebase.
        // Elle s'active à chaque fois que l'état de connexion change (connexion, déconnexion).
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        // On retourne la fonction de "nettoyage" pour se désabonner quand le composant est démonté.
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
    };

    // On ne rend le reste de l'app que lorsque Firebase a fini de vérifier la connexion.
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

// 3. On crée un "hook" personnalisé pour ouvrir facilement le portail de réception
export function useAuth() {
    return useContext(AuthContext);
}