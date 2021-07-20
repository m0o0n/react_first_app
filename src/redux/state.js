import React from 'react'

const AddPost = "ADD-POST";
const NewValues = "NEW-VALUES";
let store = {
  _state: {
      Products: [
          {id: '0', name: "0Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
          {id: '1', name: "1Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
          {id: '2', name: "2Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
          {id: '3', name: "3Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"},
          {id: '4', name: "4Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", consist: 'Хлопок: 85%, Эластан: 15%', cost1: "от 1м 185грн/пог.м", cost10: "от 10м 160грн/пог.м", cost50: "от 50м(рулон) 135грн/пог.м"}
        ],
        addInputsText: [
          { string: "Enter product name", name: "name"},
          { string: "Enter product consist", name: "consist"},
          { string: "Enter product cost from 1m:", name: "cost1"},
          { string: "Enter product cost from 10m:", name: "cost10"},
          { string: "Enter product cost from 50m:", name: "cost50"}
      ],
      NewPostInputs: "Nemo - Nobody",
      NewProdId: "1"
  },

  getState(){

    return this._state;
  },
  _renderEntireTree(){  },

subscribe(observer){
  this._renderEntireTree = observer;
},
dispatch(action){
  if(action.type === "ADD-POST"){
    //f(postMessage)
    let newPost = {
      id: '5',
      name: "Трехнитка петля футер ПЕНЬЕ КОМПАКТ Турция", 
      consist: 'Хлопок: 85%, Эластан: 15%', 
      cost1: "от 1м 185грн/пог.м", 
      cost10: "от 10м 160грн/пог.м", 
      cost50: action.postMessage
    }; 
    this._state.Products.push(newPost);
    this._renderEntireTree(this._state);

  }else if(action.type === "NEW-VALUES"){
    //f(text)
    this._state.NewPostInputs = action.text;
    this._renderEntireTree(this._state);
    console.log(this._state.NewPostInputs)
  }else if(action.type === "POST_ID"){
    this._state.NewProdId = action.text;
  }
}

}

export const AddPostActionCreator =(text)=> ({type: AddPost, postMessage: text});
export const NewValuesActionCreator =(text)=>({type: NewValues, text: text});









export default store;
