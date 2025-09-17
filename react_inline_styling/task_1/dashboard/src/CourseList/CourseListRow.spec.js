import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one columnheader with colspan = 2 when isHeader is true and textSecondCell is null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Available courses" textSecondCell={null} />);
    const thElement = screen.getByRole('columnheader');
    expect(thElement).toBeInTheDocument();
    expect(thElement).toHaveAttribute('colSpan', '2');
    expect(thElement).toHaveTextContent('Available courses');
  });

  it('renders 2 th cells when isHeader is true and textSecondCell is not null', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />);
    const thElements = screen.getAllByRole('columnheader');
    expect(thElements).toHaveLength(2);
    expect(thElements[0]).toHaveTextContent('Course name');
    expect(thElements[1]).toHaveTextContent('Credit');
  });

  it('sets the background color to #deb5b545 when isHeader is true', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle('background-color: rgba(222, 181, 181, 0.27)');
  });

  it('sets the background color to #f5f5f5ab when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />);
    const trElement = screen.getByRole('row');
    expect(trElement).toHaveStyle('background-color: rgba(245, 245, 245, 0.67)');
  });
});