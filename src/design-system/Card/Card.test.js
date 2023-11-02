import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Card } from './index';
import sampleImage from '../../assets/little-lemon-logo.png';

describe('Card component', () => {
  it('should render Card component with complete props without errors', () => {
    // Arrange
    const title = "Text Test";
    const imageSrc = sampleImage;
    const tags = ["$4.99"];
    const description = "Text Description";
    const imageAlt = "Image Alt";

    render(
      <Card
        key={title}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        tags={tags}
        title={title}
        description={description}
      />
    );
    const titleElement = screen.getByText(title);
    const imageElements = screen.getAllByAltText(imageAlt);
    const descriptionElement = screen.getByText(description);

    // Act

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(Array.isArray(imageElements)).toBe(true);
    expect(descriptionElement).toBeInTheDocument();
    tags.forEach((tag) => {
      const tagElement = screen.getByText(tag);
      expect(tagElement).toBeInTheDocument();
    });
  });
});
