import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../App';

describe('<App />', () => {
  test('rendering', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toHaveTextContent('Hello World!');
  });
});
