import React from 'react';
import '../UserInput/UserInput.css';
const userInput=(props)=>{
    return (
        <div>
            <input className="inputField" type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};
export default userInput;