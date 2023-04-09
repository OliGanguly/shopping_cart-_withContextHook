import React from 'react';
import {  Button, Container, Dropdown, FormControl, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
function Header(props) {
    const {
        state: { cart },
        dispatch,
        
        productDispatch
    } = CartState();
    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
                <Container>
                    <Navbar.Brand >
                        <Link href='/'>Shopping Cart</Link>
                    </Navbar.Brand>
                    <Navbar.Text>
                        <FormControl
                            style={{ width: 300 }}
                            placeholder="Search a Product"
                            className='m-auto'
                            onChange={(e)=>{
                                productDispatch({
                                    type:'FILTER_BY_SEARCH',
                                    payload:e.target.value
                                })
                            }}
                        />
                    </Navbar.Text>
                    <Dropdown >
                        <Dropdown.Toggle variant='success'>
                            <FaShoppingCart size={22} color='white' />
                            <span>{cart.length}</span>
                            {/* <Badge style={{color:'white'}}>{10}</Badge> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{minwidth:570}}>
                           {cart.length>0?
                           <>
                           {
                            cart.map(prod=>(
                                <span className='cartitem' key={prod.id}>
                                 <img
                                 src={prod.image}
                                 className='cartImage'
                                 alt={prod.name}
                                 />
                                 <div className='cartItemDetails'>
                                    <span>{prod.name}</span>
                                    <span><span>&#8377;</span>{prod.price.split(".")[0]}</span>
                                 </div>
                                 <AiFillDelete 
                                 size={30}
                                 style={{cursor:"pointer"}}
                                 onClick={()=>{
                                    dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload:prod
                                     })
                                 }}
                                 />
                                </span>
                            ))
                           }
                           <Link to="/cart">
                           <Button variant="success" style={{width:"95%", margin: "0 10px"}}>Go to Cart</Button>
                           </Link>
                           </>
                           :
                          <span>Cart is Empty</span>
                           }
                        </Dropdown.Menu>
                    </Dropdown>

                </Container>
            </Navbar>



        </>
    );
}

export default Header;