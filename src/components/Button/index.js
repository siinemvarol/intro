import React, { useState } from "react";

import "./index.scss";

const Button = () => {
    const [value, setValue] = useState(0);
    const decrement = () => {setValue(value-1)};
    const increment = () => {setValue(value+1)};

    return <div className="plusMinusButton">
        <button className="minusButton" onClick={decrement}>-</button>
        <div className="number">{value}</div>        
        <button className="plusButton" onClick={increment}>+</button>
    </div>
}

export default Button;