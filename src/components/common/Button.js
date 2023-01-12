import React from 'react'

const Button = ({ name, className, onClick, type }) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {name}
        </button>
    )
}

export default Button