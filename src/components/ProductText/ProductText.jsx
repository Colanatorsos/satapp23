import { Flex, Typography } from "antd";
import React from "react";
const { Title, Text } = Typography;

const ProductText = ({ text }) => {
    return (
        <Flex vertical gap={16} style={{ margin: "32px 0" }}>
            <Title level={5}>Общая информация</Title>
            <Text>{text}</Text>
        </Flex>
    );
};

export default ProductText;
