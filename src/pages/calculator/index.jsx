import React, { useState } from "react";

import "./style.css";


const Calculator = () => {

    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }

    return (
        <div className="page">
            <div className="calculator-container flex column center">
                <div className="output flex center">
                    <form>
                        <input type="text" value={result}/>
                    </form>
                </div>
                <div>
                    <button onClick={clear} id="delete">DELETE</button>
                    <button name="+" onClick={handleClick}>+</button>
                </div>
                <div>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="-" onClick={handleClick}>-</button>
                </div>
                <div>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="*" onClick={handleClick}>*</button>
                </div>
                <div>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="/" onClick={handleClick}>/</button>
                </div>
                <div>
                    <button name="." onClick={handleClick}>.</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button onClick={handleClick}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;