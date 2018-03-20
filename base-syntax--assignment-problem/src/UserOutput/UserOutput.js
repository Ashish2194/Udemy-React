import React from 'react';
import UserInput from '../UserInput/UserInput';
import '../UserOutput/UserOutput.css';
const userOutput=(props)=>{
    const style={
       fontFamily:'Century SchoolBook',
       fontWeight:'bold',
       fontSize:'18px',
      }
    return (
        <div className="card">
          Change your UserName <span style={style} >&rarr;</span> <UserInput name={props.username} change={props.change}/>
            <p>Hey I am {props.username}!!</p>
            <p>{props.username} is  so {props.attitude}!!!!</p>
            
        </div>
    )
};
export default userOutput;