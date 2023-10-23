import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  test('it should mount', () => {
    render(<Avatar />);
    
    const avatar = screen.getByTestId('Avatar');

    expect(avatar).toBeInTheDocument();
  });
});