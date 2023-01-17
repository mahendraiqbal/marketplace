const initalState = {
    cart: {
        userId: "",
        products: [
            {
                id: "",
                quantitiy: ""
            }
        ]
    },
}

const cartData = (state = initalState, action) => {
    switch (action.type) {
        case "SET_CART_FULFILLED":
            return {
                ...state,
                cart: action.payload
            };
        default:
            return state;
    }
};

export default cartData