function genericActionPerformer(genericAction, genericName) {
  return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting`;

const walk = (name) => `${name} is walking`;

console.log(genericActionPerformer(walk, "nicolas"));

console.log(genericActionPerformer(((name) => ` ${name} is reading`),"andrea"));

