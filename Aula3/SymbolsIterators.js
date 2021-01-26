//Symbols - Identificador único
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId === uniqueId2);

//é uma maneira de ocultar uma propriedade - uma forma de dizer a outros desenvolvedores para não mexer na propriedade
const obj1 = {
    [uniqueId]: 'Hello'
};
console.log(obj1);

//well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

//iterator é uma interface para consumir passo a passo uma lista ou estrutura de dados
const arr = [1, 2, 3, 4];
const it1 = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//mesma coisa que em cima com while
while (true){
    let {value, done} = it1.next();
    if(done){
        break;
    }
    console.log(value);
}

//com ECMA6 não precisa do iterator
for (let value of arr){
    console.log(value);
}

//com string
const str = 'Digital Innovation One';
for (let value of str){
    console.log(value);
}

//Objeto literal se tornou um iterator
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return{
            next: () => {
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
// const it = obj[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
for (let value of obj){
    console.log(value);
}
const arr2 = [...obj];
console.log(arr2);