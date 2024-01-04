export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!students.every((student) => typeof student === 'string' || Array.isArray(students))) {
      throw new TypeError('students must be an array of strings');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }
}
