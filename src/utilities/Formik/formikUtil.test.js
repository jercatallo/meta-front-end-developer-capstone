import { formikSerializeFields } from './formikUtil'; // Import your module here

describe('formikSerializeFields', () => {
  it('should serialize fields correctly', () => {
    // Arrange
  
    // Mock Formik object
    const formikObject = {
      values: {
        field1: 'Value1',
        field2: 'Value2',
      },
      errors: {
        field1: 'Error1',
        field2: 'Error2',
      },
      touched: {
        field1: true,
        field2: false,
      },
      handleChange: jest.fn(),
    };

    //
    const fields = [
      { name: 'field1' },
      { name: 'field2' },
    ];

    // Act
    const serializedFields = formikSerializeFields(fields, formikObject);

    // Assert
    expect(serializedFields).toEqual([
      {
        name: 'field1',
        value: 'Value1',
        error: 'Error1',
        touched: true,
        onChange: formikObject.handleChange,
      },
      {
        name: 'field2',
        value: 'Value2',
        error: 'Error2',
        touched: false,
        onChange: formikObject.handleChange,
      },
    ]);

    // Check that handleChange function is the same reference
    expect(serializedFields[0].onChange).toBe(formikObject.handleChange);
    expect(serializedFields[1].onChange).toBe(formikObject.handleChange);
  });
});