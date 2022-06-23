import Big from 'big.js';

/**
 * Get the decimals of a number
 * 
 * @param {string} number
 * @return {number}
 */
const getDecimals = (number) => {
    const [_, decimals] = number.split('.');
    return !decimals ? 0 : decimals.length;
}

/**
 * Return number with formatting
 * Example:
 * number: 1000 - formatting: 1,0000
 * 
 * @param {number} n - Número
 * @param {number} decimals - Cantidad de decimales
 * @return {string}  - Número con formato
*/
const numero = (number, decimals = null) => {
    const numberDecimals = decimals === null ? getDecimals(number.toString()) : decimals;
    const fixedNumber = Big(number).toFixed(numberDecimals);

    return numberDecimals === 0 ?
        fixedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",") :
        fixedNumber.replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

/**
 * Return a number with formatting price
 * 
 * @param {number} number 
 * @param {string} currency 
 * @returns {string}
 */
const price = (number, currency = '', decimals = null) => {
    return `$ ${numero(number, decimals)} ${currency}`;
}

export default {
    numero,
    price,
};

