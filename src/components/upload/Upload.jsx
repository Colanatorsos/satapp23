import React from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message } from "antd";
import Dragger from "antd/es/upload/Dragger";

const MyUpload = ({ addFile }) => {
    const onChangeHandler = (info) => {
        const { status } = info.file;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            addFile(info.file);
            message.success(`${info.file} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file} file upload failed.`);
        }
    };

    const props = {
        name: "file",
        multiple: true,
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        onChange(info) {
            onChangeHandler(info);
        },
        onDrop(e) {
            addFile(e.dataTransfer.files);
            console.log("Dropped files", e.dataTransfer);
        },
    };
    return (
        <Dragger {...props} style={{ height: "200px" }}>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Добавьте фотографии недвижимости</p>
        </Dragger>
    );
};

export default MyUpload;
