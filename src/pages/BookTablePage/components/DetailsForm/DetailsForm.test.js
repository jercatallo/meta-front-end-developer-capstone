import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { DetailsForm } from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';


describe('DetailsForm component', () => {
    it('should render BookTablePage component with complete props without errors', async () => {
        // Arrange
        await act(() => {
            render(
                <DetailsForm onSubmit={jest.fn} />
            );
        })
        // Act

        // Assert
        expect(screen.getByTestId('book-table-page-form1')).toBeInTheDocument();
    });

    it('should be able to input values and proceed to form 2 without errors', async () => {
        // Arrange
        const step1Fields = [
            {
                name: 'firstName',
                type: 'text',
                valueToEnter: 'First Name',
            },
            {
                name: 'lastName',
                type: 'text',
                valueToEnter: 'Last Name',
            },
            {
                name: 'numberOfPeople',
                type: 'number',
                valueToEnter: '5',
            },
            {
                name: 'date',
                type: 'date',
                valueToEnter: '2090-12-12',
            },
            {
                name: 'time',
                type: 'time',
                valueToEnter: '12:00',
            },
        ]

        await act(() => {
            render(
                <DetailsForm onSubmit={jest.fn} />
            );

        })

        // Act
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
           
            if (item.type === 'number') {
                await act(() => {
                    userEvent.clear(input); // Clear the input field

                })
            }
            await act(() => {
                userEvent.type(input, item.valueToEnter);
            })
        }

        // Assert
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            expect(input).toBeInTheDocument();
            expect(input.value).toBe(item.valueToEnter);
        }

        const formButton = screen.getByTestId('book-table-page-form1-button');
        expect(formButton).toBeInTheDocument();
        await act(() => {
            userEvent.click(formButton)
        })
    });
});

