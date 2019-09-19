interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

var expect = require('chai').expect

describe('tslint校验是否有效', () => {
    it('tslint校验是否有效', () => {
        expect(tom.age == 25).to.be.true
        expect(tom.name == 'Tom').to.be.true
    })
})
