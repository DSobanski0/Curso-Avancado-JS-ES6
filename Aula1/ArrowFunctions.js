function log(value){
    console.log(value);
}
log('test');

//funções anônimas
var sumOld = function(a,b){
    return a + b;
}
console.log(sumOld(5,5));

//arrow functions - função anônima
//return implícito
var sum = (a , b) => a + b;
console.log(sum(5, 15));

//Se precisar criar variáveis, fazer funções com if, etc... tem que se utilizar as chaves
var sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 15));

//Se existir apenas um argumento pode omitir os parênteses
var sum = a => a + 5;
console.log(sum(3));

//Criando objetos
var createObj = () => ({ 
    test: 123, 
    teste: 456
});
console.log(createObj());

//função construtora - NÃO PODE UTILIZAR COM ARROW FUNCTIONS var Car = () => {this.foo = 'bar';};
function Car(){
    this.foo = 'bar';
}
console.log(new Car());

//Pode-se chamar a função antes de defini-la no código - NÃO FUNCIONA COM ARROW FUNCTION
log('test');
function log(value){
    console.log(value);
}

var obj = {
    showContext: function showContext(){
        console.log(this);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

var obj = {
    showContext: function showContext(){
        this.log('teste');
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

//Como era sem arrow function - utilizava-se bind para marcar o contexto ou se armazenava o this em variáveis
var obj = {
    showContext: function showContext(){
        this.log('teste');
        setTimeout(
            function(){
                this.log('after 1000ms');
            }.bind(this),
            1000
        );
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();

//Com arrow function - arrow function tem a propriedade de ter o contexto igual ao código que envolve ele
var obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();
