import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { LandingPage } from './LandingPage'; // Adjust the path as needed
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('LandingPage', () => {
    it('renders with best seller items', () => {
        // Arrange
        render(<MemoryRouter initialEntries={['/']}>
            <Routes>
                <Route path="/" element={
                    <>

                        <LandingPage></LandingPage>
                    </>
                } />
            </Routes>
        </MemoryRouter>);

        // Act
        const landingPageElement = screen.getByTestId('landing-page');
        const heroElement = screen.getByTestId('hero-container');
        const bestSellersElement = screen.getByTestId('best-sellers-container');
        const aboutElement = screen.getByTestId('about-container');

        // Assert
        expect(landingPageElement).toBeInTheDocument();
        expect(heroElement).toBeInTheDocument();
        expect(bestSellersElement).toBeInTheDocument();
        expect(aboutElement).toBeInTheDocument();

    });
});