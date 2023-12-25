import { CalculatorOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import React from "react";
const { Text, Title, Link } = Typography;

const ProductHead = ({ title, price, date }) => {
    return (
        <>
            <Flex vertical gap={8}>
                <Title level={5}>{title}</Title>
                <Flex gap={4} align="center">
                    <EnvironmentOutlined style={{ color: "#00DEB6" }} />
                    <Link level={5} style={{ color: "#00DEB6", margin: 0 }}>
                        Посмотреть карту
                    </Link>
                </Flex>
            </Flex>

            <Flex vertical gap={8} style={{ margin: "20px 0 32px" }}>
                <Title level={4}>{price} COM</Title>
                <Flex gap={4} align="center">
                    <CalculatorOutlined style={{ color: "#00DEB6" }} />
                    <Link style={{ color: "#00DEB6", margin: 0 }}>
                        Ежемесячные выплаты по ипотеке
                    </Link>
                </Flex>
                <Text>Добавлено {date}</Text>
            </Flex>
        </>
    );
};

export default ProductHead;
