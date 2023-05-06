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

// const studentBase = {
//   name: undefined,
//   email: undefined,
//   age: undefined,
//   approvedCourses: undefined,
//   learningPaths: undefined,
//   socialMedia: {
//     twitter: undefined,
//     instagram: undefined,
//     facebook: undefined,
//   },
// }

//const juan = deepCopy(studentBase);
// Forma de editar una propiedad y setear que no pueda ser eliminada.

// Object.defineProperty(juan, "name", {
//   value: "Juan Carlos",
//   configurable: false,
// });

// Forma de setear que ninguna propiedad pueda ser eliminada.
// Object.seal(juan);
// juan.name = "Juan Carlos";
// isSealed() - para verificar si fué sellado.
// isFrozen() - para verificar si fué congelado.

// con esta funcion hacemos que las propiedades name y email sean obligatorias/requeridas.
function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}
// Metodo RORO
function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    "_name": name,
  };

  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName(newName) {
      return private._name;
    },
    changeName(newName) {
      private._name = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });
  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  });

  return public;
}

const juan = createStudent({
  name: "Juanito",
  age: 18,
  email: "juanito@elpasivo.com",
  twitter: "juanito.18",
  instagram: "juanito.18",
  facebook: "juanito.18",
});