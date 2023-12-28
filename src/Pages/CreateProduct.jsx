import React, { useState } from "react";
import Header from "../components/Header/Header";
import MyDropDown from "../components/DropDown/DropDown";
import {
    bathroomCountOptions,
    bedroomCountOptions,
    ownershipTypes,
    propertyTypes,
    regions,
    roomCountOptions,
} from "../components/DropDown/dropDownData";
import scss from "./CreateProduct.module.scss";
import { Button, Flex } from "antd";
import MyInput from "../components/Input/Input";
import MyMap from "../components/Map/Map";
import MyUpload from "../components/upload/Upload";
import Layout from "../components/Layout/Layout";
import { useActions } from "../hooks/useActions";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
    const [post, setPost] = useState({
        id: new Date().getTime(),
        city: "",
        address: "",
        propertyType: "",
        ownership: "",
        description: "",
        generalInfo: "",
        area: 0,
        roomCount: 0,
        price: 0,
        bedroomCount: 0,
        bathroomCount: 0,
        photos: [],
    });

    const { addPost } = useActions();
    const nav = useNavigate();

    const onChangeHandler = (name, value) => {
        setPost({ ...post, [name]: value });
    };

    const addFile = (image) => {
        setPost({ ...post, photos: [...post.photos, image] });
    };

    const saveData = () => {
        const values = Object.values(post);
        console.log(post);

        if (values.every((el) => el) && post.photos.length > 0) {
            addPost(post);
            nav("/product/" + post.id);
        }
    };

    return (
        <>
            <Header />
            <div className={scss.head}>
                <h1 className={scss.title}>
                    Недвижимость <br /> в Кыргызстане в аренду
                </h1>
            </div>
            <Layout>
                <div className={scss.content}>
                    <Flex vertical gap={32}>
                        <MyDropDown
                            name="city"
                            handleChange={onChangeHandler}
                            defaultName="Любой"
                            items={regions}
                            title="Введите название города"
                        />
                        <MyInput
                            title="Адрес"
                            placeholder="Укажите адрес "
                            name="address"
                            onChangeHandler={onChangeHandler}
                        />
                        <MyMap />
                        <MyDropDown
                            name="propertyType"
                            handleChange={onChangeHandler}
                            defaultName="Любое"
                            items={propertyTypes}
                            title="Тип недвижимостиа"
                        />
                        <MyDropDown
                            name="ownership"
                            handleChange={onChangeHandler}
                            defaultName="Владение"
                            items={ownershipTypes}
                            title="Право собственности"
                        />
                        <MyInput
                            title="Описание"
                            placeholder="Опишите недвижимость"
                            name="description"
                            onChangeHandler={onChangeHandler}
                        />
                        <MyInput
                            title="Общая информация о недвижимости"
                            placeholder="Добавьте общую информацию"
                            name="generalInfo"
                            onChangeHandler={onChangeHandler}
                        />
                        <MyInput
                            title="Квадратура"
                            type="number"
                            placeholder="Укажите квадратуру в метрах"
                            name="area"
                            onChangeHandler={onChangeHandler}
                        />
                        <Flex gap={16} justify="space-between">
                            <MyDropDown
                                name="roomCount"
                                handleChange={onChangeHandler}
                                defaultName="-"
                                items={roomCountOptions}
                                title="Кол-во комнат"
                            />
                            <MyInput
                                type="number"
                                title="Цена"
                                placeholder="-"
                                name="price"
                                onChangeHandler={onChangeHandler}
                            />
                        </Flex>
                        <Flex gap={16} justify="space-between">
                            <MyDropDown
                                name="bedroomCount"
                                handleChange={onChangeHandler}
                                defaultName="-"
                                items={bedroomCountOptions}
                                title="Кол-во спален"
                            />
                            <MyDropDown
                                name="bathroomCount"
                                handleChange={onChangeHandler}
                                defaultName="-"
                                items={bathroomCountOptions}
                                title="Кол-во ванных комнат"
                            />
                        </Flex>

                        <MyUpload addFile={addFile} />

                        <Flex justify="space-between">
                            <Button type="primary" size="large">
                                Очистить
                            </Button>
                            <Button onClick={() => saveData()} size="large">
                                Сохранить
                            </Button>
                        </Flex>
                    </Flex>
                </div>
            </Layout>
        </>
    );
};

export default CreateProduct;
