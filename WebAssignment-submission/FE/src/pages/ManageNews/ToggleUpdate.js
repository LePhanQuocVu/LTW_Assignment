import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
    Textarea
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const valuess = props.values;
    const handleOpen = () => setOpen(!open);
    const formik = useFormik({
        initialValues: {
            id: valuess.row.id,
            title: valuess.row.title,
            description: valuess.row.description,
            author: valuess.row.author,
            img: valuess.row.img,
            content: valuess.row.content,

        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                title: values.title,
                description: values.description,
                author: values.author,
                img: values.img,
                content: values.content,
            };

            axios
                .put("http://localhost/qlsvmvc/?c=news&a=update", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            title: Yup.string().required("Không được để trống!"),
            description: Yup.string().required("Không được để trống!"),
            author: Yup.string().required("Không được để trống!"),
            img: Yup.string().required("Không được để trống!"),
            content: Yup.string().required("Không được để trống!"),

        }),
    });
    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa thông tin bài báo</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.title} size="lg" type="text" name='title' label="Tiêu đề" />
                            {formik.errors.title && formik.touched.title && (
                                <p className="text-danger">{formik.errors.title}</p>
                            )}
                            <Textarea onChange={formik.handleChange}
                                value={formik.values.description} size="lg" type="text" name='description' label="Mô tả" />
                            {formik.errors.description && formik.touched.description && (
                                <p className="text-danger">{formik.errors.description}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.author} size="lg" type="text" name='author' label="Tác giả" />
                            {formik.errors.author && formik.touched.author && (
                                <p className="text-danger">{formik.errors.author}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.img} size="lg" type='text' name='img' label="Hình ảnh" />
                            {formik.errors.img && formik.touched.img && (
                                <p className="text-danger">{formik.errors.img}</p>
                            )}
                            <Textarea onChange={formik.handleChange}
                                value={formik.values.content} size="lg" type="text" name='content' label="Nội dung" />
                            {formik.errors.content && formik.touched.content && (
                                <p className="text-danger">{formik.errors.content}</p>
                            )}
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Lưu bài báo
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}