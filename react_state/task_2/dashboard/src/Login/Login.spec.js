import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('Login Component Tests', () => {
    let logInMock;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        logInMock = jest.fn();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        jest.clearAllMocks();
    });

    test('Renders without crashing', () => {
        render(<Login logIn={logInMock} />);
        expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    });

    test('Renders 2 input tags and 1 button', () => {
        render(<Login logIn={logInMock} />);
        expect(screen.getAllByRole('textbox')).toHaveLength(2); // Email (text) and Password (password) inputs
        expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
    });

    test('Submit button is disabled by default', () => {
        render(<Login logIn={logInMock} />);
        expect(screen.getByRole('button', { name: /ok/i })).toBeDisabled();
    });

    test('Submit button is enabled when email and password meet criteria', () => {
        render(<Login logIn={logInMock} />);
        
        fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: 'test@test.com' } });
        fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password123' } });
        
        expect(screen.getByRole('button', { name: /ok/i })).toBeEnabled();
    });

    test('logIn method is called with correct email and password on submit', () => {
        const email = 'test@holberton.com';
        const password = 'securepassword';
        
        render(<Login logIn={logInMock} />);

        // 1. Entrer des valeurs valides
        fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: email } });
        fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: password } });
        
        // 2. Vérifier que le bouton est activé
        const submitButton = screen.getByRole('button', { name: /ok/i });
        expect(submitButton).toBeEnabled();

        // 3. Soumettre le formulaire
        fireEvent.click(submitButton);

        // 4. Vérifier que logIn a été appelé avec les bonnes valeurs
        expect(logInMock).toHaveBeenCalledTimes(1);
        expect(logInMock).toHaveBeenCalledWith(email, password);
    });
});