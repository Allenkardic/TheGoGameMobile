import React from 'react';
import renderer from 'react-test-renderer';
import TodoCard from '.';

describe('TodoCard Component', () => {
  const mockEditPress = jest.fn();
  const mockDeletePress = jest.fn();

  it('renders correctly with all props', () => {
    const component = renderer.create(
      <TodoCard
        title="Sample Todo"
        body="This is a sample todo item."
        date={new Date().toString()}
        onPressEdit={mockEditPress}
        onPressDelete={mockDeletePress}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); // Snapshot test to ensure no unexpected changes
  });
});
