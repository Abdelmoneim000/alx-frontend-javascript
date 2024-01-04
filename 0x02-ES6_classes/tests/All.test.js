// START TESTS
// Import Classes
import ClassRoom from "../0-classroom";
import initializeRooms from "../1-make_classrooms";


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
    const { CLIEngine } = require("eslint");

    it("should not have any ESLint errors", () => {
        const cli = new CLIEngine({});
        const report = cli.executeOnFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/1-make_classrooms"]);
        expect(report.errorCount).toBe(0);
    });
});


// END TESTS