import React from 'react'
import PropTypes from 'prop-types';
import { Node } from 'typescript';
import { ReactNode } from 'react';

const propTypes = {
    children: PropTypes.node,
};

type Props = {
    children?: React.ReactNode
}

const defaultProps = {};



function ButtonRowContainer({ children }: Props) {
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