import React from 'react';
import { useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>

      <form className={css(styles.AppForm)}>
        <label htmlFor="email" className={css(styles.AppLabel)} onClick={() => emailRef.current && emailRef.current.focus()}>
          Email:
        </label>
        <input id="email" name="email" type="email" ref={emailRef} className={css(styles.AppInput)} />

        <label htmlFor="password" className={css(styles.AppLabel)} onClick={() => passwordRef.current && passwordRef.current.focus()}>
          Password:
        </label>
        <input id="password" name="password" type="password" role="textbox" ref={passwordRef} className={css(styles.AppInput)} />

        <button type="submit" className={css(styles.AppButton)}>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    padding: '2rem',
    height: '40vh',
    borderBottom: '3px solid #E11D3F',
  },
  AppForm: {
    // Styles pour les grands écrans
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1rem',
    '@media (max-width: 900px)': {
      // Styles pour les petits écrans
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '0 2rem',
    },
  },
  AppLabel: {
    // Styles pour les grands écrans
    textAlign: 'left',
    '@media (max-width: 900px)': {
      // Styles pour les petits écrans
      width: '100%',
      marginBottom: '0.5rem',
    },
  },
  AppInput: {
    // Styles pour les grands écrans
    marginBottom: '1rem',
    '@media (max-width: 900px)': {
      // Styles pour les petits écrans
      width: '100%',
    },
  },
  AppButton: {
    // Styles pour les grands écrans
    '@media (max-width: 900px)': {
      // Styles pour les petits écrans
      width: '100%',
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#E11D3F',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  },
});

export default Login;
