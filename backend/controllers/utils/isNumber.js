const regexNumber = /^[0-9]+$/;

function isNumber(strNumber) {
    return regexNumber.test(strNumber);
}

module.exports = {
    isNumber
}