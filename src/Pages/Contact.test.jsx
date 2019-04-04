import React from 'react';
import renderer from 'react-test-renderer';
import Contact from './Contact';

test('Testing Contact updating', () => {
  const component = renderer.create(<Contact />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
