import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Button, Image } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const ProductSlider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(1);
    return (
        <div
            style={{
                objectFit: "cover",
                borderRadius: "10px",
                overflow: "hidden",
                position: "relative",
                margin: "0 0 24px",
            }}
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper) =>
                    setCurrentImage(swiper.realIndex + 1)
                }
            >
                {images.map((el, idx) => (
                    <SwiperSlide key={idx}>
                        <Image height={240} width="100%" src={el} />
                    </SwiperSlide>
                ))}
                <Button
                    type="primary"
                    shape="round"
                    style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "#262637",
                        zIndex: 11,
                    }}
                >
                    <CameraOutlined />
                    {currentImage}/{images.length}
                </Button>
            </Swiper>
        </div>
    );
};

export default ProductSlider;
