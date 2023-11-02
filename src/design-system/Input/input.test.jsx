import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Input } from './index';

describe('Input component', () => {
  it('should render Input component with complete props without errors', () => {
    // Arrange
    const placeholder = 'Test';
    const error = '';
    const touched = false;
    const type = 'text';
    const value = 'test';
    const name = 'test';
    const onChange = jest.fn();
    render(
      <Input
        inputProps={{ name, onChange, value, type }}
        validationProps={{ error, touched }}
        labelProps={{ placeholder }}
      />
    );
    const inputElement = screen.getByRole('textbox');

    // Act

    // Assert
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveAttribute('value', value);
    expect(inputElement).toHaveAttribute('name', name);
  });

  it('should render Input component with error message', () => {
    // Arrange
    const placeholder = 'Test';
    const error = 'Name is required';
    const touched = true;
    const type = 'text';
    const value = 'test';
    const name = '';
    const onChange = jest.fn();

    // Act
    render(
      <Input
        inputProps={{ name, onChange, value, type }}
        validationProps={{ error, touched }}
        labelProps={{ placeholder }}
      />
    );
    const inputElement = screen.getByRole('textbox');
    const textElement = screen.getByText(error);

    // Assert
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', type);
    expect(inputElement).toHaveAttribute('value', value);
    expect(inputElement).toHaveAttribute('name', name);
    expect(textElement).toBeInTheDocument();
  });
});
