import React from 'react';
import {NavLink} from 'react-router-dom';
let Links = (props) => {
    return(
        <div><NavLink to={props.link} >{props.textLink}</NavLink></div>
    )
        
    
}

export default Links;