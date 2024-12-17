function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    const sanitized = str.normalize("NFD").toLowerCase().replace(/[\W_]/g, '');
    return sanitized === sanitized.split('').reverse().join('');
}

module.exports = { isPalindrome };