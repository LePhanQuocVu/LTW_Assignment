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

} from "@material-tailwind/react";
export default function ToggleCreate() {
    const [open, setOpen] = React.useState(false);
    const formik = useFormik({
        initialValues: {
            name: "",
            role: "",
            img: "",


        },
        onSubmit: (values) => {

            const sendData = {
                name: values.name,
                role: values.role,
                img: values.img,

            };

            axios
                .post("http://localhost/qlsvmvc/?c=team&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống!"),
            role: Yup.string().required("Không được để trống!"),
            img: Yup.string().required("Không được để trống!"),


        }),
    });
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm thành viên
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm thành viên</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }}>
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">

                            <Input onChange={formik.handleChange}
                                value={formik.values.name} size="lg" type="text" name='name' label="Tên" required />
                            {formik.errors.name && formik.touched.name && (
                                <p className="text-danger">{formik.errors.name}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.role} size="lg" type='text' name='role' label="Vai trò" required />
                            {formik.errors.role && formik.touched.role && (
                                <p className="text-danger">{formik.errors.role}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.img} size="lg" type='text' name='img' label="Hình ảnh" required />
                            {formik.errors.img && formik.touched.name && (
                                <p className="text-danger">{formik.errors.img}</p>
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