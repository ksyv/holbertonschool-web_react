import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    let style;
    if (type === 'urgent') {
      style = css(styles.notificationItem, styles.urgent);
    } else {
      style = css(styles.notificationItem, styles.default);
    }

    return (
      <li
        className={style}
        data-notification-type={type}
        onClick={() => markAsRead(id)}
        dangerouslySetInnerHTML={html ? html : null}
      >
        {value}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  notificationItem: {
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '10px 8px',
      fontSize: '20px',
      borderBottom: '1px solid black',
    },
  },
  default: {
    color: '#0000ff',
  },
  urgent: {
    color: '#ff0000',
  },
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;