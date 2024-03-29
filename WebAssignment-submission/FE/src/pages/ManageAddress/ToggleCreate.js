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
            province: "",
            address: "",
            email: "",
            phone: "",


        },
        onSubmit: (values) => {

            const sendData = {

                province: values.province,
                address: values.address,
                email: values.email,
                phone: values.phone,

            };

            axios
                .post("http://localhost/qlsvmvc/?c=store&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            province: Yup.string().required("Không được để trống!"),
            address: Yup.string().required("Không được để trống!"),
            email: Yup.string().required("Không được để trống!"),
            phone: Yup.string().required("Không được để trống!"),

        }),
    });
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm địa chỉ
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm địa chỉ</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto' }}>
                    <form onSubmit={formik.handleSubmit} className="w-fit" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.province} size="lg" type="text" name='province' label="Tỉnh thành" required />
                            {formik.errors.province && formik.touched.province && (
                                <p className="text-danger">{formik.errors.province}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.address} size="lg" type="text" name='address' label="Địa chỉ" required />
                            {formik.errors.address && formik.touched.address && (
                                <p className="text-danger">{formik.errors.address}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.email} size="lg" type="email" name='email' label="Email" required />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-danger">{formik.errors.email}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.phone} size="lg" type="text" name='phone' label="Số điện thoại" required />
                            {formik.errors.phone && formik.touched.phone && (
                                <p className="text-danger">{formik.errors.phone}</p>
                            )}
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Tạo địa chỉ
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}