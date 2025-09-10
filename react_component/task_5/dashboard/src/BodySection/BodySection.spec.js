import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection', () => {
  it('should render a heading with the title prop value', () => {
    const title = 'Test Title';
    const wrapper = shallow(<BodySection title={title} />);
    expect(wrapper.find('h2').text()).toBe(title);
  });

  it('should render any number of children passed to it', () => {
    const wrapper = shallow(
      <BodySection title="test">
        <p>Test children</p>
        <p>Another child</p>
      </BodySection>
    );
    expect(wrapper.find('p').length).toBe(2);
    expect(wrapper.find('p').first().text()).toBe('Test children');
  });
});