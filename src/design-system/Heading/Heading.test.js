import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Heading } from './index';

describe('Heading component', () => {
  it('should render Heading component with complete props without errors', () => {
    // Arrange
    const text = "Text Test";
    const type = "h1";
    const overrides = "";
    const testId = "test-id";
    render(<Heading type={type} testId={testId} overrides={overrides}>{text}</Heading>);
    const element = screen.getByTestId("test-id");
    
    // Act

    // Assert
    expect(element).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(element).toHaveClass('my-6 text-left text-primaryText font-medium');
  })
})
