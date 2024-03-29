import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';

import { xoaCarouselAction } from '../../redux/actions/QuanLyCarouselAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";
export default function ToggleDelete(props) {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const values = props.values;
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <IconButton onClick={handleOpen} style={{ padding: '0', height: 'fit-content', alignSelf: 'center' }}>
                <DeleteIcon />
            </IconButton>
            <Dialog open={open} size="xs" handler={handleOpen}>
                <DialogHeader className="flex justify-center">Xóa quảng cáo</DialogHeader>
                <DialogBody>
                    <span className="flex justify-center text-center">Bạn có chắc chắn muốn xóa quảng cáo không?</span>
                    {
                        <div className="userItem" style={{ height: '300px' }}>
                            <img src={values.row.img} className="imgItem object-contain h-100 w-100 p-2" />
                        </div>
                    }
                </DialogBody>
                <DialogFooter className="flex justify-evenly">
                    <Button
                        variant="text"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Không</span>
                    </Button>
                    <Button variant="gradient" onClick={() => {
                        const action = xoaCarouselAction(values.id);
                        dispatch(action);
                        handleOpen();
                        window.location.reload();
                    }}>
                        <span>Có</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}