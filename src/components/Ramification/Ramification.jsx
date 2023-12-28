import React from "react";
import scss from "./Ramification.module.scss";
import { useNavigate } from "react-router-dom";

const Ramification = () => {
    const nav = useNavigate();
    return (
        <div className={scss.section}>
            <div className={scss.heading}>
                <div className={scss.text_wrapper}>
                    Верь в то, чтобы найти это.
                </div>
            </div>
            <div className={scss.wrapper}>
                <p className={scss.div}>
                    Ищите недвижимость на продажу и в аренду <br /> в
                    Кыргызстане
                </p>
            </div>
            <div className={scss.link}>
                <button
                    className={scss.text_wrapper_2}
                    onClick={() => nav("/product/create")}
                >
                    Продажа
                </button>
                <button
                    className={scss.text_wrapper_3}
                    onClick={() => nav("/products")}
                >
                    Покупка
                </button>
            </div>
        </div>
    );
};

export default Ramification;
