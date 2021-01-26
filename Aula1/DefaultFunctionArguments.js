//Antigamente, quando faltava um parâmetro, para se evitar erros utilizava-se operadores lógicos para obter um resultado
//No entanto, se quisesse multiplicar por zero, não seria possível realizar a multiplicação pq zero é considerado false no JS
function multiplyOld(a, b){
    b = b || 1;
    return a * b;
}
console.log(multiplyOld(5, 0));

//era possível fazer dessa forma ou com if - muito verboso
function multiply2(a, b){
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply2(5, 0));

//Hoje, pode passar um valor padrão para o parâmetro
function multiply1(a = 2, b = 1){
    return a * b;
}
console.log(multiply1(5));

//pode referenciar outros parâmetros - a ordem é importante! Não pode referenciar antes do parâmetro estar definido
function multiply3(a, b = a){
    return a * b;
}
console.log(multiply3(5));

//lazy evaluation - invoca o random toda vez que deixar de passar o parâmetro
function randomNumber(){
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()){
    return a * b;
}
console.log(multiply(1));
console.log(multiply(1));