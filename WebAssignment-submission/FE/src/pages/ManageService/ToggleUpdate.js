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
    Textarea
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
            name: valuess.row.name,
            description: valuess.row.description,


        },
        onSubmit: (values) => {

            const sendData = {
                id: valuess.row.id,
                name: values.name,
                description: values.description,


            };

            axios
                .put("http://localhost/qlsvmvc/?c=service&a=update", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                    } else {
                        window.location.reload();
                    }
                });


        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống!"),
            description: Yup.string().required("Không được để trống!"),


        }),
    });
    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa dịch vụ</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form onSubmit={formik.handleSubmit} className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">

                            <Input onChange={formik.handleChange}
                                value={formik.values.name} size="lg" type="text" name='name' label="Tiêu đề" />
                            {formik.errors.name && formik.touched.name && (
                                <p className="text-danger">{formik.errors.name}</p>
                            )}
                            <Textarea onChange={formik.handleChange}
                                value={formik.values.description} size="lg" type="text" name='description' label="Mô tả" />
                            {formik.errors.description && formik.touched.description && (
                                <p className="text-danger">{formik.errors.description}</p>
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