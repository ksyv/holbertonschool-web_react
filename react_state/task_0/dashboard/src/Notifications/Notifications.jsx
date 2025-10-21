import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const fadeIn = {
  '0%': {
    opacity: 0.5,
  },
  '100%': {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '33%': {
    transform: 'translateY(-5px)',
  },
  '66%': {
    transform: 'translateY(5px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
};

class Notifications extends PureComponent {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { notifications = [], displayDrawer = false, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className={css(styles.notificationsContainer)}>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>Your notifications</div>
        )}
        {displayDrawer && (
          <div className={css(styles.notificationsPanel)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              x
            </button>
            {notifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.notificationsList)}>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <p className={css(styles.noNotifications)}>No new notification for now</p>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  notificationsContainer: {
    float: 'right',
    position: 'relative',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
    },
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  notificationsPanel: {
    position: 'absolute',
    top: '30px',
    right: '0',
    border: '1px solid #E11D3F',
    padding: '10px',
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#ffffff',
      border: 'none',
      fontSize: '20px',
    },
  },
  notificationsList: {
    listStyle: 'none',
    padding: '0',
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },
  noNotifications: {
    padding: '1rem',
  },
  closeButton: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  fadeIn,
  bounce,
});

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;