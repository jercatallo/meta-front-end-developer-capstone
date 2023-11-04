import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Button component', () => {
  it('should render Button component with complete props without errors', () => {
    // Arrange
    const text = "Text Test";
    const type = "primary";
    const onClick = jest.fn();
    const overrides = "";
    const buttonType = 'button';
    // const testId = 'test-id';
    render(
      <Button
        type={type}
        // testId={testId}
        onClick={onClick}
        buttonType={buttonType}
        overrides={overrides}
      >
        {text}
      </Button>
    );
    const element = screen.getByTestId('button-component');
    const textElement = screen.getByText(text); 

    // Act

    // Assert
    expect(textElement).toHaveAttribute('type', buttonType);
    expect(element).toHaveAttribute('type', buttonType);
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('py-2 px-4 rounded block text-lg text-white hover:scale-105 transition duration-200 bg-primaryColor py-1 px-4 text-textOnPrimaryBackground hover:bg-secondaryColor');
  });
});
