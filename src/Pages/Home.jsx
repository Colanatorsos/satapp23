import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Ramification from "../components/Ramification/Ramification";
import LogInBlock from "../components/LogInBlock/LogInBlock";
import DivRecentsearches from "../components/DivRecentsearches/DivRecentsearches";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";

const Home = () => {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.posts.posts);

    const { setAuth } = useActions();

    useEffect(() => {
        console.log(user);
        if (!user.auth) {
            const localStorageUser = JSON.parse(localStorage.getItem("user"));
            if (localStorageUser) {
                setAuth(localStorageUser);
            }
        }
    }, []);
    return (
        <>
            <Header />
            <Ramification />
            {user.auth ? (
                <div>
                    {products.map((product) => (
                        <Card key={product.id} data={product} />
                    ))}
                </div>
            ) : (
                <>
                    <LogInBlock />
                    <DivRecentsearches />
                </>
            )}
        </>
    );
};

export default Home;
