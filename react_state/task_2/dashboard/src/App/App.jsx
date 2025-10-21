import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import newContext from '../Context/context';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: this.logOut.bind(this),
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  static defaultProps = {
    // Les props isLoggedIn et logOut sont supprimées
  };

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { displayDrawer, user } = this.state;

    const notificationsList = [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: getLatestNotification()
      }
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    return (
      <newContext.Provider value={this.state}>
        <>
          <Notifications
            notifications={notificationsList}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />

          <Header />

          <div className={css(styles.AppBody)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList courses={coursesList} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}

            <BodySection title="News from the School">
              <p>Holberton School News goes here</p>
            </BodySection>
          </div>

          <Footer />
        </>
      </newContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    paddingTop: '2rem',
    paddingBottom: '20rem',
    fontSize: '1.25rem',
    borderBottom: '3px solid #E11D3F',
    fontFamily: 'Arial, Helvetica, sans-serif',
    minHeight: '100vh',
    position: 'relative',
    textAlign: 'center',
  },
  AppFooter: {
    textAlign: 'center',
    fontStyle: 'italic',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTop: '3px solid #E11D3F',
  },
});

App.propTypes = {};

App.defaultProps = {};

export default App;