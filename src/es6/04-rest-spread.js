// arrays destructuring 

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

// Object destructuring

let user = { username: 'Oscar', age: 34};
let {username, age} = user;

// spread operator

let person = {name: 'Oscar', age: '28'};
let country = 'MX';

let data = {...person, country}

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);