import axios from "axios";

const host = "https://dummyjson.com/";
export const getAllProduct = () => {
    const url = host + 'products';
    return axios.get(url)
}

export const getOneProduct = (id) => {
    const url = `${host}products/${id}`
    return axios.get(url, id)
}

export const addToCart = (body) => {
    const url = `${host}carts/add`
    return axios.post(url, body, {
        headers: {
            'content-type': 'application/json',
        }
    });
}

export const getUserCart = (id) => {
    const url = `${host}carts/user/${id}`
    console.log(url)
    return axios.get(url, id)
}