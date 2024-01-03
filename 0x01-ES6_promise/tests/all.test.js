// START TEST SETUP
// Import functions to be tested
import getResponseFromAPI from "../1-promise";

describe("0-promise.js", () => {
    // Test Case 1
    test("should return a promise", () => {
        expect(getResponseFromAPI(true)).toBeInstanceOf(Promise);
    });
});

describe("1-promise.js", () => {
    // Test Case 1
    test("should return a promise", () => {
        expect(getResponseFromAPI(true)).toBeInstanceOf(Promise);
    });
    // Test Case 2
    test("should return correct response when passed true", () => {
        return getResponseFromAPI(true).then((response) => {
            expect(response.status).toEqual(200);
            expect(response.body).toEqual("Success");
        });
    });
    // Test Case 3
    test("should return correct error when passed false", () => {
        return getResponseFromAPI(false).catch((error) => {
            expect(error).toEqual(Error("The fake API is not working currently"));
        });
    });
});
