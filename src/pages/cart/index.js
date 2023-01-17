import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../../utils/https/product';
import { useParams } from 'react-router-dom';

export default function Cart() {
    const [oneCart, setOneCart] = useState({
        id: '',
        products: [{}]
    });
    const [isNotGet, setIsNotGet] = useState(true);

    const { id } = useParams();
    const fetchData = () => {
        getUserCart(id)
            .then((res) => {
                console.log(res.data)
                // setOneProduct(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (oneCart.length === 0 && isNotGet) {
            fetchData();
            setIsNotGet(false)
        }
    }, [oneCart, isNotGet])

    return (
        <div>Cart</div>
    )
}
