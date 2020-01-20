import React from "react";
import './CheckBox.css';

const CheckBox = (props) => {
  return(
      <div className="form-check">
          <input type="checkbox" className="form-check-input" name={props.name}  id={props.id} onChange={props.onChange}/>
          <label className="form-check-label" htmlFor={props.id} >
              {props.labelName}
          </label>
      </div>
  );
};

export default CheckBox;
