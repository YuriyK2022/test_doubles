# Duble Test
Using the github repository https://github.com/LiannaAsatryan/gauss_js,
develop Test Dubles and implement Mock methods for the Matrix class (using Sinon.js library).
Test Doubles
# Installation
1. Clone the Mtrx repository to your local machine
```sh
$ git clone https://github.com/LiannaAsatryan/gauss_js.git
```
2. Navigate to the project directory and install the required dependencies (including Sinon.js):
```sh
$ cd gauss_js
$ npm install
$ npm install sinon
```
# First Step - Create Mocks and Implement Tests:
3. Inside the project, create a test file, matrix.test.js, to set up Sinon.js mocks and implement tests for the matrix multiplication method in the Matrix class:
```js
const Matrix = require('./Matrix'); // Import the Matrix class from the project
const sinon = require('sinon');
const { expect } = require('chai');

describe('Matrix Mock Tests', () => {
  it('should mock the matrix multiplication method of the Matrix class', () => {
    // Create a mock for the matrix multiplication method of the Matrix class
    const matrix = new Matrix(); // Replace with the actual Matrix instance
    const multiplyMock = sinon.mock(matrix);
    const matrix1 = [[1, 2], [3, 4]];
    const matrix2 = [[5, 6], [7, 8]];
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
```
# Second Step - Run Tests:
4. Run test with mocha

![image](https://github.com/YuriyK2022/test_doubles/assets/118524489/3cad5226-174d-4cef-b6d3-d4a386f03b57)

This will execute the tests and verify that the mocked matrix multiplication method behaves as expected.
At the same manner? we will create Test Doubles and implement Mock methods for other matrices operations in the Matrix class using the Sinon.js library.
