const add = (a , b ) => a + b;

//console.log(process.argv);

const [, , n1, n2] = process.argv;

console.log("this sum is :" , add(n1 , n2));
console.log("this sum is :" , add(+n1 , +n2));