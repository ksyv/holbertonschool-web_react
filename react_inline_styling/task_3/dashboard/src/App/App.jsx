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

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static defaultProps = {
    logOut: () => {},
  };

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn = false } = this.props;

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
      <>
        <Notifications notifications={notificationsList} />

        <Header />

        <div className={css(styles.AppBody)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>

        <Footer />
      </>
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

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;