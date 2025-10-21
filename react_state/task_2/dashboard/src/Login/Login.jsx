import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    const isPasswordValid = this.state.password.length >= 8;
    this.setState({
      email: email,
      enableSubmit: email.length > 0 && isPasswordValid,
    });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    const isEmailValid = this.state.email.length > 0;
    this.setState({
      password: password,
      enableSubmit: password.length >= 8 && isEmailValid,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit} className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.input)}
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.input)}
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
        </div>
        <button
          type="submit"
          disabled={!this.state.enableSubmit}
          className={css(styles.button)}
        >
          OK
        </button>
      </form>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    padding: '16px 24px 0 24px',
    textAlign: 'left',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  input: {
    marginLeft: '10px',
    flexGrow: 1,
    padding: '5px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    '@media (max-width: 900px)': {
      border: 'none',
    },
  },
  button: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,
    },
    '@media (max-width: 900px)': {
      border: '1px solid #E11D3F',
      color: '#E11D3F',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  },
});

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

Login.defaultProps = {
  logIn: () => {},
};

export default Login;