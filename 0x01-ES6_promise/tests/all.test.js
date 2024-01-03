// START TEST SETUP
// Import functions to be tested
import getResponseFromAPI from "../1-promise";
import handleResponseFromAPI from "../2-then";

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

describe("2-then.js", () => {
    // Test Case 1
    test("should return correct response when passed true", () => {
        return expect(handleResponseFromAPI(Promise.resolve())).resolves.toEqual({ status: 200, body: "success" });
    });
    // Test Case 2
    test("should return correct response when passed false", () => {
        return expect(handleResponseFromAPI(Promise.reject())).resolves.toEqual(Error());
    });
    // Test Case 3
    test("should print correct message when passed true", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleResponseFromAPI(Promise.resolve()).then(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
        });
    });
    // Test Case 4
    test("should print correct message when passed false", () => {
        const consoleSpy = jest.spyOn(console, 'log');
        return handleResponseFromAPI(Promise.reject()).catch(() => {
            expect(consoleSpy).toHaveBeenCalledWith("Got a response from the API");
        });
    });
});
