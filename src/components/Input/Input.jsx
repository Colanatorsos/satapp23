import React from "react";
import scss from "../DropDown/DropDown.module.scss";
import { Flex, Input, Typography } from "antd";

const { Text } = Typography;

const MyInput = ({
    placeholder,
    title,
    onChangeHandler,
    name,
    type = "text",
}) => {
    return (
        <Flex vertical gap={12} className={scss.dropDown__wrap}>
            <Text>{title}</Text>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={(e) => onChangeHandler(name, e.target.value)}
                name={name}
            />
        </Flex>
    );
};

export default MyInput;
