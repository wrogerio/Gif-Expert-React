import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import "./index.css";

export const AddCategory = ({ addCategFunc }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            addCategFunc((c) => [...c, inputValue].reverse());
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) => handleInputValueChange(e)} />
        </form>
    );
};

AddCategory.propTypes = {
    addCategFunc: PropTypes.func.isRequired,
};
