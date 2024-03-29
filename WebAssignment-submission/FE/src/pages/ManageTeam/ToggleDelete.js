import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { xoaTeamAction } from '../../redux/actions/QuanLyTeamAction';
import { useDispatch } from 'react-redux';
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
                <DialogHeader className="flex justify-center">Xóa tài khoản</DialogHeader>
                <DialogBody className="flex justify-center text-center flex-nowrap">
                    Bạn có chắc chắn muốn xóa thành viên
                    <span className="mx-1" style={{ color: 'red' }}>
                        {values.row.name}
                    </span>
                    không?
                </DialogBody>
                <DialogFooter className="flex justify-evenly ">
                    <Button
                        variant="text"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Không</span>
                    </Button>
                    <Button variant="gradient" onClick={() => {
                        const action = xoaTeamAction(values.id);
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