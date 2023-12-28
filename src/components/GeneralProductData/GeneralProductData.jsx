import { Flex, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const GeneralProductData = ({ text }) => {
    return (
        <>
            <Flex vertical gap={16}>
                <Title level={5}>Общая информация</Title>

                <Flex vertical gap={12}>
                    {text}
                </Flex>
            </Flex>
        </>
    );
};

export default GeneralProductData;
