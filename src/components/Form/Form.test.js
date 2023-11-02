import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Form } from './index';

describe('Form component', () => {
  it('should render Form component with complete props without errors', () => {
    // Arrange
    const fields = [
      {
        name: 'field1',
        placeholder: 'Field 1',
        onChange: jest.fn(),
        value: 'Value 1',
        type: 'text',
        error: false,
        touched: false,
      },
      {
        name: 'field2',
        placeholder: 'Field 2',
        onChange: jest.fn(),
        value: 'Value 2',
        type: 'text',
        error: false,
        touched: false,
      },
    ];
    const onSubmit = jest.fn();
    const title = 'Test Form';
    const description = 'This is a test form';
    const buttonText = 'Submit';
    const backAction = jest.fn();

      render(
      <Form
        fields={fields}
        onSubmit={onSubmit}
        title={title}
        description={description}
        backAction={backAction}
        buttonText={buttonText}
      ></Form>
    );

    // Act

    // Assert
    expect(screen.getByTestId('form-component')).toBeInTheDocument();
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    fields.forEach((field) => {
      expect(screen.getByDisplayValue(field.value)).toBeInTheDocument();
    });
  });

});
