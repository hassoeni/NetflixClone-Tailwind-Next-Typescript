import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};



function ButtonRowContainer({ children }) {
    return (
        <div className="flex gap-10">
            {children}
        </div>
    )
}

ButtonRowContainer.propTypes = propTypes;
ButtonRowContainer.defaultProps = defaultProps;
// #endregion
export default ButtonRowContainer