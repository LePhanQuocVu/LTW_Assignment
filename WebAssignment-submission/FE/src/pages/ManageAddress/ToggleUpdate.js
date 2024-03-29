import React, { useState } from "react";
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
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const valuess = props.values;
    const handleOpen = () => setOpen(!open);

    const formik = useFormik({
        initialValues: {
            id: valuess.row.id,
            province: valuess.row.province,
            address: valuess.row.address,
            email: valuess.row.email,
            phone: valuess.row.phone,


        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                province: values.province,
                address: values.address,
                email: values.email,
                phone: values.phone,

            };

            axios
                .put("http://localhost/qlsvmvc/?c=store&a=update", sendData)
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
    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa địa chỉ</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
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
                            Lưu địa chỉ
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}