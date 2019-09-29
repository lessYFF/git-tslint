interface Person {
    name: string
    age: number
}

let tom: Person = {
    name: 'Tom',
    age: 25,
}

describe('unit test——tslint', () => {
    it('tslint校验是否有效', () => {
        expect(tom.age).toBe(25)
        expect(tom.name).toBe('Tom')
    })
})
