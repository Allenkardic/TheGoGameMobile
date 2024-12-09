import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';

describe('Input Component', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Input value="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
