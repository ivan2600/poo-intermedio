const ivan = {
  name: 'Iván',
  age: 32,
  approvedCourses: ['Curso 1'],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
};

// console.log(Object.keys(ivan));
// console.log(Object.getOwnPropertyNames(ivan));
// console.log(Object.entries(ivan));
console.log(Object.getOwnPropertyDescriptors(ivan));

Object.defineProperty(ivan, 'pruebaNASA', {
  value: 'extraterrestres',
  enumerable: true,
  writetable: true,
  configurable: true,
})