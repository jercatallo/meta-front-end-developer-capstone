import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BestSellers } from './BestSellers'; // Adjust the import path as needed
import drinkImage from '../../../../assets/product-3.jpeg'
import eggImage from '../../../../assets/product-1.jpeg'
import chickenImage from '../../../../assets/product-2.jpeg'


describe('BestSellers component', () => {
    it('should renders the BestSellers component with the correct content', () => {
        // Arrange
        const bestSellers = [
            {
                imageSrc: drinkImage,
                imgAlt: "glass of drink",
                tags: ['$2.55'],
                title: 'Spice Lemon',
                description: 'Handpicked from the finest groves, our lemon juice is a burst of sunshine in every drop, meticulously crafted to elevate your culinary creations and quench your thirst for that refreshing, natural citrus kick.'
            },
            {
                imageSrc: eggImage,
                imgAlt: "breakfast foods",
                tags: ['$4.55'],
                title: 'Good Morning Lemon',
                description: 'This wholesome and nourishing breakfast product is designed to kickstart your day with a burst of nutrition, providing you with the vitality and sustenance you need to conquer your daily challenges.'
            },
            {
                imageSrc: chickenImage,
                imgAlt: "chicken with lot of goods",
                tags: ['$15.99'],
                title: 'Buffet Lemon Deluxe',
                description: 'A celebration of succulent, savory, and absolutely irresistible chicken delights. This all-you-can-eat extravaganza is the ultimate destination for chicken aficionados, offering a symphony of flavors and a feast fit for royalty.'
            }
        ]

        const BestSellersProps = {
            items: bestSellers
        }

        render(<BestSellers {...BestSellersProps} />);

        // Act

        // Assert
        expect(screen.getByTestId('best-sellers-container')).toBeInTheDocument();
        expect(screen.getByTestId('best-sellers-heading')).toBeInTheDocument();

        bestSellers.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByTestId(`best-sellers-card-${item.title}`)).toBeInTheDocument();
        })
    });
});