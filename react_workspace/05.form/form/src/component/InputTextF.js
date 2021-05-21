import React, {useState} from 'react';


function InputTextF(props) {
    const [value, setValue]=useState('default');
    function handleSubmit(event){
        alert(value);
        event.preventDefault();
    }
    function handleChange(event){
        setValue(event.target.value);
    }
    return (
        <form onSubmit={(event)=>handleSubmit(event)} >
                <label>
                Name:
                <textarea value={value} onChange={(event) => handleChange(event)} />
                </label>
                <input type="submit" value="Submit" />
        </form>
    );
}

export default InputTextF;