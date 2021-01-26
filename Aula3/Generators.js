//generator - pode ser utilizado para construir iteradores
function* hello(){
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
}
const it1 = hello();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next('Outside!'));

//números naturais infinitos
function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}
const it = naturalNumbers();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

//transformar objeto em iterável
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for(var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};
for(let value of obj){
    console.log(value);
}