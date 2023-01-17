import { ACTION_STRING } from './actionString';
import { addToCart } from '../../utils/https/product';

export const setCart = (body) => {
    return {
        type: ACTION_STRING.addToCart,
        payload: addToCart(body),
    }
}