import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <header className={css(styles.AppHeader)}>
      <img src={holbertonLogo} className={css(styles.AppLogo)} alt="holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: 'white',
    borderBottom: '3px solid #E11D3F',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    color: '#E11D3F',
  },
  AppLogo: {
    height: '150px',
    pointerEvents: 'none',
  },
});

export default Header;
