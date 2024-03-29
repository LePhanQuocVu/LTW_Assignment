import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
    Textarea
} from "@material-tailwind/react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function ToggleCreate() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const formik = useFormik({
        initialValues: {
            header: "",
            content: "",



        },
        onSubmit: (values) => {

            const sendData = {
                header: values.header,
                content: values.content,


            };

            axios
                .post("http://localhost/qlsvmvc/?c=contactPage&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            header: Yup.string().required("Không được để trống!"),
            content: Yup.string().required("Không được để trống!"),



        }),
    });
    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm thông tin liên hệ
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm thông tin liên hệ</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }}>
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.header} size="lg" type="text" name='header' label="Tiêu đề" required />
                            {formik.errors.header && formik.touched.header && (
                                <p className="text-danger">{formik.errors.header}</p>
                            )}
                            <Textarea onChange={formik.handleChange}
                                value={formik.values.content} size="lg" type="text" name='content' label="Nội dung" required />
                            {formik.errors.content && formik.touched.content && (
                                <p className="text-danger">{formik.errors.content}</p>
                            )}
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Tạo
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}