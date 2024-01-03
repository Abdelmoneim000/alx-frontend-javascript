// START TEST SETUP
// Import functions to be tested
import getResponseFromAPI from "../0-promise";


describe("0-promise.js", () => {
    // Test Case 1
    test("should return a promise", () => {
        expect(getResponseFromAPI()).toBeInstanceOf(Promise);
    });
});
