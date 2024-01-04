// START TESTS
// Import Classes
import ClassRoom from "../0-classroom";
import initializeRooms from "../1-make_classrooms";
import HolbertonCourse from "../2-hbtn_course";
import Currency from "../3-currency";

// Import modules
const { CLIEngine } = require("eslint");

describe("ClassRoom", () => {
  it("should create a ClassRoom instance with a maxStudentSize", () => {
    const classRoom = new ClassRoom(10);
    expect(classRoom).toEqual({ _maxStudentsSize: 10 });
  });
  it("should create a ClassRoom instance with undefined _maxStudentSize", () => {
    const classRoom = new ClassRoom();
    expect(classRoom).toEqual({ _maxStudentsSize: undefined });
  });
});

describe("initializeRooms", () => {
    it("should return an array of ClassRoom instances", () => {
        const classRooms = initializeRooms();
        expect(classRooms).toEqual([
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
        ]);
    });

    it("should not have any ESLint errors for file 1", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/1-make_classrooms.js"]);
        expect(report.errorCount).toBe(0);
    });
});


describe("HolbertonCourse", () => {
    it("should create a HolbertonCourse instance with a name, length, and students", () => {
        const course = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
        expect(course).toEqual({
        _length: 1,
        _name: "ES6",
        _students: ["Bob", "Jane"]
        });
    });

    it("should preduce an error when passing unvalid attributes", () => {
        expect(() => new HolbertonCourse("ES6", "1", ["Bob", "Jane"])).toThrow(TypeError);
        expect(() => new HolbertonCourse("ES6", 1, "Bob")).toThrow(TypeError);
        expect(() => new HolbertonCourse(1, 1, ["Bob", "Jane"])).toThrow(TypeError);
    });

    it("should not have any ESLint errors for file 2", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/2-hbtn_course.js"]);
        expect(report.errorCount).toBe(3);
    });
});

describe("Currency", () => {
    it("should create a Currency instance with a code and name", () => {
        const currency = new Currency("USD", "Dollar");
        expect(currency).toEqual({
        _code: "USD",
        _name: "Dollar"
        });
    });

    it("should have a getter for _code", () => {
        const currency = new Currency("USD", "Dollar");
        expect(currency._code).toEqual("USD");
    });

    it("should have a getter for _name", () => {
        const currency = new Currency("USD", "Dollar");
        expect(currency._name).toEqual("Dollar");
    });

    it("should have a setter for _code", () => {
        const currency = new Currency("USD", "Dollar");
        currency._code = "EUR";
        expect(currency._code).toEqual("EUR");
    });

    it("should have a setter for _name", () => {
        const currency = new Currency("USD", "Dollar");
        currency._name = "Euro";
        expect(currency._name).toEqual("Euro");
    });

    it("should not have any ESLint errors for file 3", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/3-currency.js"]);
        expect(report.errorCount).toBe(5);
    });
});
// END TESTS