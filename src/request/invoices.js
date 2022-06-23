import axios from './axios';

/**
 * Get invoices by a date range
 * 
 * @param {string} dateStart
 * @param {string} dateEnd
 * @return {object}
 */
const getByDateRange = async (dateStart, dateEnd) => {
    const { invoices } = (await axios.get(`invoices?date_start=${dateStart}&date_end=${dateEnd}`)).data;
    return invoices || [];
};

export default {
    getByDateRange,
}