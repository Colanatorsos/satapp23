import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import { Flex, Image, Spin } from "antd";
import ProductData from "../components/ProductData/Product";
import GeneralProductData from "../components/GeneralProductData/GeneralProductData";
import ProductText from "../components/ProductText/ProductText";
import MyMap from "../components/Map/Map";
import ProductHead from "../components/ProductHead/ProductHead";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Product = () => {
    const [post, setPost] = useState();
    const posts = useSelector((state) => state.posts.posts);

    const loaction = useLocation();
    useEffect(() => {
        const postId = loaction.pathname.split("/")[2];
        const findPost = posts.find((el) => String(el.id) === postId);
        if (findPost) setPost(findPost);
    }, [posts]);

    if (!post) {
        return (
            <section>
                <Header />
                <Flex
                    justify="center"
                    align="center"
                    style={{ height: 100 - 20 + "vh" }}
                >
                    <Spin
                        tip="Loading"
                        size="large"
                        style={{ top: "50%" }}
                    ></Spin>
                </Flex>
            </section>
        );
    }

    return (
        <section>
            <Header />
            <Layout>
                <ProductSlider images={post.photos} />

                <ProductHead
                    date="11.12.2023"
                    price={post.price}
                    title={post.address}
                />
                <ProductData
                    bathroomCount={post.bathroomCount}
                    bedroomCount={post.bedroomCount}
                    ownership={post.ownership}
                    property={post.propertyType}
                />
                <GeneralProductData text={post.description} />
                <ProductText text={post.description} />
                <MyMap />
            </Layout>
        </section>
    );
};

export default Product;
