import React from 'react';
import Contact from './Contact';
import renderer from 'react-test-renderer';

test('Testing Contact updating', () => {
  const component = renderer.create(<Contact />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
