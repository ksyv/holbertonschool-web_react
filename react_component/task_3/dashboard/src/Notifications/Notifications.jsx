import React, { Component } from 'react';
import './Notifications.css'
import NotificationItem from './NotificationItem';
import closeButton from "../assets/close-button.png";

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
                        <p>Here is the list of notifications</p>
                        <ul>{items}</ul>
                    </>
                );
            }

            drawerContent = (
                <div className="notifications">
                    <button
                        style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        aria-label="Close"
                        onClick={() => console.log('Close button has been clicked')}
                    >
                        <img
                            src={closeButton}
                            alt="close"
                            style={{ width: '15px', height: '15px' }}
                        />
                    </button>
                    {content}
                </div>
            );
        }

        return (
            <div className="root-notifications">
                <div className="notification-container">
                    <div className="notifications-title">Your notifications</div>
                    {drawerContent}
                </div>
            </div>
        )
    }
}

export default Notifications;