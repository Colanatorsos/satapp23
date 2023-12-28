// import React from "react";
// import { InboxOutlined } from "@ant-design/icons";
// import { message } from "antd";
// import Dragger from "antd/es/upload/Dragger";

// const MyUpload = ({ addFile }) => {
//     const onChangeHandler = (info) => {
//         const { status } = info.file;
//         if (status !== "uploading") {
//             console.log(info.file, info.fileList);
//         }
//         if (status === "done") {
//             addFile(info.file);
//             message.success(`${info.file} file uploaded successfully.`);
//         } else if (status === "error") {
//             message.error(`${info.file} file upload failed.`);
//         }
//     };

//     const props = {
//         name: "file",
//         multiple: true,
//         action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
//         onChange(info) {
//             onChangeHandler(info);
//         },
//         onDrop(e) {
//             addFile(e.dataTransfer.files);
//             console.log("Dropped files", e.dataTransfer);
//         },
//     };
//     return (
//         <Dragger {...props} style={{ height: "200px" }}>
//             <p className="ant-upload-drag-icon">
//                 <InboxOutlined />
//             </p>
//             <p className="ant-upload-text">Добавьте фотографии недвижимости</p>
//         </Dragger>
//     );
// };

// export default MyUpload;

import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import React, { useState } from "react";

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

const MyUpload = ({ addFile }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(
            file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        );
    };

    const handleChange = async ({ fileList, file }) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        addFile(file.url || file.preview);
        setFileList(fileList);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Добавьте фотографии недвижимости</div>
        </div>
    );
    return (
        <>
            <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                />
            </Modal>
        </>
    );
};

export default MyUpload;
