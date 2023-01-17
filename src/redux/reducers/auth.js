import { ACTION_STRING } from "../actions/actionString";

const initalState = {
    userData: {
        token: JSON.parse(localStorage["marketplace-token"] || null),
        id: ''
    },
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {}
}

const authReducer = (prevState = initalState, action) => {
    const { authLogin, pending, fulfilled, rejected } = ACTION_STRING;

    switch (action.type) {
        case authLogin + pending:
            return {
                ...prevState,
                isPending: true,
                isFulfilled: false,
                isRejected: false
            };

        case authLogin + fulfilled:
            const data = action.payload.data;
            console.log(data)
            const userData = {
                ...prevState.userData,
                token: data.token,
                id: data.id,
            };
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                userData,
            };

        case authLogin + rejected:
            const err = action.payload;
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                err,
            }

        default:
            return prevState;
    }
}

export default authReducer;
