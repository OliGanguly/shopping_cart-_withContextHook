import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import { GiShoppingCart } from 'react-icons/gi';
import { CartState } from '../context/Context';

function SingleProduct({ prod }) {

    const {
        state: { cart },
        dispatch
    } = CartState();

    return (
        <div className='product'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>
                    <span>&#8377;</span>{prod.price.split(".")[0]}
                    </Card.Text>
                    <Card.Subtitle>
                        {
                            prod.fastDelivery ?
                                <p>Fast Delivery available</p> :
                                <p>5 days Delivery</p>
                        }
                    </Card.Subtitle>
                    <Rating rating={prod.ratings} />
                    {/* some checks element exists inside the array or not */}

                    {cart.some(p => p.id === prod.id) ?
                        <Button variant="danger"
                            onClick={() => dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: prod
                            })}>Remove
                        </Button>
                        :
                        <Button variant="success"
                            onClick={() => dispatch({
                                type: 'ADD_TO_CART',
                                payload: prod
                            })}>
                            <GiShoppingCart size={20} />
                            {prod.instoke === 0 ? "Out of Stock" : "Add to Cart"}
                        </Button>
                    }


                </Card.Body>
            </Card>
        </div>
    );
}

export default SingleProduct;

