//Somar vários valores em uma função - jeito antigo
function sum1(a, b){
    var value = 0;
    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
console.log(sum1(5, 5, 4, 2, 3));

//Rest operator - Enquanto arguments retorna um objeto, args retorna um array
function sum2(...args){
    console.log(args);
    // console.log(arguments);
}
sum2(5, 5, 4, 2, 3);

//para manipular o array
function sum3(...args){
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum3(5, 5, 5, 2, 3));

//precisa de rest operator caso use arrow function - arguments não é definido com arrow function
const sum4 = (...args) => {
    // console.log(arguments);
    console.log(args);
};
sum4(5, 5, 5, 2, 3);

const sum5 = (a, b, ...args) => {
    console.log(a, b, args);
};
sum5(5, 5, 5, 2, 3);

//Antigamente - para passar todos os argumentos da função soma para a função multiplicação
const multiply1 = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum6 = (...rest) => {
    return multiply1.apply(undefined, rest);
};
console.log(sum6(5, 5, 5, 2, 3));

//Spread operator - pode passar listas como argumentos para outras funções - funciona com strings, arrays, literal objects e objetos iteráveis
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);
};
console.log(sum(5, 5, 5, 2, 3));

//Quebra a string em caracteres e joga em uma lista
const str = 'Digital Innovation One';
function logArgs(...args){
    console.log(args);
}
logArgs(...str);

//com array
const arr = [1, 2, 3, 4];
function logArgs1(a, b, c){
    console.log(a, b, c);
}
logArgs1(...arr);

//combinando arrays - um modo com concat
const arr2 = arr.concat([5, 6, 7]);
console.log(arr2);

//com spread operator
const arr3 = [...arr, 5, 6, 7];
console.log(arr3);

const arr4 = [...arr3, ...arr, 0, 0, 0];
console.log(arr4);

//com objetos literais - somente para construir novos objetos literais - a ordem importa
const obj = {
    test: 123
}
const obj2 = {
    ...obj,
    // test: 456,
    test2: 'hello'
};
console.log(obj2);

//para gerar clones do objeto
const obj3 = {
    test: 123
};
const obj4 ={...obj3};
obj4.test = 456;
console.log(obj3);

//só faz um clone raso "shallow clone" - para níveis mais baixos de objeto ele é alterado
const obj5 = {
    test: 123,
    subObj:{
        test: 123
    }
};
const obj6 ={...obj5};
obj6.subObj.test = 456;
console.log(obj5);

//pode fazer um clone do subobjeto para não alterar suas propriedades
const obj7 = {
    test: 123,
    subObj:{
        test: 123
    }
};
const obj8 ={...obj7, subObj: {...obj7.subObj}};
obj8.subObj.test = 456;
console.log(obj7);