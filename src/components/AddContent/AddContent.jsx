import React, {Component} from 'react';
import s from './AddContent.module.css'
import Inputs from './Inputs.jsx'
import Product from './../Home/Product/Product'
import store from './../../redux/state'
import {addPost} from './../../redux/state'
import {renderEntireTree} from './../../render'
import {AddPostActionCreator} from './../../redux/state'

let AddContent =(props)=>{
  // console.log(props.state);
// debugger;
  const productArray = props.state.Products.map( (product) =>{
    return (<Product id={product.id}
       name={product.name} 
    consist={product.consist} 
    cost1={product.cost1} 
    cost10={product.cost10}
    cost50={product.cost50} 
    valueInput="1" />)
} );

let reference = React.createRef();
let readFnc =()=>{
  let text = reference.current.value;
  console.log(props);
  // debugger
  // let action = { type: 'ADD-POST', postMessage: text };
  let action = AddPostActionCreator(text);
  props.dispatch(action);
  // props.newValues('')
};



let showInputs = props.state.addInputsText.map((input) => {
  // console.log(props.state.NewPostInputs)
  return(
    <Inputs value={props.state.NewPostInputs} name={input.name} reference={ reference }
    string={input.string} />
    
  )
  

});
    return(
        <div className={s.addContent}>
      <div className={s.profileInfo}>
        <div className={s.profileAvatar}><img src="https://habrastorage.org/getpro/habr/post_images/68b/835/f86/68b835f86d9402568aa41a2946798246.png"></img></div>
        <div className="profile-name">Vlad</div>
      </div>
      

      <div className={s.addProduct}>
        <div className={s.productAddImg}>
            <i className="fas fa-plus"></i>
        </div>

        <div className={s.addImgButton} onClick={ readFnc }><i class="fas fa-plus"></i> Add product image</div>
        <div className="product-parametrs">
          <form action="">


          </form>
          {showInputs}
           {/* <Inputs  string="Enter product name" />
           <Inputs reference={reference} string="Enter product consist" />
           <Inputs reference={reference} string="Enter product cost from 1m:" />
           <Inputs reference={reference} string="Enter product cost from 10m:" />
           <Inputs reference={reference} string="Enter product cost from 50m:" /> */}
        </div>
        


      </div>
      
      {productArray}
    </div>
    );
}

export default AddContent;

