import React from 'react'
import s from './AddContent.module.css'
import AddContent from './AddContent'
import store from './../../redux/state'
import {NewValuesActionCreator} from './../../redux/state'
let Inputs =(props)=>{
    let handleChange = (e) =>{
        let text = e.target.value;
        let action = NewValuesActionCreator(text);
        store.dispatch(action);
    }
    
    //   store.newValues(text)
    return(
        <div className={s.productAddDesc}>{props.string}<input value={props.value} name={props.name} onChange={handleChange} ref={props.reference} type="text"></input></div>
    )
    
  }
//   console.log(props);

       


export default Inputs;
