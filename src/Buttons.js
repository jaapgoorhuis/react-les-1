import React from "react";

function Buttons({title, disabled}) {
    return (
        <button type={"button"} disabled={disabled} onClick={function (){console.log(title)}}>
            {title}
        </button>
    )
}

export default Buttons;