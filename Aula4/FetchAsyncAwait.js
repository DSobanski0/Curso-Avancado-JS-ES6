fetch('/data.json').then(responseStream => {
    console.log(responseStream);
});

fetch('/data.json')
.then(responseStream => responseStream.json())
.then(data => {
    console.log(data);
}).catch(err => {
    console.log('Erro:', err);
});

//o fetch só vai dar um erro na promise caso aconteça um erro de rede e não um status diferente de 200
fetch('http://localhost:8080/data.json')
.then(responseStream => {console.log(responseStream);
    if(responseStream.status === 200){
        return responseStream.json()
    } else {
        throw new Error ('Request error');
    }
})
.then(data => {
    console.log(data);
}).catch(err => {
    console.log('Error:', err);
});

//ES7 - Async/Await
const simpleFunc = async () => {
    // throw new Error('Oh no!');
    return 12345;
};
simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//com await
const asyncTimer = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});
const simpleFunc2 = async () => {
    const data = await asyncTimer();
    return data;
};
simpleFunc2().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//Primeiro esperou o timer e depois fez a requisição utilizando o fetch - processamento do código assíncrono como se fosse sequencial
const asyncTimer2 = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(54321);
    }, 1000);
});
const simpleFunc3 = async () => {
    const data = await asyncTimer2();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
        );
        return dataJSON;
};
simpleFunc3().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//forma de lidar com async/await e requisições assíncronas em paralelo
const asyncTimer3 = () =>
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(54321);
    }, 1000);
});
const simpleFunc4 = async () => {
    const data = await Promise.all([
        asyncTimer3(), fetch('/data.json').then(resStream => resStream.json())
    ]);
    return data;
};
simpleFunc4().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
