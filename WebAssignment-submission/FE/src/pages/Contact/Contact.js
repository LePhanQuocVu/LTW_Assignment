import React, { useEffect } from 'react'
import { useFormik } from "formik";
import { layThongTinChiTietDiaChi } from "../../redux/actions/QuanLyDiaChiAction";
import { layDanhSachContactPageAction } from "../../redux/actions/QuanLyContactPageAction";
import axios from "axios";
import * as Yup from "yup";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import {Button, Input, Textarea} from '@material-tailwind/react'
import TextArea from 'antd/lib/input/TextArea';

export default function Contact() {
    const { arrProduct } = useSelector(state => state.QuanLyContactPageReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const action = layDanhSachContactPageAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    useEffect(() => {
        //Lấy thông tin param từ url


        dispatch(layThongTinChiTietDiaChi(1));

    }, []);
    const renderContact = () => {

        return arrProduct.slice(0, 6).map((product, index) => {

            return (<div key={index} className="flex flex-col items-center p-4  dark:dark:bg-gray-900 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <h3 className="my-3 text-2xl font-semibold dark:dark:text-gray-400 text-center">{product.header}</h3>
                <div className="space-y-1 leadi">
                    <p>{product.content}</p>

                </div>
            </div>)
        })
    }
    const productDetail = useSelector(
        (state) => state.QuanLyDiaChiReducer.productDetail
    );

    var role = localStorage.getItem('role');
    const formik = useFormik({
        initialValues: {
            name: "",
            message: "",
            email: "",
        },
        onSubmit: (values) => {
            if (role === "admin") {
                toast.error("Bạn không thể làm điều này!");
            } else {
                const sendData = {
                    name: values.name,
                    message: values.message,
                    email: values.email,

                };

                axios
                    .post("http://localhost/qlsvmvc/?c=contact&a=save", sendData)
                    .then((result) => {
                        if (result.data.Status === "Invalid") {
                            console.log("Invalid");
                        } else {
                            window.location.reload();
                        }
                    });
            }

        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống!"),
            message: Yup.string().required("Không được để trống!"),
            email: Yup.string().required("Không được để trống!"),
        }),
    });
    return (
        <div className=" bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200 h-fit">
            <div className=" dark:dark:bg-gray-800 dark:dark:text-gray-100">
            <section className="mx-4 md:mx-8 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container mx-auto p-4 space-y-2 text-center">
                    <h2 className="text-5xl font-bold dark:dark:text-gray-400">Liên hệ</h2>
                    <p className="dark:dark:text-gray-400">Chúng tôi tại Phone Store luôn sẵn lòng lắng nghe và phản hồi mọi yêu cầu của bạn. Dù bạn cần hỗ trợ kỹ thuật, muốn tìm hiểu thêm về sản phẩm, hay có bất kỳ thắc mắc nào về dịch vụ của chúng tôi, đội ngũ chuyên nghiệp của chúng tôi sẽ giúp bạn giải quyết mọi vấn đề.</p>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {renderContact()}
                </div>
            </section>
            <div class="h-1 mx-auto bg-gray-100 border-0 rounded my-5" style={{width:'30%'}}></div>
            <section className=" py-8">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold dark:dark:text-gray-400">Liên hệ chúng</h1>
                        <p className="pt-2 pb-4">Điền vào mẫu đơn để bắt đầu cuộc trò chuyện</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span>{productDetail[0]?.address}</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <span>{productDetail[0]?.phone}</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                                <span>{productDetail[0]?.email}</span>
                            </p>
                        </div>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                        <label className="block">
                            <span className="mb-1">Họ và tên</span>
                            <Input onChange={formik.handleChange}
                                name="name" value={formik.values.name} type="text" placeholder="Trần Văn A" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
                            {formik.errors.name && formik.touched.name && (
                                <p className="text-danger">{formik.errors.name}</p>
                            )}
                        </label>
                        <label className="block">
                            <span className="mb-1">Địa chỉ email</span>
                            <Input onChange={formik.handleChange}
                                name="email" value={formik.values.email} type="email" placeholder="trana@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-danger">{formik.errors.email}</p>
                            )}
                        </label>
                        <label className="block">
                            <span className="mb-1">Lời nhắn</span>
                            <Textarea onChange={formik.handleChange}
                                name="message"
                                value={formik.values.message} rows={3} className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-800 text-white" defaultValue={""} />
                            {formik.errors.message && formik.touched.message && (
                                <p className="text-danger">{formik.errors.message}</p>
                            )}
                        </label>
                        <Button type="submit" className=" px-8 py-3 font-semibold rounded text-white mr-2">GỬI</Button>
                    </form>
                </div>
            </section>



        </div>
        </div>
    )
}
