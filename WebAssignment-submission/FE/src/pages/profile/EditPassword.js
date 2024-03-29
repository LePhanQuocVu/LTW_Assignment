import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


import {
    Button,
    Dialog,
    Card,
    CardBody,
    Typography,
    Input,
} from "@material-tailwind/react";
import { layThongTinChiTietUser } from "../../redux/actions/QuanLyUserAction";


export default function EditPassword() {
    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");


    const dispatch = useDispatch();


    const UserDetail = useSelector(
        (state) => state.QuanLyUserReducer.productDetail
    );
    useEffect(() => {
        //Lấy thông tin param từ url




        dispatch(layThongTinChiTietUser(username));


    }, []);


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [oldPass, setOldPass] = useState();
    const [newPass, setNewPass] = useState();
    const [confirmPass, setConfirmPass] = useState();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(oldPass);
        axios
            .post("http://localhost/qlsvmvc/?c=User&a=updatePass", {
                username: username,
                oldPass: oldPass,
                newPass: newPass,
            })
            .then((res) => {
                if (res.data) {
                    toast.success("Update Password successfully!!!", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
                else {
                    toast.warning("Update failed, Your password is incorrect!!!", {
                        position: toast.POSITION.TOP_CENTER,
                    });
                }


            });
    }


    return (
        <>
            <Button className="text-white bg-dark rounded py-2" onClick={handleOpen}>Thay đổi mật khẩu</Button>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem] p-2">
                    <CardBody className="flex flex-col gap-4">
                        <Typography
                            variant="h5"
                            color="blue-gray"
                            className="text-center w-fit"
                        >
                            Thay đổi mật khẩu
                        </Typography>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="grid grid-cols-1 gap-y-4">
                                <Input
                                    type="password"
                                    size="lg"
                                    label="Mật khẩu"
                                    name="oldPass"
                                    value={oldPass}
                                    onChange={(e) => setOldPass(e.target.value)}
                                />
                                <Input
                                    type="password"
                                    size="lg"
                                    label="Mật khẩu mới"
                                    name="newPass"
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                />
                                <Input
                                    type="password"
                                    size="lg"
                                    label="Xác nhận mật khẩu mới"
                                    name="confirmPass"
                                    value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                />
                                <Button variant="gradient" type="submit" onClick={handleOpen} fullWidth>
                                    Xác nhận
                                </Button>
                            </div>
                        </form>
                        {/* <ToastContainer/>; */}
                    </CardBody>
                </Card>
            </Dialog>
        </>
    );
}



