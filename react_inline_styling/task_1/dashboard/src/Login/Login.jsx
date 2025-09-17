import React from 'react';
import { useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>

      <form>
        <label htmlFor='email' onClick={() => emailRef.current && emailRef.current.focus()}>Email:</label>
        <input id='email' name='email' type='email' ref={emailRef} />

        <label htmlFor='password' onClick={() => passwordRef.current && passwordRef.current.focus()}>Password:</label>
        <input id='password' name='password' type='password' role="textbox" ref={passwordRef} />

        <button type='submit'>OK</button>
      </form>
    </div>
  )
}

const styles = StyleSheet.create({
  AppBody: {
    padding: '2rem',
    height: '40vh',
    borderBottom: '3px solid #E11D3F',
  },
});

export default Login;
