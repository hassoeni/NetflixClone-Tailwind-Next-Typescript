import React from 'react'
import PropTypes from 'prop-types';

const propTypes = {
    buttonbg: PropTypes.string,
    buttonring: PropTypes.string,
    handleClick: PropTypes.func,
    text: PropTypes.string,
    primary: PropTypes.bool 

};

const defaultProps = {
    buttonbg: '',
    buttonring: '',
    handleClick: undefined,
    text: '',
    primary: false,
};


function Button({text, handleClick, buttonring, buttonbg, textcolor}){

    const defaultbuttonclass = `transition transform-all active:scale-95 delay-50 ease-in-out m-3.5 
    py-0.5 sm:p-2 px-2 w-full sm:w-60 flex-wrap flex-shrink font-semibold text-sm sm:text-md ${textcolor} uppercase ${buttonbg}  
    ring-1 ${buttonring} hover:ring-offset-2 shadow-xl drop-shadow-lg cursor-pointer rounded-full`

    

    return (
        <button className={defaultbuttonclass} onClick={handleClick}>
            {text}
        </button>
    )
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button

