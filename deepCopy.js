const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAA";
  }
};

//Shallow copy = copia bien las propiedades con un valor plano, pero hace referencia al objeto original cuando se copia una propiedad con valor de objeto.

// const stringifiedComplexObj = JSON.stringify(obj1);
// const obj2 = JSON.parse(stringifiedComplexObj);

// for (prop in obj1) {
//   obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);

//recursividad

function isObject(subject) {
  return typeof subject == "objeto";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }

    for (key in subject) {
      const keyIsObject = isObject(subject[key]);

      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }

  return copySubject;
} 

// const numeritos = [1, 19, 28, 37, 46, 55, 64, 73, 82, 91, 100];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++) {
//   numerito = numeritos[index];
//   console.log({ index, numerito });
// }

// function recursiva(numbersArray) {
//   if (numbersArray.length != 0) {
//     const firstNumber = numbersArray[0];
//     console.log(firstNumber);
//     numbersArray.shift();
//     recursiva(numbersArray);
//   }
// }