import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PaymentDetailsForm, } from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';


describe('PaymentDetailsForm component', () => {
  it('should render PaymentDetailsForm component with complete props without errors', async () => {
    // Arrange
    await act(() => {
      render(
        <PaymentDetailsForm onSubmit={jest.fn} />
      );

    })

    // Act

    // Assert
    expect(screen.getByTestId('book-table-page-form2')).toBeInTheDocument();
  });

  it('should be able to input values and proceed to form 2 without errors', async () => {
    // Arange
    const step2Fields = [
      {
        name: 'cardName',
        type: 'password',
        valueToEnter: 'Card Name',
      },
      {
        name: 'cardNumber',
        type: 'password',
        valueToEnter: '1234567891234562',
      },
      {
        name: 'cardExpirationDate',
        type: 'password',
        valueToEnter: '12/90',
      },
      {
        name: 'cardCCV',
        type: 'password',
        valueToEnter: '123',
      },
    ]
    await act(() => {
      render(
        <PaymentDetailsForm onSubmit={jest.fn} />
      );

    })

    // Act
    for (const item of step2Fields) {
      await act(async () => {
        const input = screen.getByTestId(`input-${item.name}`);
        userEvent.type(input, item.valueToEnter);
      })
    }

    const formButton = screen.getByTestId('book-table-page-form2-button');

    // Assert
    for (const item of step2Fields) {
      const input = screen.getByTestId(`input-${item.name}`);
      expect(input).toBeInTheDocument();
      expect(input.value).toBe(item.valueToEnter);
    }

    expect(formButton).toBeInTheDocument();

    await act(() => {
      userEvent.click(formButton)
    })
  });
});

