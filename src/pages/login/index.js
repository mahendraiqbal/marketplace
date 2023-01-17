import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../redux/actions/auth';

function Login(props) {
    const auth = useSelector((state) => state.auth)
    // console.log(auth)
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        dispatch(loginAction(body))
    };

    useEffect(() => {
        if (auth.isPending === true) {
            console.log('loading')
        }
        if (auth.isFulfilled === true) {
            navigate("/product")
        }
    })

    return (
        <form onSubmit={submitHandler}>
            <label>
                Username:
                <input type="text" name="username" onChange={handleChange} id="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleChange} id="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
