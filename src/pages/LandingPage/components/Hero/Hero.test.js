import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Hero } from './Hero'; // Adjust the import path as needed

import { BookTablePage } from '../../../BookTablePage';

describe('Hero component', () => {
    const componentToTest = ({ initialPath }) => {
        return (
            <MemoryRouter initialEntries={[initialPath]}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                        </>
                    } />
                    <Route path="/book" element={<>
                        <BookTablePage></BookTablePage>
                    </>
                    } />
                </Routes>
            </MemoryRouter>
        )
    }
  it('should renders the Hero component with the correct content', () => {
    // Arrange
    render(componentToTest({ initialPath: '/' }));

    // Act

    // Assert
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Where culinary excellence meets warm hospitality. Indulge in a culinary journey that celebrates flavors, freshness, and creativity.')).toBeInTheDocument();
    expect(screen.getByText('Reserve a Table!')).toBeInTheDocument();
    expect(screen.getByTestId('hero-container')).toBeInTheDocument();
    expect(screen.getByTestId('hero-heading')).toBeInTheDocument();
    expect(screen.getByTestId('hero-paragraph')).toBeInTheDocument();
    expect(screen.getByTestId('hero-reserve-a-table-button')).toBeInTheDocument();
    expect(screen.getByTestId('hero-image')).toBeInTheDocument();

  });

  it('should redirect to book page when the Reserve a Table button is clicked', () => {
    // Arrange
    render(componentToTest({ initialPath: '/' }));

    // Act
    fireEvent.click(screen.getByTestId('hero-reserve-a-table-button'));

    // Assert
    const targetPage = screen.getByTestId('booking-page');
    expect(targetPage).toBeInTheDocument();
  });
});