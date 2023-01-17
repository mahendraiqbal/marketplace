import React, { useState, useEffect } from 'react'
import { getAllProduct } from "../../utils/https/product"
import Card from '../../components/Card';

import EmptyActivity from '../../assets/loading.gif'

export default function Product() {
    const [product, setProduct] = useState([]);
    const [isNotGet, setIsNotGet] = useState(true);

    const fetchData = () => {
        getAllProduct()
            .then((res) => {
                setProduct(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        if (product.length === 0 && isNotGet) {
            fetchData();
            setIsNotGet(false);
        }
    }, [product, isNotGet]);
    return (
        <>
            <h1>Product</h1>
            <div className="container">
                <div className="detail-content">
                    {product.length === 0 ? (
                        <div className="empty-item">
                            <img src={EmptyActivity} alt="empty" id="TextEmptyToDo" />
                        </div>
                    ) : (
                        <>
                            <div className="row">
                                {product.map((products) => {
                                    return (
                                        <Card
                                            id={products.id}
                                            brand={products.brand}
                                            category={products.category}
                                            description={products.description}
                                            discountPercentage={products.discountPercentage}
                                            images={products.images[0]}
                                            price={products.price}
                                            rating={products.rating}
                                            stock={products.stock}
                                            thumbnail={products.thumbnail}
                                            title={products.title}
                                        />
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
