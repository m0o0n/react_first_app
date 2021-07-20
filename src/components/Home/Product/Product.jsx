import React from 'react';
import s from './Product.module.css';
import { NavLink, } from 'react-router-dom';
import dvunitka from './../../../assets/dvu_nitka.jpg'

import store from '../../../redux/state';

const Product = (props) => {
    let pushId =(id)=>{
        // store.getState().NewProdId.push(id)
        let action = { type: "POST_ID", text: id};
        store.dispatch(action)
        
        console.log(store)
    }
    // console.log(store.getState().NewProdId);
    return(
        <div className={s.Product}>
            <div className={s.imageContainer} style={{backgroundImage: `url(${dvunitka})`}}></div>
            <div className={s.nameContainer}>{props.name}</div>
            <div className={s.consist}>
                <div className={s.text}>Состав</div>
                <div className={s.name}>{props.consist}</div>
            </div>
            <div className={s.cost}>
                <div className={s.text}>Цена</div>
                <div className={s.name}>{props.cost1}</div>
                <div className={s.name}>{props.cost10}</div>
                <div className={s.name}>{props.cost50}</div>
            </div>

            <div className={s.costValParametersBlock}>
                <div className={s.costAndInput}>
                    <div className={s.costBlock}>{
                    props.cost1.split(' ')[2]}</div>
                    <div className={s.inputBlock}>
                        <input id="input" type="number" min="1" value={props.valueInput}/>
                        
                        <div className={s.arrows}>
                            <div className={s.buttonUp}>+</div>
                            <div className={s.buttonDown}>-</div>
                        </div>
                        <div className={s.total}></div>
                    </div>
                </div>

                <NavLink to={"/ProductPage/" + props.id} onClick={()=> pushId(props.id)}><div onClick={pushId(props.id)} className={s.buttonBuy}>Купить</div></NavLink>
                
            </div>
        </div>
    );
    
}

export default Product;