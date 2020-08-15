const person = require('./person_pb');

const origin = new person.Person();
origin.setName('john doe');
origin.setId(99);
origin.setEmail('test@example.com');

const buffer = origin.serializeBinary();

console.log(origin);
console.log(buffer);
document.querySelector(
    "#string"
).textContent = new TextDecoder().decode(buffer); //to text

const decode = person.Person.deserializeBinary(buffer);
console.log(decode);

const obj = origin.toObject();
document.querySelector("#object").textContent = JSON.stringify(obj);