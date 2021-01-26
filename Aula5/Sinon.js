// Sinon - spy - Consegue verificar e espionar funções e saber a maneira como foram chamadas, quant de vezes que foram chamadas e assim por diante
const assert = require('assert');
const Math = require('math.js');
const expect = require('chai').expect;
const sinon = require('sinon');
let value = 0;
describe('Math class', function () {
    //hooks
    beforeEach(function () {
        value = 0;
    });
    it('Sum two numbers', function (done) {
        const math = new Math();
        this.timeout(3000);
        value = 5;
        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });
    it('Multiply two numbers', function () {
        const math = new Math();
        const obj = {
            name: 'Daniel'
        };
        const obj2 = {
            name: 'Daniel'
        };
        expect(obj)
            .to.deep.equal(obj2);
    });
    it.only('Calls res with sum and index values', function(){
        const req = {};
        const res = {
            load: function load(){
                console.log('Called!');
            }
        };
        sinon.spy(res, 'load');
        const math = new Math();
        math.printSum(req, res, 5, 5);
        expect(res.load.args[0][1]).to.equal(10);
    })
});

//sinon.stub - Substitui métodos e colocar um return customizado