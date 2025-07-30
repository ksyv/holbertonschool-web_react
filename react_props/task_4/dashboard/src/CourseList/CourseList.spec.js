import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders 5 different rows when it receives an array of courses objects', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    render(<CourseList courses={courses} />);
    // 2 lignes d'en-tête + 3 lignes de cours = 5 lignes
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
  });

  it('renders 1 row whenever it receives an empty array', () => {
    render(<CourseList courses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1); // La ligne "No course available yet"
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
});