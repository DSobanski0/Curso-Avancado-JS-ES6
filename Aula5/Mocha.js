const assert = require('assert');
const Math = require('math.js');
let value = 0;
describe('Math class', function(){
    //hooks - antes de cada bloco de função abaixo o value já foi definido como 0 - pode ser alterado dentro da função
    beforeEach(function(){
        value = 0;
    });
    it('Sum two numbers', function(done){
        const math = new Math();
        this.timeout(3000);
        value = 5;
        math.sum(value, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
    it('Multiply two numbers', function(){
        const math = new Math();
        assert.equal(math.multiply(value, 5), 0);
    });
});

// it.only - executa apenas ele
// it.skip - pula o teste