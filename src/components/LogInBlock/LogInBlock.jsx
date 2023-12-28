import React from "react";
import LogIn from "../../assets/SVG.png";
import scss from "./LogInBlock.module.scss";
import { Link } from "react-router-dom";

const LogInBlock = () => {
    return (
        <div className={scss.section}>
            <img src={LogIn} alt="" className={scss.img} />
            <div className={scss.button}>
                <Link to="/register" className={scss.text_wrapper}>
                    Зарегистрируйтесь
                </Link>
            </div>
        </div>
    );
};

export default LogInBlock;
