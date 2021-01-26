//Callbacks
function doSomething(callback) {
    setTimeout(function () {
        //did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        //did other thing
        callback('Second data');
    }, 1000);
}

//callback hell
function doAll() {
    try {
        doSomething(function (data) {
            var processedData = data.split('');
            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');
                    try {
                        setTimeout(function () {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                });
            } catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}
doAll();

//Promises - Com apenas um catch consegue tratar o erro - bem mais enxuto
const doSomethingPromise = () => new Promise((resolve, reject) => {
    /*for rejected*///throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000);
});
const doOtherThingPromise = () => new Promise((resolve, reject) => {
    /*for rejected*///throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);
});
//Pending
// console.log(doSomethingPromise);
//Fulfilled
// doSomethingPromise.then(data => console.log(data));
//Rejected
//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

//encadear mais promises
// doSomethingPromise()
// .then(data => {
//     console.log(data.split(''));
//     return doOtherThingPromise();
// })
// .then(data2 => console.log(data2.split('')))
// .catch(error => console.log('Ops', error));

//executar as promises em paralelo - duas ao mesmo tempo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

//Promise.race - promise que resolver primeiro é a que vai retornar os valores - mudar p/ 1500ms e testar
// Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
//     console.log(data);
// });