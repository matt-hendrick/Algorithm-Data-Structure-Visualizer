import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input tests', () => {
  it('Input correctly displays entered text', () => {
    render(<Input />);

    userEvent.type(screen.getByRole('textbox'), '3');
    expect(screen.getByRole('textbox')).toHaveValue('3');
  });
});
