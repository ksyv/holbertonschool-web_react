import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';
import '@testing-library/jest-dom';

describe('NotificationItem', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    render(<NotificationItem id={1} type="default" value="test" />);
  });

  it('renders with correct type and value props', () => {
    const { getByText } = render(<NotificationItem id={1} type="default" value="test" />);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('renders with correct html prop', () => {
    const htmlContent = { __html: '<u>test html</u>' };
    const { getByText } = render(<NotificationItem id={1} html={htmlContent} />);
    expect(getByText('test html')).toBeInTheDocument();
  });

  it('calls markAsRead with the correct ID when clicked', () => {
    const markAsReadMock = jest.fn();
    const { getByText } = render(<NotificationItem id={5} markAsRead={markAsReadMock} value="test" />);
    fireEvent.click(getByText('test'));
    expect(markAsReadMock).toHaveBeenCalledWith(5);
  });
});