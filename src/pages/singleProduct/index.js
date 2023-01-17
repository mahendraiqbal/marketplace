import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneProduct } from '../../utils/https/product'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import { setCart } from '../../redux/actions/product'

function SingleProduct() {
    const [oneProduct, setOneProduct] = useState([]);
    const [isNotGet, setIsNotGet] = useState(true);
    const [values, setValues] = useState({
        userId: '',
        products: [{}],
    })
    const userId = useSelector((state) => state.auth.userData.id)
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        const body = {
            userId: userId,
            products: [{
                id: oneProduct.id,
                quantity: quantity
            }]
        };
        dispatch(setCart(body));
    }

    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    const { id } = useParams();
    const fetchData = () => {
        getOneProduct(id)
            .then((res) => {
                // console.log(res.data)
                setOneProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (oneProduct.length === 0 && isNotGet) {
            fetchData();
            setIsNotGet(false)
        }
    }, [oneProduct, isNotGet])
    return (
        <>
            <main>
                <div className="container-fluid bg-trasparent my-4 p-3">
                    {/* <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3"> */}
                    <div className="col">
                        <div className="card h-100 shadow-sm">
                            <img alt='images' src={oneProduct.thumbnail} />
                            <div className="card-body">
                                <div className="clearfix mb-3">
                                    <span className="float-start badge rounded-pill bg-primary">{oneProduct.title}</span>
                                    <span className="float-end price-hp">$ {oneProduct.price}</span>
                                </div>
                                <h5 className="card-title">{oneProduct.description}</h5>
                                <Link style={{ textDecoration: 'none' }}
                                    to={`/carts/${id}`}>
                                    <div>
                                        <div className='button-quantity'>
                                            <button onClick={handleDecrement}>-</button>
                                            <span onChange={handleChange} name="quantity">{quantity}</span>
                                            <button onClick={handleIncrement}>+</button>
                                        </div>
                                        <div className="text-center my-4">
                                            <button type='submit' onClick={submitHandler}>
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default SingleProduct;