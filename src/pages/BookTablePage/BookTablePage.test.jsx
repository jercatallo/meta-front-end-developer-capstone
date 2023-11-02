import '@testing-library/jest-dom/extend-expect';
import { screen, render } from '@testing-library/react';
import { BookTablePage } from './index';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../LandingPage';


describe('BookTablePage component', () => {

    it('should render BookTablePage component with complete props without errors', async () => {
        // Arrange
        await act(() => {
            jest.useFakeTimers();
        })

        await act(() => {
            render(
                <BookTablePage />
            );
        });

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

        // Act
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            if (item.type === 'number') {
                await act(() => {
                    userEvent.clear(input);
                })

            }
            await act(() => {
                userEvent.type(input, item.valueToEnter);
            })
        }

        const formButton = screen.getByTestId('book-table-page-form1-button');

        // Assert
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            expect(input.value).toBe(item.valueToEnter);
        }

        expect(formButton).toBeInTheDocument();
        expect(screen.getByTestId('booking-page')).toBeInTheDocument();
        act(() => {
            jest.useRealTimers();
        })
    });

    it('should be able to input values and proceed to form 2 without errors', async () => {
        // Arrange
        await act(() => {
            jest.useFakeTimers();
        })
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
            render(<MemoryRouter initialEntries={['/book']}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <LandingPage></LandingPage>
                        </>
                    } />
                    <Route path="/book" element={<>
                        <BookTablePage></BookTablePage>
                    </>
                    } />
                </Routes>
            </MemoryRouter>)
        });


        // Act
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            if (item.type === 'number') {
                await act(() => {
                    userEvent.clear(input);
                });
            }

            await act(() => {
                userEvent.type(input, item.valueToEnter);
            });
        }

        // Assert
        for (const item of step1Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            expect(input.value).toBe(item.valueToEnter);
        }

        const formButton = screen.getByTestId('book-table-page-form1-button');
        expect(formButton).toBeInTheDocument();

        await act(() => {
            userEvent.click(formButton)
        });

        await act(() => {
            jest.runAllTimers()
            jest.advanceTimersByTime(5000);
            jest.useRealTimers();
        })

        await act(() => {
            jest.useFakeTimers();
        })
        // Act
        for (const item of step2Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            expect(input).toBeInTheDocument();
            if (item.type === 'number') {
                await act(() => {
                    userEvent.clear(input);
                });
            }

            await act(() => {
                userEvent.type(input, item.valueToEnter);
            });
        }


        // Assert
        for (const item of step2Fields) {
            const input = screen.getByTestId(`input-${item.name}`);
            expect(input.value).toBe(item.valueToEnter);
        }


        const formButton2 = screen.getByTestId('book-table-page-form2-button');
        expect(formButton2).toBeInTheDocument();

        await act(() => {
            userEvent.click(formButton2)
        });

        await act(() => {
            jest.runAllTimers()
            jest.advanceTimersByTime(5000);
            jest.useRealTimers();
        })
    });
});

