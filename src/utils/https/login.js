import axios from "axios";

const url = "https://dummyjson.com/auth/login";
export const login = (body) => {
    return axios.post(url, body, {
        headers: {
            'content-type': 'application/json',
        }
    });
}