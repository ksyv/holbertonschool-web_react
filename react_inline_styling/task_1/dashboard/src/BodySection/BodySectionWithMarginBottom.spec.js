import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders BodySection with a margin-bottom style', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);
    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).prop('title')).toBe('test title');
  });
});
