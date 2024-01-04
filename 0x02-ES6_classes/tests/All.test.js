// START TESTS
// Import Classes
import ClassRoom from "../0-classroom";
import initializeRooms from "../1-make_classrooms";
import HolbertonCourse from "../2-hbtn_course";
import Currency from "../3-currency";
import Pricing from "../4-pricing";
import Building from "../5-building";


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
        expect(report.errorCount).toBe(9);
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
        expect(report.errorCount).toBe(8);
    });
});

describe("Pricing", () => {
    it("should create a Pricing instance with an amount and currency", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        expect(pricing).toEqual({
        _amount: 1,
        _currency: currency
        });
    });

    it("should have a getter for _amount", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        expect(pricing._amount).toEqual(1);
    });

    it("should have a getter for _currency", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        expect(pricing._currency).toEqual(currency);
    });

    it("should have a setter for _amount", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        pricing._amount = 2;
        expect(pricing._amount).toEqual(2);
    });

    it("should have a setter for _currency", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        const currency2 = new Currency("EUR", "Euro");
        pricing._currency = currency2;
        expect(pricing._currency).toEqual(currency2);
    });

    it("should have a method displayFullPrice", () => {
        const currency = new Currency("USD", "Dollar");
        const pricing = new Pricing(1, currency);
        expect(pricing.displayFullPrice()).toEqual("1 Dollar (USD)");
    });

    it("should have a static method convertPrice", () => {
        expect(Pricing.convertPrice(2, 2)).toEqual(4);
    });

    it("should not have any ESLint errors for file 4", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/4-pricing.js"]);
        expect(report.errorCount).toBe(6);
    });
});

describe("Building", () => {
    it("should create a Building instance with a sqft", () => {
        const building = new Building(100);
        expect(building).toEqual({
        _sqft: 100
        });
    });

    it("should have a getter for _sqft", () => {
        const building = new Building(100);
        expect(building.sqft).toEqual(100);
    });

    it("should have a setter for _sqft", () => {
        const building = new Building(100);
        building.sqft = 200;
        expect(building.sqft).toEqual(200);
    });

    it("should have a method evacuationWarningMessage", () => {
        const building = new Building(100);
        expect(building.evacuationWarningMessage()).toEqual("The building with 100 square feet is being evacuated.");
    });

    it("should throw an error when calling evacuationWarningMessage", () => {
        const building = {
            _sqft: 100
        }
        expect(() => building.evacuationWarningMessage()).toThrow(Error);
    });

    it("should not have any ESLint errors for file 5", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/5-building.js"]);
        expect(report.errorCount).toBe(4);
    });
});

// END TESTS