import React, { useState } from "react";
import scss from "./Card.module.scss";
import photoOne from "../../assets/photo1.png";
import { FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useActions } from "./../../hooks/useActions";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
    const { addToCart, open } = useActions();
    const nav = useNavigate();
    return (
        <div className={scss.Card}>
            <div className={scss.Card__imgs}>
                <img src={data.photos[0]} alt="" />
                <div>
                    {data.photos.slice(0, 3).map((image) => (
                        <img src={image} alt="" />
                    ))}
                </div>
            </div>
            <div className={scss.Card__info}>
                <div className={scss.Card__info_price}>
                    <div>
                        <h3>{data.price} COM</h3>
                        <p>ЦЕНА</p>
                    </div>
                    <button onClick={() => nav("/product/" + data.id)}>
                        ОТКРЫТЬ
                    </button>
                </div>
                <div className={scss.Card__info_desc}>
                    <div className={scss.Card__info_desc_name}>
                        <h5>{data.title}</h5>
                        <p>{data.description}</p>
                        <p>новый</p>
                    </div>
                    <div className={scss.Card__info_desc_nav}>
                        <p>Добавлено {data.added}</p>
                        <div>
                            <a href="/">
                                <FaPhoneAlt />
                                Позвонить
                            </a>
                            <Button
                                onClick={() => {
                                    addToCart(data);

                                    open();
                                }}
                            >
                                <Flex align="center" gap={5}>
                                    <CiHeart />
                                    Сохранить
                                </Flex>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
