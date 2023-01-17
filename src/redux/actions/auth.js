import { ACTION_STRING } from "./actionString";
import { login } from "../../utils/https/login";

export const loginAction = (body) => {
    return {
        type: ACTION_STRING.authLogin,
        payload: login(body),
    }
};
