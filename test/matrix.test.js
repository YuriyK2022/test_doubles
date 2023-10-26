const Matrix = require('./matrix'); // Import the Matrix class from the project
const sinon = require('sinon');
const { expect } = require('chai');

describe('Matrix Mock Tests', () => {
  it('should mock the matrix multiplication method of the Matrix class', () => {
    // Create a mock for the matrix multiplication method of the Matrix class
    const matrix = new Matrix(); // Replace with the actual Matrix instance
    const multiplyMock = sinon.mock(matrix);
    const matrix1 = [[1, 2], [3, 4]]; // Replace with your test matrices
    const matrix2 = [[5, 6], [7, 8]]; // Replace with your test matrices
    const expectedResult = [[19, 22], [43, 50]]; // Define the expected result

    // Set up the mock behavior
    multiplyMock
      .expects('matrixMultiplication')
      .withArgs(matrix1, matrix2)
      .returns(expectedResult);

    // Call the matrix multiplication method (which will return the mock result)
    const result = matrix.matrixMultiplication(matrix1, matrix2);

    // Verify that the matrix multiplication method was called with the correct arguments
    // and the result matches the expectation
    multiplyMock.verify();
    expect(result).to.deep.equal(expectedResult);

    // Restore the original matrix multiplication method
    multiplyMock.restore();
  });
});
