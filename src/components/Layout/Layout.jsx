import React from "react";
import scss from "./Layout.module.scss";

const Layout = ({ children }) => {
    return <div className={scss.layout}>{children}</div>;
};

export default Layout;
