import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('renders CourseList component without crashing', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('renders the correct number of rows', () => {
    const courses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList courses={courses} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });

  it('renders "No course available yet" when courses array is empty', () => {
    const wrapper = shallow(<CourseList courses={[]} />);
    expect(wrapper.find(CourseListRow)).toHaveLength(1);
    expect(wrapper.find(CourseListRow).prop('textFirstCell')).toBe('No course available yet');
  });
});
