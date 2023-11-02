import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../../..';
import { BookingSuccess } from './BookingSuccess';


describe('BookingSuccess component', () => {
    const componentToTest = ({ initialPath, bookingSuccessProps }) => {
        return (
            <MemoryRouter initialEntries={[initialPath]}>
                <Routes>
                    <Route path="/" element={
                        <>
                        <LandingPage></LandingPage>
                        </>
                    } />
                    <Route path="/book" element={<>
                        <BookingSuccess {...bookingSuccessProps}></BookingSuccess>
                    </>
                    } />
                </Routes>
            </MemoryRouter>
        )
    }

  it('should renders the Booking Success component with the correct content', () => {
    // Arrange
    const bookingSuccessProps = {
        details: {
            name: 'Test Name',
            date: "10/02/2023",
            time: "10:00 A.M.",
            numberOfPeople: 3,
        }
    }
    render(componentToTest({ initialPath: '/book', bookingSuccessProps }));

    // Act

    // Assert
    expect(screen.getByTestId('booking-success-heading1')).toBeInTheDocument();
    expect(screen.getByTestId('booking-success-icon')).toBeInTheDocument();
    expect(screen.getByTestId('booking-success-heading2')).toBeInTheDocument();
    expect(screen.getByTestId('booking-success-reference-number')).toBeInTheDocument();
    expect(screen.getByTestId('booking-success-description')).toBeInTheDocument();
    expect(screen.getByTestId('booking-success-button')).toBeInTheDocument();
  });

  it('should redirect to landing page when the Go back to home page button is clicked', () => {
    // Arrange
    render(componentToTest({ initialPath: '/book' }));

    // Act
    fireEvent.click(screen.getByTestId('booking-success-button'));

    // Assert
    const targetPage = screen.getByTestId('landing-page');
    expect(targetPage).toBeInTheDocument();
  });
});