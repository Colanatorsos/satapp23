import React, { useState } from "react";
import scss from "./LogIn.module.scss";
import axios from "axios";

const LogIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const inputHandler = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!!formData.email.trim() && !!formData.password.trim()) {
            const config = {
                body: JSON.stringify(formData),
            };

            axios
                .post("http://127.0.0.1:8000/accounts/login/", config)
                .then((res) => {
                    console.log(res);
                })
                .catch((er) => {
                    console.error(er);
                });
        }
    };
    return (
        <form className={scss.Form}>
            <h1>Войти аккаунт</h1>
            <div>
                <div>
                    <p>Адрес электронной почты</p>
                    <input
                        type="email"
                        name="email"
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
                <div>
                    <p>Пароль</p>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => inputHandler(e)}
                    />
                </div>
            </div>
            <button onClick={(e) => submitHandler(e)}>Продолжить</button>
        </form>
    );
};

export default LogIn;
