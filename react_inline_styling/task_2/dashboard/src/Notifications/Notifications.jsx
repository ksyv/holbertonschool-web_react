import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closeButton from "../assets/close-button.png";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications = [], displayDrawer = false } = this.props;
    let drawerContent = null;

    if (displayDrawer) {
      let content = "No new notification for now";

      if (notifications.length > 0) {
        const items = notifications.map(notification => {
          const itemProps = {
            id: notification.id,
            type: notification.type,
            markAsRead: this.markAsRead
          };

          if (notification.html) {
            return (
              <NotificationItem
                key={notification.id}
                {...itemProps}
                html={notification.html}
              />
            );
          }
          return (
            <NotificationItem
              key={notification.id}
              {...itemProps}
              value={notification.value}
            />
          );
        });
        content = (
          <>
            <p className={css(styles.notificationsTitle)}>Here is the list of notifications</p>
            <ul className={css(styles.notificationsList)}>{items}</ul>
          </>
        );
      }

      drawerContent = (
        <div className={css(styles.notificationsPanel)}>
          <button
            className={css(styles.closeButton)}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            <img
              src={closeButton}
              alt="close"
              className={css(styles.closeButtonImage)}
            />
          </button>
          {content}
        </div>
      );
    }

    return (
      <div className={css(styles.rootNotifications)}>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {drawerContent}
      </div>
    )
  }
}

const styles = StyleSheet.create({
  rootNotifications: {
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      fontSize: '20px',
    },
  },
  menuItem: {
    textAlign: 'right',
    padding: '0.5rem',
  },
  notificationsPanel: {
    border: '1px dashed #E11D3F',
    padding: '1rem',
    position: 'absolute',
    right: '0.5rem',
    top: '2rem',
    width: '400px',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      padding: 0,
    },
  },
  notificationsTitle: {
    fontWeight: 'bold',
  },
  notificationsList: {
    listStyle: 'none',
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeButtonImage: {
    width: '15px',
    height: '15px',
  },
});

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

export default Notifications;
