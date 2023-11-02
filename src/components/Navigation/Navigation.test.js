import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; // Import MemoryRouter
import { Navigation } from './index';
import { BookTablePage, LandingPage } from '../../pages';


describe('Navigation component', () => {
    const testId = 'navigation-component';
    const anchorElementTestId = 'navigation-little-lemon-logo'
    const homeElementTestId = 'navigation-home'
    const bestSellerElementTestId = 'navigation-best-seller'
    const aboutUsElementTestId = 'navigation-about-us'
    const reserveATableElementTestId = 'navigation-reserve-a-table'
    const littleLemonLogoTestId = 'navigation-little-lemon-logo'
    const navigationMenuTestId = 'navigation-burger-menu'

    const homeElementMobileTestId = 'navigation-mobile-home'
    const bestSellerElementMobileTestId = 'navigation-mobile-best-seller'
    const aboutUsElementMobileTestId = 'navigation-mobile-about-us'
    const reserveATableElementMobileTestId = 'navigation-mobile-reserve-a-table'

    const componentToTest = ({ initialPath }) => {
        return (
            <MemoryRouter initialEntries={[initialPath]}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Navigation />
                            <LandingPage></LandingPage>
                        </>
                    } />
                    <Route path="/book" element={<>
                        <Navigation />
                        <BookTablePage></BookTablePage>
                    </>
                    } />
                </Routes>
            </MemoryRouter>
        )
    }

    it('should render Navigation component with complete props without errors', () => {
        // Arrange
        const testId = 'navigation-component';
        render(componentToTest({ initialPath: '/' }));

        const navigationComponent = screen.getByTestId(testId)

        // Act

        // Assert
        expect(navigationComponent).toBeInTheDocument();
    })

    it('should render navigation links without errors', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));

        const navigationComponent = screen.getByTestId(testId)
        const anchorElement = screen.getByTestId(anchorElementTestId);
        const homeElement = screen.getByTestId(homeElementTestId);
        const bestSellerElement = screen.getByTestId(bestSellerElementTestId);
        const aboutUsElement = screen.getByTestId(aboutUsElementTestId);
        const reserveATableElement = screen.getByTestId(reserveATableElementTestId);

        // Act

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(anchorElement).toBeInTheDocument();
        expect(homeElement).toBeInTheDocument();
        expect(bestSellerElement).toBeInTheDocument();
        expect(aboutUsElement).toBeInTheDocument();
        expect(reserveATableElement).toBeInTheDocument();
    })

    it('should redirect to landing page when little lemon logo is clicked', () => {
        // Arrange

        render(componentToTest({ initialPath: '/book' }));

        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(littleLemonLogoTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to landing page when about us text is clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));

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

    it('should redirect to landing page when home text is clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/book' }));

        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(homeElementTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to landing page when best seller text is clicked', () => {
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

    it('should redirect to book page when reserve a table text has been clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));
        const testElement = screen.getByTestId(reserveATableElementTestId);

        // Act
        fireEvent.click(testElement);

        // Assert
        const targetPage = screen.getByTestId('booking-page');
        expect(targetPage).toBeInTheDocument();
    });

    it('should open the navigation when the hamburger menu has been clicked', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));
        const testElement = screen.getByTestId(navigationMenuTestId);

        // Act
        fireEvent.click(testElement);

        // Assert
        expect(testElement).toBeInTheDocument();
        // const targetPage = screen.getByTestId('booking-page');
        // expect(targetPage).toBeInTheDocument();
    });

    it('should redirect to landing page when about us text is clicked in hamburger menu', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));

        const navigationComponent = screen.getByTestId(testId)
        const hamburgerMenu = screen.getByTestId(navigationMenuTestId);
        fireEvent.click(hamburgerMenu);
        const testElement = screen.getByTestId(aboutUsElementMobileTestId);



        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to landing page when home text is clicked in hamburger menu', () => {
        // Arrange
        render(componentToTest({ initialPath: '/book' }));

        const navigationComponent = screen.getByTestId(testId)
        const hamburgerMenu = screen.getByTestId(navigationMenuTestId);
        fireEvent.click(hamburgerMenu);
        const testElement = screen.getByTestId(homeElementMobileTestId);

        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to landing page when best seller text is clicked in hamburger menu', () => {
        // Arrange
        render(componentToTest({ initialPath: '/book' }));
        const hamburgerMenu = screen.getByTestId(navigationMenuTestId);
        fireEvent.click(hamburgerMenu);
        const navigationComponent = screen.getByTestId(testId)
        const testElement = screen.getByTestId(bestSellerElementMobileTestId);
       
        // fireEvent.click(hamburgerMenu);
        // Act
        fireEvent.click(testElement);

        // Arange again
        const targetPage = screen.getByTestId('landing-page');

        // Assert
        expect(navigationComponent).toBeInTheDocument();
        expect(targetPage).toBeInTheDocument();
    })

    it('should redirect to book page when reserve a table text has been clicked in hamburger menu', () => {
        // Arrange
        render(componentToTest({ initialPath: '/' }));
        const hamburgerMenu = screen.getByTestId(navigationMenuTestId);
        fireEvent.click(hamburgerMenu);
        const testElement = screen.getByTestId(reserveATableElementMobileTestId);
       
        // Act
        fireEvent.click(testElement);

        // Assert
        const targetPage = screen.getByTestId('booking-page');
        expect(targetPage).toBeInTheDocument();
    });
})
