// START TESTS
// Import Classes
import ClassRoom from "../0-classroom";
import initializeRooms from "../1-make_classrooms";
import { ESLint } from "eslint";

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
    it("should not have any ESLint errors", async () => {
        const eslint = new ESLint();
        const results = await eslint.lintFiles(["/home/abod/alx-frontend-javascript/0x02-ES6_classes/1-make_classrooms.js"]);
        const errorResults = results.filter((result) => result.errorCount > 0);
        expect(errorResults).toHaveLength(0);
    });
});


// END TESTS