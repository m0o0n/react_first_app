import React from 'react'
import Product from './../Product/Product.jsx';
import store from './../../../redux/state'

let ProductPage =(props)=>{
   console.log(store) 
    return(
      <div>
        hiiiii
        <Product id={store.getState().Products[store.getState().NewProdId].id}
             name={store.getState().Products[store.getState().NewProdId].name} 
          consist={store.getState().Products[store.getState().NewProdId].consist} 
          cost1={store.getState().Products[store.getState().NewProdId].cost1} 
          cost10={store.getState().Products[store.getState().NewProdId].cost10}
          cost50={store.getState().Products[store.getState().NewProdId].cost50} 
          valueInput="1" />
      </div>
      
    )
}

export default ProductPage;