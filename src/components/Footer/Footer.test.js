import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './index';
import { BookTablePage, LandingPage } from '../../pages';

describe('Footer component', () => {
    const testId = 'footer-component';
    const bestSellerElementTestId = 'footer-best-seller'
    const aboutUsElementTestId = 'footer-about-us'
    const reserveATableElementTestId = 'footer-reserve-a-table';

    const componentToTest = ({ initialPath }) => {
        return (
            <MemoryRouter initialEntries={[initialPath]}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <LandingPage></LandingPage>
                            <Footer></Footer>
                        </>
                    } />
                    <Route path="/book" element={<>
                        <BookTablePage></BookTablePage>
                        <Footer></Footer>
                    </>
                    } />
                </Routes>
            </MemoryRouter>
        )
    }

    it('should render Footer component with complete props without errors', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));

        const navigationComponent = screen.getByTestId(testId)

        // Act

        // Assert
        expect(navigationComponent).toBeInTheDocument();
    })

    it('should render footer links without errors', () => {
        //Arrage
        render(componentToTest({ initialPath: '/' }));

        const navigationComponent = screen.getByTestId(testId)
        const bestSellerElement = screen.getByTestId(bestSellerElementTestId);
        const aboutUsElement = screen.getByTestId(aboutUsElementTestId);
        const reserveATableElement = screen.getByTestId(reserveATableElementTestId);

        // Act

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(bestSellerElement).toBeInTheDocument();
        expect(aboutUsElement).toBeInTheDocument();
        expect(reserveATableElement).toBeInTheDocument();
    })

    it('should redirect to landing page when Best Seller text is clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/book' }));


        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(bestSellerElementTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to landing page when About Us text is clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/book' }));


        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(aboutUsElementTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to book page when Reserve A Table text is clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));


        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(reserveATableElementTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('booking-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })
})