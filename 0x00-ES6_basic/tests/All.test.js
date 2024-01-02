// BEGIN: Test Suite
import { taskFirst, getLast, taskNext } from "../0-constants";
import taskBlock  from "../1-block-scoped";
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
