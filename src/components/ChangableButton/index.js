import React, { useState } from "react";
import Popover from "../Popover";

import "./index.scss";

const ChangableButton = () => {
    const [buttonText, setButtonText] = useState("");
    const onChangeInput = (e) => {
        const value = e.target.value;
        setButtonText(value);
    }
    return (<div className="changableButton">
        <input type="text" onChange={onChangeInput}/>
        <Popover buttonText={buttonText}></Popover>
    </div>
    );
};

export default ChangableButton;