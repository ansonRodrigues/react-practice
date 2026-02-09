export const add = (a, b) => {
  console.log(typeof (a + b));
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

console.log(`value of addition: ${add(2, 3)}`);
console.log(`value of subtraction : ${subtract(5, 4)}`);
