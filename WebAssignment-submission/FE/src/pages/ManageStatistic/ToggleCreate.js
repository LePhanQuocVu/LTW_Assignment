import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,


} from "@material-tailwind/react";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function ToggleCreate() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    const formik = useFormik({
        initialValues: {
            quantity: "",
            item: "",



        },
        onSubmit: (values) => {

            const sendData = {
                quantity: values.quantity,
                item: values.item,


            };

            axios
                .post("http://localhost/qlsvmvc/?c=statistic&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            quantity: Yup.string().required("Không được để trống!"),
            item: Yup.string().required("Không được để trống!"),



        }),
    });
    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm thống kê
            </Button>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm thống kê</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.quantity} size="lg" type="text" name='quantity' label="Số lượng" required />
                            {formik.errors.quantity && formik.touched.quantity && (
                                <p className="text-danger">{formik.errors.quantity}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.item} size="lg" type="text" name='item' label="Tên" required />
                            {formik.errors.item && formik.touched.item && (
                                <p className="text-danger">{formik.errors.item}</p>
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