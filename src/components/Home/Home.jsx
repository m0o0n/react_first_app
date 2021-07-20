import React from 'react';
import Product from './Product/Product.jsx'
import s from './Home.module.css';
import ProductPage from './ProductPage/ProductPage.jsx';
import { NavLink, Route, BrowserRouter } from 'react-router-dom';
const Home = (props) =>{
    // let Products = [
    //     {id: '0', name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м" },
    //     {id: '1', name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
    //     {id: '2', name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
    //     {id: '3', name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
    //     {id: '4', name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"}
    // ];

    const productArray = props.Products.map( (product) =>{
          return (<Product id={product.id}
             name={product.name} 
          consist={product.consist} 
          cost1={product.cost1} 
          cost10={product.cost10}
          cost50={product.cost50} 
          valueInput="1" />)
    } )
    return(
        <div className>
            Home page
            <div className={s.products}>{productArray}</div>
            {/* <BrowserRouter>
            <Route path="/ProductPage" render={ () => <ProductPage /> } />
            </BrowserRouter> */}
           
        </div>
    );
}

export default Home;