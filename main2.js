const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  }
};

//Shallow copy = copia bien las propiedades con un valor plano, pero hace referencia al objeto original cuando se copia una propiedad con valor de objeto.

const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);

// for (prop in obj1) {
//   obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);