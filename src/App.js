import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import AddContent from './components/AddContent/AddContent.jsx';
import Home from './components/Home/Home.jsx';
import ProductPage from './components/Home/ProductPage/ProductPage';
import Product from './components/Home/Product/Product';

// import {addPost} from './redux/state'
const App = (props) => {
console.log(props)
  
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    
    {/* <AddContent /> */}
    <Route path="/Home" render={ () => <Home Products={props.state.Products} /> } />
    <Route path="/Product" render={ ()=> <AddContent state={props.state} dispatch={props.dispatch} />} />
    <Route path="/ProductPage" render={ () => <ProductPage Products={props.state.Products} dispatch={props.dispatch}/> } />
    </div>
    </BrowserRouter>
  );
}




export default App;
