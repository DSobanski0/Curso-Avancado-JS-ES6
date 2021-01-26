var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

//Destructuring assignment
var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange', 
    ['Tomato']];
console.log(tomato, tomato2);

//com objetos
var obj = {
    name: 'Daniel'
}
var {name: name2} = obj;
console.log(name2);

//com subnível
var obj = {
    name: 'Daniel',
    props: {
        age: 29
    }
}
var {
    props: {age: age2}
} = obj;
console.log(age2);

//com arrays dentro dos objetos
var obj = {
    name: 'Daniel',
    props: {
        age: 29,
        favoriteColors: ['black', 'blue']
    }
}
var {
    props: {age: age2, favoriteColors: [color1, color2]}
} = obj;
console.log(age2, color1, color2);

var arr = [{name: 'Apple', type: 'fruit'}];
var[{name: fruitName}] = arr;
console.log(fruitName);

//em functions
function sum(arr){
    return arr[0]+arr[1]
}
console.log(sum([5, 5]));

//com destructuring
function sum([a, b] = []){
    return a + b;
}
console.log(sum([5, 5]));

//com destructuring e default values
function sum([a, b] = [0, 0]){
    return a + b;
}
console.log(sum());

//com objetos
function sum1({a, b}){
    return a + b;
}
console.log(sum1({a: 5, b: 5}));
