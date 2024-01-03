// BEGIN: Test Suite
import { taskFirst, getLast, taskNext } from "../0-constants";
import taskBlock  from "../1-block-scoped";
import getNeighborhoodsList  from "../2-arrow";
describe('0-constants.js', () => {
  // Test Case 1
  test('A Test for taskFirst Function', () => {
    expect(taskFirst()).toMatch(/I prefer const when I can./);
  });

  // Test Case 2
  test('Test the getLast function', () => {
    expect(getLast()).toMatch(/ is okay/);
  });

  // Test Case 3
  test('Test the taskNext function', () => {
    expect(taskNext()).toMatch(/But sometimes let is okay/);
  });
});
// END: Test Suite

// Path: 0x00-ES6_basic/tests/1-block_scope.test.js
describe('1-block_scope.js', () => {
  // Test Case 1
  test('Test the taskBlock function', () => {
    expect(taskBlock(true)).toEqual([false, true]);
    expect(taskBlock(false)).toEqual([false, true]);
  });
});

// Path: 0x00-ES6_basic/tests/2-arrow_functions.test.js
describe('2-arrow_functions.js', () => {
  // Test Case 1
  test('Test the getNeighborhoodsList function', () => {
    const neighborhoodsList = new getNeighborhoodsList();
    const res = neighborhoodsList.addNeighborhood('Noe Valley');
    expect(res).toEqual([ 'SOMA', 'Union Square', 'Noe Valley' ]);
    const resTwo = neighborhoodsList.addNeighborhood('new neighborhood');
    expect(resTwo).toContain('new neighborhood');
  });
});