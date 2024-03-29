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
    Select,
    Option

} from "@material-tailwind/react";
export default function ToggleCreate() {
    const [open, setOpen] = React.useState(false);
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            fullname: "",
            email: "",
            role: "",
            phone: "",
            image: "",


        },
        onSubmit: (values) => {

            const sendData = {
                username: values.username,
                password: values.password,
                fullname: values.fullname,
                email: values.email,
                role: values.role,
                phone: values.phone,
                image: values.image,




            };

            axios
                .post("http://localhost/qlsvmvc/?c=user&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            username: Yup.string().required("Không được để trống!"),
            password: Yup.string().required("Không được để trống!"),
            fullname: Yup.string().required("Không được để trống!"),

            email: Yup.string().required("Không được để trống!"),

            phone: Yup.string().required("Không được để trống!"),
            image: Yup.string().required("Không được để trống!"),




        }),
    });
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm tài khoản
            </Button>
            <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm tài khoản</DialogHeader>
                <DialogBody style={{ height: '500px', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.username} size="lg" type="text" name='username' label="Tên người dùng" required />
                            {formik.errors.username && formik.touched.username && (
                                <p className="text-danger">{formik.errors.username}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.password} size="lg" type="password" name='password' label="Mật khẩu " required />
                            {formik.errors.password && formik.touched.password && (
                                <p className="text-danger">{formik.errors.password}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.fullname} size="lg" type="text" name='fullname' label="Họ và tên" required />
                            {formik.errors.fullname && formik.touched.fullname && (
                                <p className="text-danger">{formik.errors.fullname}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.email} size="lg" type='email' name='email' label="Email" required />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-danger">{formik.errors.email}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.phone} size="lg" type="text" name='phone' label="Số điện thoại" required />
                            {formik.errors.phone && formik.touched.phone && (
                                <p className="text-danger">{formik.errors.phone}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.image} size="lg" type="text" name='image' label="Ảnh đại diện" required />
                            {formik.errors.image && formik.touched.image && (
                                <p className="text-danger">{formik.errors.image}</p>
                            )}


                            <Select label="Vai trò" name="role">
                                <Option value="user">Người dùng</Option>
                                <Option value="admin">Quản trị viên</Option>
                            </Select>
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Tạo tài khoản
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}