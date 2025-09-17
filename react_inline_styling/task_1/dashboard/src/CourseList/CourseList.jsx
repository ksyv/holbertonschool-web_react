import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

function CourseList({ courses = [] }) {
  if (courses.length === 0) {
    return (
      <div className={css(styles.CourseListContainer)}>
        <table id="CourseList" className={css(styles.CourseList)}>
          <tbody>
            <CourseListRow textFirstCell="No course available yet" />
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={css(styles.CourseListContainer)}>
      <table id="CourseList" className={css(styles.CourseList)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {courses.map(course => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit.toString()}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = StyleSheet.create({
  CourseListContainer: {
    padding: '2rem',
  },
  CourseList: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ccc',
  },
});

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    credit: PropTypes.number.isRequired,
  })),
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
