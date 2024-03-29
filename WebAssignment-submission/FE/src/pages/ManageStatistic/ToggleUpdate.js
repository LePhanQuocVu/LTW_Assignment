import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const valuess = props.values;
    const handleOpen = () => setOpen(!open);

    const formik = useFormik({
        initialValues: {
            id: valuess.row.id,
            quantity: valuess.row.quantity,
            item: valuess.row.item,



        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                quantity: values.quantity,
                item: values.item,


            };

            axios
                .put("http://localhost/qlsvmvc/?c=statistic&a=update", sendData)
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
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa thống kê</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">

                            <Input onChange={formik.handleChange}
                                value={formik.values.quantity} size="lg" type="text" name='quantity' label="Số lượng" />
                            {formik.errors.quantity && formik.touched.quantity && (
                                <p className="text-danger">{formik.errors.quantity}</p>
                            )}
                            <Input onChange={formik.handleChange}
                                value={formik.values.item} size="lg" type='text' name='item' label="Tên" />
                            {formik.errors.item && formik.touched.item && (
                                <p className="text-danger">{formik.errors.item}</p>
                            )}
                        </div>
                        <Button className="mt-6" type="submit" fullWidth>
                            Lưu thay đổi
                        </Button>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}