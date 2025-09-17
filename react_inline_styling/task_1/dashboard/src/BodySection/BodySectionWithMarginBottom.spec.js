import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';
import '../setupTests'; // Importez le fichier de configuration des tests

describe('BodySectionWithMarginBottom', () => {
  it('should render a div with the class bodySectionWithMargin', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test" />);
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBe(true);
  });

  it('should render the BodySection component', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test" />);
    expect(wrapper.find(BodySection).exists()).toBe(true);
  });
});
