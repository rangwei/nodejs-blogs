const obj = {name: 'andy'};
const stringObj = JSON.stringify(obj);

console.log(typeof stringObj);// string
console.log(stringObj); //{"name":"andy"}

const person = JSON.parse(stringObj);
console.log(typeof person); //object
console.log(person); //{ name: 'andy' }

