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

// Object.defineProperty(ivan, 'terminal', {
//   value: 'WSL',
//   enumerable: true, // muestra o no en el listado de propiedades Object.keys()
//   writetable: true, // define la capacidad de reescibir su valor.
//   configurable: false, // define la capacidad de borrar esa propiedad.
// })

//Object.seal(); //logra que todas las propiedades tengan el configurable en false.
//Object.freeze(); //logra que todas las propiedades tengan el configurable y writable en false.

console.log(Object.getOwnPropertyDescriptors(ivan));