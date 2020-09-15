import React from 'react';
import { render } from '@testing-library/react';
import Todo from './todo.component';

test('renders learn react link', () => {
  const { getByText } = render(<Todo/>);
  const h1 = getByText(/Peter's Todo App in React using Hooks/i);
  expect(h1).toBeInTheDocument();
});
