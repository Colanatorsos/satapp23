import { Flex, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const GeneralProductData = () => {
    return (
        <>
            <Flex vertical gap={16}>
                <Title level={5}>Общая информация</Title>

                <Flex vertical gap={12}>
                    <Text>8 кроватей</Text>
                    <Text>8 кроватей</Text>
                    <Text>8 кроватей</Text>
                </Flex>
            </Flex>
        </>
    );
};

export default GeneralProductData;
