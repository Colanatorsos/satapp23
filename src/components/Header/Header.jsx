import React, { useState } from "react";
import scss from "./Header.module.scss";

import LogoSVG from "../../assets/logo.svg";
import Profile from "../../assets/Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const [active, setActive] = useState(false);
    const auth = useSelector((state) => state.user.auth);
    return (
        <header className={scss.header}>
            <div className={scss.div_seo_header}>
                <span
                    className={scss.div_seo_header_button}
                    onClick={() => setActive(!active)}
                ></span>
                {/*<Logo className={scss.div_seo_header_logo} />*/}
                <Link to="/">
                    <img src={LogoSVG} alt="" />
                </Link>
                <Link to={auth ? "/settings" : "/signin"}>
                    <Profile className={scss.div_seo_header_profile} />
                </Link>
            </div>
            <div className={active ? scss.demo_active : scss.demo}>
                <Link to="/">Главная</Link>
                <Link to="/filter">Поиск</Link>
                {!auth && <Link to="/signin">Войти</Link>}
                <Link to="/products">Продукт</Link>
                <Link to="/product/create">Добавить продукт</Link>
                <Link to="/settings">Настройки</Link>
            </div>
        </header>
    );
};

export default Header;
