import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

describe('Notifications', () => {
  // APHRODITE NOTE: Supprimer l'injection de style pour les tests
  // Sinon les tests qui vérifient les couleurs échoueront.
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders the right number of notification items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    const wrapper = shallow(<Notifications notifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verifies that markAsRead logs the correct message', () => {
    const logSpy = jest.spyOn(console, 'log');
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications notifications={listNotifications} />);
    wrapper.find(NotificationItem).first().prop('markAsRead')(1);
    expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    logSpy.mockRestore();
  });
});