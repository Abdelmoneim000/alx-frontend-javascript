export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string' && typeof length === 'number' && Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._name = name;
      this._length = length;
      this._students = students;
    } else {
      throw new TypeError('Wrong data type');
    }
  }
}
