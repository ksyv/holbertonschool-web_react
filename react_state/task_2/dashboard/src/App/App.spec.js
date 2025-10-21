import React from 'react';
import App from './App.jsx';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import '@testing-library/jest-dom';

describe('App Component Tests', () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    test('Renders Notifications component', () => {
        render(<App />);
        const notificationTitle = screen.getByText(/your notifications/i);
        expect(notificationTitle).toBeInTheDocument();
    });

    test('Renders Header component', () => {
        render(<App />);
        const header = screen.getByText(/school dashboard/i);
        expect(header).toBeInTheDocument();
    });

    test('Renders Footer component', () => {
        render(<App />);
        const footer = screen.getByText(/copyright/i);
        expect(footer).toBeInTheDocument();
    });

    test('Should render the Login component by default', () => {
        render(<App />);

        const loginText = screen.getByText(/login to access the full dashboard/i);
        expect(loginText).toBeInTheDocument();

        const courseList = screen.queryByText(/available courses/i);
        expect(courseList).not.toBeInTheDocument();
    });

    test('Displays Log in to continue title by default', () => {
        render(<App />);

        const loginTitle = screen.getByRole('heading', { name: /log in to continue/i });
        expect(loginTitle).toBeInTheDocument();
    });

    test('Displays News from the School section by default', () => {
        render(<App />);

        const newsTitle = screen.getByRole('heading', { name: /news from the school/i });
        expect(newsTitle).toBeInTheDocument();

        const newsParagraph = screen.getByText(/holberton school news goes here/i);
        expect(newsParagraph).toBeInTheDocument();
    });

    test('After successful login, CourseList is displayed and Login is removed', async () => {
        render(<App />);
        
        // Simuler la connexion en appelant la méthode logIn de l'instance App
        // NOTE: Comme App ne prend plus de props isLoggedIn, nous devons simuler l'action utilisateur
        
        // 1. Trouver les champs de connexion
        fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: 'test@holberton.com' } });
        fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password123' } });
        
        // 2. Soumettre le formulaire
        fireEvent.click(screen.getByRole('button', { name: /ok/i }));

        // 3. Vérifier que la liste de cours est rendue
        await waitFor(() => {
            const courseListTitle = screen.getByRole('heading', { name: /course list/i });
            expect(courseListTitle).toBeInTheDocument();
        });

        // 4. Vérifier que Login est retiré
        const loginTitle = screen.queryByRole('heading', { name: /log in to continue/i });
        expect(loginTitle).not.toBeInTheDocument();
    });

    test('Default: The notification list is not displayed by default', () => {
        render(<App />);
        const closeButton = screen.queryByRole('button', { name: /close/i });
        const list = screen.queryByText(/here is the list of notifications/i);

        expect(closeButton).not.toBeInTheDocument();
        expect(list).not.toBeInTheDocument();
    });

    test('Clicking the menu item displays the notification list', () => {
        render(<App />);
        const menuItem = screen.getByText(/your notifications/i);

        fireEvent.click(menuItem);

        const closeButton = screen.getByRole('button', { name: /close/i });
        const list = screen.getByText(/here is the list of notifications/i);

        expect(closeButton).toBeInTheDocument();
        expect(list).toBeInTheDocument();
    });

    test('Clicking the close button hides the notification list', () => {
        render(<App />);
        const menuItem = screen.getByText(/your notifications/i);

        fireEvent.click(menuItem);

        let closeButton = screen.getByRole('button', { name: /close/i });
        expect(closeButton).toBeInTheDocument();

        fireEvent.click(closeButton);

        closeButton = screen.queryByRole('button', { name: /close/i });
        const list = screen.queryByText(/here is the list of notifications/i);

        expect(closeButton).not.toBeInTheDocument();
        expect(list).not.toBeInTheDocument();
    });
});

describe('App Keyboard Events Tests', () => {
    let alertMock;
    let logOutMock;

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
        alertMock = jest.spyOn(window, "alert").mockImplementation(() => { });
        logOutMock = jest.fn();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
        alertMock.mockRestore();
    });
    
    // Le test ctrl+h utilise désormais l'état/contexte pour logOut
    test("LogOut when ctrl + h", () => {
        const { container } = render(<App />);
        
        // Simuler la connexion initiale
        fireEvent.change(screen.getByLabelText(/email:/i), { target: { value: 'test@holberton.com' } });
        fireEvent.change(screen.getByLabelText(/password:/i), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: /ok/i }));
        
        // Vérifier que CourseList est visible
        expect(screen.getByRole('heading', { name: /course list/i })).toBeInTheDocument();

        const keyboardEvent = new KeyboardEvent("keydown", {
            key: "h",
            ctrlKey: true,
            bubbles: true,
        });
        
        document.dispatchEvent(keyboardEvent);

        // Vérifier l'alerte
        expect(alertMock).toHaveBeenCalledWith("Logging you out");
        
        // Vérifier que l'utilisateur est déconnecté (Login est à nouveau visible)
        expect(screen.getByRole('heading', { name: /log in to continue/i })).toBeInTheDocument();
    });

    test("Alert when ctrl + h", () => {
        render(<App />);
        
        const keyboardEvent = new KeyboardEvent("keydown", {
            key: "h",
            ctrlKey: true,
            bubbles: true,
        });
        document.dispatchEvent(keyboardEvent);

        expect(alertMock).toHaveBeenCalledWith("Logging you out");
    });
});