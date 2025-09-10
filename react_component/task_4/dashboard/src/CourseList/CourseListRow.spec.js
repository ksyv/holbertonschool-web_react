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

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell="60" />);
    const trElement = screen.getByRole('row');
    const tdElements = screen.getAllByRole('cell');
    expect(trElement).toBeInTheDocument();
    expect(tdElements).toHaveLength(2);
    expect(tdElements[0]).toHaveTextContent('ES6');
    expect(tdElements[1]).toHaveTextContent('60');
  });
});