import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { About } from './About'; // Adjust the import path as needed

describe('About component', () => {
    it('should renders the About component with the correct content', () => {
        // Arrange
        render(<About  />);

        // Act

        // Assert
        expect(screen.getByTestId('about-container')).toBeInTheDocument();
        expect(screen.getByTestId('about-heading')).toBeInTheDocument();
        expect(screen.getByTestId('about-image')).toBeInTheDocument();
        expect(screen.getByTestId('about-paragraph1')).toBeInTheDocument();
        expect(screen.getByTestId('about-paragraph-quote')).toBeInTheDocument();
    });
});