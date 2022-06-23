/**
 * Normalize a hour
 * 
 * @param {string} dateTime 
 * @returns {string}
 */
const normalizeHour = (dateTime) => {
    const time = dateTime
        .split("T")[1]
        .split("-")[0];

    const hour = Number(time.split(":")[0]);

    return `${time} ${hour > 12 ? "p.m" : "a.m"}`;
}

/**
 * Normalize a date
 * 
 * @param {string} dateTime
 * @param {boolean} includeHour
 * @return {string}
 */
const normalizeDate = (dateTime, includeHour = true) => {
    const [date, _] = dateTime.split('T');

    return includeHour
        ? `${date}  ${normalizeHour(dateTime)}`
        : date
}

/**
 * Check if value is object.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isObject = (value) => {
    return value && typeof value === 'object';
}

/**
 * Check if object is empty.
 * 
 * @param {*} value
 * @return {boolean}
 */
const isEmptyObject = (value) => {
    return !isObject(value) || Object.keys(value).length === 0;
}

export {
    normalizeDate,
    normalizeHour,
    isEmptyObject,
};