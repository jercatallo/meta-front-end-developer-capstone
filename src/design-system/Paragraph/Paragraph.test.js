
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Paragraph } from './index';

describe('Paragraph component', () => {
  it('should render Paragraph component with complete props without errors', () => {
    // Arrange
    const text = "Text Test";
    const type = "p1";
    const overrides = "";
    const testId = "test-id";
    render(<Paragraph type={type} testId={testId} overrides={overrides}>{text}</Paragraph>);
    const element = screen.getByTestId(testId);

    // Act

    // Assert
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('my-2');
    expect(element).toHaveClass('text-primaryText');
  });
});
