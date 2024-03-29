import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,

} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";

import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function DialogDefault(props) {
    const [open, setOpen] = React.useState(false);
    const valuess = props.values;

    const formik = useFormik({
        initialValues: {
            id: valuess.row.id,
            ptitle: valuess.row.ptitle,
            pprice: valuess.row.pprice,
            pkind: valuess.row.pkind,
            pimg: valuess.row.pimg,


        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                ptitle: values.ptitle,
                pprice: values.pprice,
                pkind: values.pkind,
                pimg: values.pimg,
            };

            axios
                .put("http://localhost/qlsvmvc/?c=product&a=update", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {

                        window.location.reload();
                    }
                }).catch(error => {
                    console.log("error:", error);
                });;


        },
        validationSchema: Yup.object({
            ptitle: Yup.string().required("Không được để trống!"),
            pprice: Yup.string().required("Không được để trống!"),

            pkind: Yup.string().required("Không được để trống!"),
            pimg: Yup.string().required("Không được để trống!"),

        }),
    });
    const handleOpen = () => setOpen(!open);


    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa sản phẩm</DialogHeader>
                <DialogBody style={{ height: '500px', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input onChange={formik.handleChange}
                                value={formik.values.ptitle} size="lg" type="text" name='ptitle' label="Tên sản phẩm" />
                            {formik.errors.ptitle && formik.touched.ptitle && (
                                <p className="text-danger">{formik.errors.ptitle}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.pprice} size="lg" type="text" name='pprice' label="Giá thành" />
                            {formik.errors.pprice && formik.touched.pprice && (
                                <p className="text-danger">{formik.errors.pprice}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.pkind} size="lg" type="text" name='pkind' label="Loại" />
                            {formik.errors.pkind && formik.touched.pkind && (
                                <p className="text-danger">{formik.errors.pkind}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.pimg} size="lg" type="text" name='pimg' label="Ảnh" />
                            {formik.errors.pimg && formik.touched.pimg && (
                                <p className="text-danger">{formik.errors.pimg}</p>
                            )}





                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Lưu thông tin
                        </Button>

                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}