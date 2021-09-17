import React from 'react'

const Button = ({ type, btnClass, text, onClick, aug, style}) => {
    return (
        <button 
            type={type}
            onClick={onClick}
            class={btnClass}
            data-augmented-ui={aug.length > 0 ? aug.join(' ') : ''}
            style={style}
        >
            {text}
        </button>
    )
}

export default Button
