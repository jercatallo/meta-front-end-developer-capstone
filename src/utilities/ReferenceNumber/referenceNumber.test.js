// Import the function to be tested
import { generateReferenceNumber } from './referenceNumber'; 

describe('generateReferenceNumber', () => {
  it('should generate a reference number of the specified length', () => {
    // Arrange
    const length = 10;

    // Act
    const referenceNumber = generateReferenceNumber(length);

    // Assert
    expect(referenceNumber).toHaveLength(length);

    expect(referenceNumber).toMatch(/^[A-Z0-9]+$/);
  });

  it('should return an empty string for length 0', () => {
    const length = 0;
    const referenceNumber = generateReferenceNumber(length);

    expect(referenceNumber).toBe('');
  });

  it('should handle negative length by returning an empty string', () => {
    // Arrange
    const length = -5; // Negative length
    
    // Act
    const referenceNumber = generateReferenceNumber(length);

    // Assert
    expect(referenceNumber).toBe('');
  });
});
