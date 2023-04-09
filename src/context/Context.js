import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';
import * as faker from 'faker';
import { cartReducer, productReducer } from './Reducer';
//create context of name cart
// 1st create context
const Cart = createContext();
faker.seed(99);

//CART.provider wrap the whole react app
// children will come from index.js

function Context({ children }) {
    //list of fake products
    const products = [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.random.image(),
      inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
 
  //manage complex state of our app,
//   state valriable has whole state of our app
// dispatch is for manipulating state
// inside initial state we have products 
//create reducer with name cartReducer
const [state, dispatch] = useReducer(cartReducer, {
products:products,
cart:[]
});
//create another reducer
const [productState,productDispatch]=useReducer(productReducer,{
  byStock:false,
  byFastDelivery:false,
  byRating:0,
  searchQuery:"",
  
})

//pass state and dispatch to reducer through context
    return <Cart.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
    </Cart.Provider>


}

export default Context;
//export context
export const CartState=()=>{
    return useContext(Cart)
}