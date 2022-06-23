import PropTypes from 'prop-types';

const propTypes = {
    invoices: PropTypes.array,
    loading: PropTypes.bool,
    isMobileTable: PropTypes.bool,
};

const defaultProps = {
    invoices: [],
    loading: false,
    isMobileTable: false,
};

export {
    defaultProps,
    propTypes,
};