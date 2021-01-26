// const e let não possuem a propriedade de hoisting - não pode usar variável const let antes de sua inicialização
// console.log(name);
// const name = 'Daniel';
// console.log('Keep going...');
//assim que o erro é identificado ele interrompe toda a execução do código seguinte

//para tratar o erro pode usar try/catch e dar sequencia com o código - pode utilizar finally ou não para continuar executando o código
// try {
//     console.log(name);
//     const name = 'Daniel';
// } catch (err) {
//     console.log('Error: ', err);
// } finally {
//     console.log('Keep going...');
// }

//pode gerar seu erro dinamicamente
// try {
//     const name = 'Daniel';
//     const myError = new Error('Custom message');
//     throw myError;
// } catch (err) {
//     console.log('Error: ', err);
// } finally {
//     console.log('Keep going...');
// }

//pode adicionar meta informação ou métodos ou qualquer tipo de coisa no erro para poder usar posteriormente
class CustomError extends Error {
    constructor({
        message,
        data
    }) {
        super(message);
        this.data = data;
    }
}
try {
    const name = 'Daniel';
    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });
    throw myError;
} catch (err) {
    if (err.data.type === 'Server error') {
        console.log(err);
        console.log(err.data);
    } else {
    }
} finally {
    console.log('Keep going...');
}