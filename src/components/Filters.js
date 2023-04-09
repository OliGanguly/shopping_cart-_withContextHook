import React from 'react';
import Form from 'react-bootstrap/Form';
import Rating from './Rating';
import { CartState } from '../context/Context';
import { Button } from 'react-bootstrap';

function Filters(props) {
    // const [ratingState, setRatingState] = useState(2)
    const { productState:{
        byStock,
        byFastDelivery,
        byRating,
        sort,
        },
        productDispatch } = CartState()
        // console.log(byStock,
        //     byFastDelivery,
        //     byRating,
        //     sort,searchQuery);
    return (
        <div className='filters'>
            <span className='title'> Filter Products </span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type='radio'
                    id={`inline-1`}
                    onChange={()=>
                    productDispatch({
                        type:"SORT_BY_PRICE",
                        payload:"lowToHigh"
                    })}
                    checked={sort==="lowToHigh"?true:false}
                />
            </span>

            <span>
                <Form.Check
                    inline
                    label="Decending"
                    name="group1"
                    type='radio'
                    id={`inline-2`}
                    onChange={()=>productDispatch({
                        type:"SORT_BY_PRICE",
                        payload:"highToLow"
                    })}
                    checked={sort==="highToLow"?true:false} 
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Out of Stock"
                name="group1"
                type='checkbox'
                id={`inline-3`}
                onChange={()=>productDispatch({
                    type:'FILTER_BY_STOCK'
                })}
                checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                inline
                label="Fast Delivery"
                name="group1"
                type='checkbox'
                id={`inline-4`}
                onChange={()=>productDispatch({
                    type:'FILTER_BY_DELIVERY'
                })}
                checked={byFastDelivery}
                />
            </span>
            <span>
                <label>Rating:</label>
                <Rating
                    rating={byRating}
                    //whatever i click want to send this
                    // onClick={(i) => setRatingState(i + 1)}
                    onClick={(i)=>
                    productDispatch({
                        type:"FILTER_BY_RATING",
                        payload:i+1
                    })
                    }
                    style={{ cursor: "pointer" }} />
            </span>
            <Button variant='light' 
            onClick={()=>productDispatch({
                type:'CLEAR_FILTER'
            })}>Clear</Button>
        </div>
    );
}

export default Filters;