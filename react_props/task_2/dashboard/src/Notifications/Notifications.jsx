import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ listNotifications = [] }) {
  const handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      <button
        className="notifications-button"
        onClick={handleButtonClick}
      >
        <img src={closeIcon} alt="Close button" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        {listNotifications.length > 0 ? (
          listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))
        ) : (
          <NotificationItem value="No new notification for now" type="default" />
        )}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;