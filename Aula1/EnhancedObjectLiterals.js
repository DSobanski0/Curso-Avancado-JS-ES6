//Hoje não precisa mais repetir o nome duas vezes
var prop1 = 'Digital Innovation One';
var obj = {
    prop1//: prop1
};
console.log(obj);

//Também funciona para funções
function method1(){
    console.log('method called');
}
var obj = {
    method1
};
obj.method1()

//pode declarar a função direto no método
var obj = {
    sum: function(a, b){
        return a + b;
    }
};
console.log(obj.sum(1, 5));

//pode omitir a palavra função tb
var obj = {
    sum(a, b){
        return a + b;
    }
}
console.log(obj.sum(1, 5));

//pode criar propriedades do obj com variáveis
var propName = 'test';
var obj = {
    [propName + 'concat']: 'prop value'
};
console.log(obj);