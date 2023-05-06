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

function SuperObject() {}

SuperObject.prototype.isObject = function(subject) {
  return typeof subject == "objeto";
}

SuperObject.prototype.deepCopy = function(subject) {
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

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({
  name = requieredParam("name"),
  courses = [],
}) {

  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  const private = {
    "_learningPaths": [],
  }

  Object.defineProperty(this, "learningPaths", {
    get() {
      return private["_learningPaths"];
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private["_learningPaths"].push(newLP);
      } else {
        console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath");
      }
    },
  });
  for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

const escuelaWeb = new LearningPath({ name: "Escuela de Desarrollo Web"});
const escuelaData = new LearningPath({ name: "Escuela de Data Science"});

const juan = new Student({
  name: "Juanito",
  age: 18,
  email: "juanito@elpasivo.com",
  learningPaths: [escuelaWeb, escuelaData],
  twitter: "juanito.18",
  instagram: "juanito.18",
  facebook: "juanito.18",
});


