import React from "react"

function Header({onDarkModeClick, isDark}) {
    console.log(onDarkModeClick)
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
             {isDark ? "Dark" : "Light"} Mode
        </button>
        </header>
    )
}

export default Header;