import React from 'react'

const LandingButton = ({label, onClick}) => {
    return (
    <button 
        className="landing-button"
        onClick={onClick}
        data-augmented-ui="all-hex border">
        {label}
    </button>
    )
}

export default LandingButton
