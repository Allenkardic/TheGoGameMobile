import React from 'react';
import renderer from 'react-test-renderer';
import NavigationIcon from '.';

describe('NavigationIcon Component', () => {
  it('renders correctly with default icon', () => {
    const component = renderer.create(<NavigationIcon onPress={() => {}} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles onPress correctly', () => {
    const mockOnPress = jest.fn();
    const component = renderer.create(<NavigationIcon onPress={mockOnPress} />);
    const root = component.root;
    const pressable = root.findByProps({testID: 'navigation-icon'});
    pressable.props.onPress(); // Simulate the press action

    expect(mockOnPress).toHaveBeenCalled();
  });
});
