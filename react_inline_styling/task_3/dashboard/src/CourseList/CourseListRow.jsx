import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = StyleSheet.create({
  rowStyle: {
    backgroundColor: '#f5f5f5ab',
  },
  headerRowStyle: {
    backgroundColor: '#deb5b545',
  },
});

const thStyle = StyleSheet.create({
  thStyle: {
    textAlign: 'left',
  },
});

function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  const selectedStyle = isHeader ? css(rowStyle.headerRowStyle) : css(rowStyle.rowStyle);

  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr className={selectedStyle}>
          <th colSpan="2" className={css(thStyle.thStyle)}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={selectedStyle}>
          <th className={css(thStyle.thStyle)}>{textFirstCell}</th>
          <th className={css(thStyle.thStyle)}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={selectedStyle}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
