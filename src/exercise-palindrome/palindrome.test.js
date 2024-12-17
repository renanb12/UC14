const { isPalindrome } = require('./palindrome');

describe('isPalindrome', () => {
    test('identifica palíndromos comuns corretamente', () => {
        expect(isPalindrome('racecar')).toBe(true);
        expect(isPalindrome('madam')).toBe(true);
    });

    test('ignora espaços, maiúsculas e caracteres especiais', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
        expect(isPalindrome('No lemon, no melon')).toBe(true);
    });

    test('retorna falso para strings que não são palíndromos', () => {
        expect(isPalindrome('hello')).toBe(false);
        expect(isPalindrome('javascript')).toBe(false);
    });

    test('lida corretamente com valores nulos ou outros tipos', () => {
        expect(isPalindrome(null)).toBe(false);
        expect(isPalindrome(12321)).toBe(false);
        expect(isPalindrome('')).toBe(true);
    });

    test('normaliza strings com acentos ou caracteres diacríticos', () => {
        expect(isPalindrome('àtóòtà')).toBe(true);
        expect(isPalindrome('ãbççbã')).toBe(true);
    });
});
