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

    const handleOpen = () => setOpen(!open);
    const formik = useFormik({
        initialValues: {
            hinhAnh: "",

        },
        onSubmit: (values) => {

            const sendData = {
                hinhAnh: values.hinhAnh,

            };

            axios
                .post("http://localhost/qlsvmvc/?c=carousel&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            hinhAnh: Yup.string().required("Không được để trống!"),

        }),
    });
    return (
        <>
            <Button onClick={handleOpen} variant="gradient" style={{ padding: '10px', height: 'fit-content', alignSelf: 'center' }}>
                Thêm quảng cáo
            </Button>
            <Dialog open={open} size='xs' handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Thêm quảng cáo</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.hinhAnh} size="lg" type="text" name='hinhAnh' label="Ảnh" required />
                            {formik.errors.hinhAnh && formik.touched.hinhAnh && (
                                <p className="text-danger">{formik.errors.hinhAnh}</p>
                            )}
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Tạo quảng cáo
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}