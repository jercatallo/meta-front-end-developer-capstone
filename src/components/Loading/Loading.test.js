import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Loading } from './index';

describe('Loading component', () => {
  it('should render Loading component without errors', () => {
    // Arrange
    render(<Loading></Loading>);
    const imageElements = screen.getByTestId('loading-component');

    // Act

    // Assert
    expect(imageElements).toBeInTheDocument();
  })
})
