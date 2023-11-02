
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Anchor } from './index';

describe('Anchor component', () => {
  it('should render Anchor component with complete props without errors', () => {
    // Arrange
    const text = "Text Test";
    const href = "#test";
    const hoverType = "background";
    const highlight = true;
    const dataTestId = 'anchor-sample-id';
    const onClick = jest.fn();
    render(
      <Anchor
        testId={dataTestId}
        href={href}
        onClick={onClick}
        hoverType={hoverType}
        highlight={highlight}
      >
        {text}
      </Anchor>
    );
    const element = screen.getByTestId(dataTestId);
    const textElement = screen.getByText(text);

    // Act

    // Assert
    expect(textElement).toBeInTheDocument();
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('href', href);
  });

  it('should render Anchor component even without testId prop without errors', () => {
    // Arrange
    const text = "Text Test";
    const href = "#test";
    const hoverType = "background";
    const highlight = true;

    const onClick = jest.fn();
    render(
      <Anchor
        href={href}
        onClick={onClick}
        hoverType={hoverType}
        highlight={highlight}
      >
        {text}
      </Anchor>
    );
    const textElement = screen.getByText(text);

    // Act

    // Assert
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveAttribute('href', href);
  });
});
