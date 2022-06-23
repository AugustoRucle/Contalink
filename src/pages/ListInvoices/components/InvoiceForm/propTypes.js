import PropTypes from 'prop-types';

const propTypes = {
    onSubmit: PropTypes.func,
};

const defaultProps = {
    onSubmit: () => { }
};

export {
    defaultProps,
    propTypes,
};