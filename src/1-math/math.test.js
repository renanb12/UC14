const { multiplicar } = require('./math')

test('multiplicar dois numeros positivos', () => {
    expect(multiplicar(2, 3)).toBe(6);
})

test('multiplicar por zero', () => {
    expect(multiplicar(5, 0)).toBe(0);
})