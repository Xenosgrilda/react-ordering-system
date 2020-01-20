import React from "react";
import './TextInputIcon.css';

import searchIcon from '../../images/search-icon.png';

 const TextInputIcon = (props) => {
    return(
        <div className='kabum-input-icon-group'>
            <input className='kabum-input' type="text" {...props} />
            <img className='kabum-input-icon' src={searchIcon} alt='Search'/>
        </div>
    );
};

 export default TextInputIcon;
