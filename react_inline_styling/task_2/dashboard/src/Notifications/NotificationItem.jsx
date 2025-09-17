import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead() {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  }

  render() {
    const { type, value, html } = this.props;

    const styles = StyleSheet.create({
      default: {
        color: 'blue',
      },
      urgent: {
        color: 'red',
      },
    });

    const selectedStyle = type === 'urgent' ? styles.urgent : styles.default;

    if (html) {
      return (
        <li
          data-notification-type={type}
          onClick={this.markAsRead}
          dangerouslySetInnerHTML={html}
          className={css(selectedStyle)}
        />
      );
    }
    return (
      <li
        data-notification-type={type}
        onClick={this.markAsRead}
        className={css(selectedStyle)}
      >
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;