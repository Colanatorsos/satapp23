import { Divider, Flex, Typography } from "antd";
import React from "react";

const { Text } = Typography;
const ProductData = ({ property, ownership, bathroomCount, bedroomCount }) => {
    return (
        <div>
            <Divider />

            <Flex gap={12} justify="space-between">
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>Тип недвижимости</Text>
                    <Text>{property}</Text>
                </Flex>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>Владение</Text>
                    <Text>{ownership}</Text>
                </Flex>
            </Flex>
            <Flex gap={12} justify="space-between" style={{ margin: "20px 0" }}>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>Спальни</Text>
                    <Text>{bathroomCount}</Text>
                </Flex>
                <Flex vertical gap={8} flex={1}>
                    <Text style={{ fontSize: "12px" }}>
                        ВладеВанные комнаты
                    </Text>
                    <Text>{bedroomCount}</Text>
                </Flex>
            </Flex>
            <Divider />
        </div>
    );
};

export default ProductData;
