import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from './';
import {jest} from '@jest/globals';

describe('Button Component', () => {
  let mockOnPress: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers(); // Mock timers
    mockOnPress = jest.fn();
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear any timers
    jest.useRealTimers(); // Reset to default behavior
  });

  it('renders correctly with default props', () => {
    const {toJSON} = render(
      <Button onPress={mockOnPress} text="Click Me" isSubmitting={false} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders spinner when isSubmitting is true', () => {
    const {toJSON} = render(
      <Button onPress={mockOnPress} text="Submit" isSubmitting={true} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('triggers onPress when button is pressed', () => {
    const {getByTestId} = render(
      <Button onPress={mockOnPress} text="Click Me" isSubmitting={false} />,
    );
    const button = getByTestId('button');
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });

  it('applies custom styles', () => {
    const customStyle = {backgroundColor: 'blue'};
    const {toJSON} = render(
      <Button
        onPress={mockOnPress}
        text="Styled Button"
        isSubmitting={false}
        style={customStyle}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
