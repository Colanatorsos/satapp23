import { Flex, Select, Typography } from "antd";
import React from "react";
import scss from "./DropDown.module.scss";

const { Text } = Typography;

const MyDropDown = ({ defaultName, items, title, handleChange, name }) => {
    return (
        <Flex vertical gap={12} className={scss.dropDown__wrap}>
            <Text>{title}</Text>
            <Select
                defaultValue={defaultName}
                style={{ width: 120 }}
                onChange={(value) => handleChange(name, value)}
                options={items}
                className={scss.dropDown}
            />
        </Flex>
    );
};

export default MyDropDown;
