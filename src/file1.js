let a = "coucou";

console.log(a);

if (a == "howdy") {
  console.log("coucou");
}

var toto = "ooo";

function concatenate() {
  let args = Array.prototype.slice.call(arguments); // Noncompliant
  return args.join(", ");
}

const x = 42;
await x; // Noncompliant: x is a number, not a promise

const pi = 3.14;
pi = 3.14159;