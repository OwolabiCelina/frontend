import React from "react";
import './inputField.css';

const InputField = ({name, id, value, type, holder,handleChange, ...props}) => {
    return ( 
        <div className="inputField">
            <input name={name} value={value} placeholder={holder} id={id} type= {type} onChange={handleChange} />
        </div>
     );
}
 
export default InputField;