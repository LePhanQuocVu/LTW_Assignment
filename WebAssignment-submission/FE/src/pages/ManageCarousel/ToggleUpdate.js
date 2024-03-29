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
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const valuess = props.values;
    const handleOpen = () => setOpen(!open);

    const formik = useFormik({
        initialValues: {
            id: valuess.row.id,
            hinhAnh: valuess.row.hinhAnh,


        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                hinhAnh: values.hinhAnh,

            };

            axios
                .put("http://localhost/qlsvmvc/?c=carousel&a=update", sendData)
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
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa quảng cáo</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto' }}>
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