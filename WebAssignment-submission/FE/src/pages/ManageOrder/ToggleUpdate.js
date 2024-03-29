import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { useParams } from "react-router";
export default function ToggleUpdate(props) {
    const [open, setOpen] = React.useState(false);
    const values = props.values;
    const handleOpen = () => setOpen(!open);
    const [status, setStauts] = useState(values.row.status);
    const handleStatusChange = (e) => setStauts(e.target.value);
    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <EditIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
                <DialogHeader>Chỉnh sửa tình trạng đơn hàng {values.row.id}</DialogHeader>
                <DialogBody style={{ height: 'fit-content', overflow: 'auto', scrollbarWidth: '0px' }} className="!overflow-x-hidden !overflow-y-visible">
                    <form className="w-100 max-w-screen-lg sm:w-96" method="post">
                        <div className="mb-1 flex flex-col gap-3">
                            <Input size="lg" type='text' name='status' label="Tình trạng" value={status} onChange={(e) => handleStatusChange(e)} required />
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