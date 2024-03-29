import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachGioHangAction } from "../../redux/actions/QuanLyGioHangAction";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
export default function Checkout() {
    var username = localStorage.getItem("username");
    const formik = useFormik({
        initialValues: {
            name: "",
            radio: "",
            email: "",
            card_no: "",
            billing_address: "",
            billing_state: "",
            note: "",
        },
        onSubmit: (values) => {
            console.log(values)
            const sendData = {
                name: values.name,
                email: values.email,
                billing_address: values.billing_address,
                total: totalPrice,
                username: username,
                note: values.note
            };
            axios
                .post("http://localhost/qlsvmvc/?c=order&a=save", sendData)
                .then((result) => {
                    if (result.data.Status === "Invalid") {
                        console.log("Invalid");
                    } else {
                        window.location.reload();
                    }
                });
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Không được để trống!"),
            email: Yup.string().required("Không được để trống!"),
            billing_address: Yup.string().required("Không được để trống!"),
            note: Yup.string().required("Không được để trống!"),



        }),
    });
    const history = useHistory();
    var role = localStorage.getItem("role");
    if (role !== "user") {
        history.push("/");
    }
    let formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    const dispatch = useDispatch();
    const { arrProduct } = useSelector((state) => state.GioHangReducer);
    useEffect(() => {
        const action = layDanhSachGioHangAction(username);
        dispatch(action); //dispatch function từ thunk
    }, [dispatch]);
    const [shippingFee, setShippingFee] = useState(20000); // Giả sử radio_1 là mặc định
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        if (arrProduct && arrProduct.length > 0) {
            const total = arrProduct.reduce(
                (acc, product) => acc + product.pprice * product.sl,
                0
            );
            setTotalPrice(total);
        }
    }, [arrProduct]);

    // Hàm xử lý thay đổi lựa chọn vận chuyển
    const handleShippingChange = (event) => {
        if (event.target.id === "radio_1") {
            setShippingFee(20000);
        } else if (event.target.id === "radio_2") {
            setShippingFee(40000);
        }
    };

    const renderProduct = () => {
        return arrProduct.map((product, index) => {
            return (
                <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img
                        className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                        src={product.pimg}
                        alt={product.title}
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                        <span className="font-semibold">Sản phẩm: {product.ptitle}</span>
                        <span className="float-right text-gray-400">
                            Đơn giá: {product.pprice}{" "}
                        </span>
                        <span className="float-right text-gray-400">
                            Số lượng: {product.sl}{" "}
                        </span>
                        <p className="mt-auto text-lg font-bold">
                            Thành tiền: {formatter.format(product.pprice * product.sl)}
                        </p>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
                <NavLink to="/home" className="text-2xl font-bold text-gray-800">
                    Quay về trang chủ
                </NavLink>
                <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
                    <div className="relative">
                        <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <btn className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </btn>
                                <span className="font-semibold text-gray-900">Đặt hàng</span>
                            </li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                            <li className="flex items-center space-x-3 text-left sm:space-x-4">
                                <btn className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2">
                                    2
                                </btn>
                                <span className="font-semibold text-gray-900">Vận chuyển</span>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Sản phẩm</p>
                    <p className="text-gray-400">
                        Kiểm tra các sản phẩm của bạn và chọn một phương thức vận chuyển phù
                        hợp.
                    </p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {renderProduct()}
                    </div>
                    <p className="mt-8 text-lg font-medium">Đơn vị vận chuyển:</p>
                    <form className="mt-5 grid gap-6">
                        <div className="relative">
                            <input
                                onChange={handleShippingChange}
                                className="peer hidden"
                                id="radio_1"
                                type="radio"
                                name="radio"
                                defaultChecked
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_1"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src="https://viettelpost.com.vn/wp-content/uploads/2020/03/logo-380x270.jpg"
                                    alt="Viettel Post"
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Viettel Post</span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Thời gian vận chuyển: 4-5 ngày
                                    </p>
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                onChange={handleShippingChange}
                                className="peer hidden"
                                id="radio_2"
                                type="radio"
                                name="radio"
                            />
                            <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white" />
                            <label
                                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_2"
                            >
                                <img
                                    className="w-14 object-contain"
                                    src="https://cdn.tgdd.vn/Files/2021/03/26/1338398/cach-tra-cuu-ma-van-don-j-t-express-moi-nhat-2021-202103261530077338.jpg"
                                    alt="J&T Express"
                                />
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">J&T Express</span>
                                    <p className="text-slate-500 text-sm leading-6">
                                        Thời gian vận chuyển: 2-4 ngày
                                    </p>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <form onSubmit={formik.handleSubmit}>
                        <p className="text-xl font-medium">Thanh toán</p>
                        <p className="text-gray-400">
                            Hoàn tất đơn hàng của bạn bằng cách cung cấp chi tiết thanh toán
                            của bạn.
                        </p>
                        <div className>
                            <label
                                htmlFor="email"
                                className="mt-4 mb-2 block text-sm font-medium"
                            >
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    onChange={formik.handleChange}
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formik.values.email}
                                    className="w-full rounded-md border border-gray-200 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="your.email@gmail.com"
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <p className="text-danger">{formik.errors.email}</p>
                                )}
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <label
                                htmlFor="name"
                                className="mt-4 mb-2 block text-sm font-medium"
                            >
                                Họ Và Tên
                            </label>
                            <div className="relative">
                                <input
                                    onChange={formik.handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    className="w-full rounded-md border border-gray-200 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Họ và tên"
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <p className="text-danger">{formik.errors.name}</p>
                                )}
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <label
                                htmlFor="card-no"
                                className="mt-4 mb-2 block text-sm font-medium"
                            >
                                Ghi chú
                            </label>
                            <div className="flex">
                                <div className="relative w-full ">
                                    <textarea
                                        type="text"
                                        rows={3}
                                        onChange={formik.handleChange}
                                        id="note"
                                        name="note"
                                        value={formik.values.note}
                                        className="w-full rounded-md border border-gray-200 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Ghi chú"
                                    />
                                    {formik.errors.note && formik.touched.note && (
                                        <p className="text-danger">{formik.errors.note}</p>
                                    )}
                                    <div className="pointer-events-none absolute inset-y-0 left-0 top-5  px-3">
                                        <svg
                                            className="h-4 w-4 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <label
                                htmlFor="billing-address"
                                className="mt-4 mb-2 block text-sm font-medium"
                            >
                                Địa Chỉ Nhận Hàng
                            </label>
                            <div className="flex flex-col sm:flex-row">
                                <div className="relative flex-shrink-0 sm:w-7/12">
                                    <input
                                        onChange={formik.handleChange}
                                        type="text"
                                        id="billing-address"
                                        name="billing_address"
                                        className="w-full rounded-md border border-gray-200 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Địa chỉ"
                                        value={formik.values.billing_address}
                                    />
                                    {formik.errors.billing_address &&
                                        formik.touched.billing_address && (
                                            <p className="text-danger">
                                                {formik.errors.billing_address}
                                            </p>
                                        )}
                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                        <img
                                            className="h-4 w-4 object-contain"
                                            src="https://flagpack.xyz/_nuxt/82862d96f28cd0c385b2afb862be8393.svg"
                                            alt="VietNam"
                                        />
                                    </div>
                                </div>
                                <select
                                    type="text"

                                    name="billing_state"
                                    className="w-full rounded-md border border-gray-200 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="Tp. Hồ Chí Minh">Tp. Hồ Chí Minh</option>
                                    <option value="Tp. Hồ Chí Minh">Hà Nội</option>
                                    <option value="Tp. Hồ Chí Minh">Đà Nẵng</option>
                                    <option value="An Giang">An Giang</option>
                                    <option value="Bà Rịa - Vũng Tàu">Bà Rịa - Vũng Tàu</option>
                                    <option value="Bắc Giang">Bắc Giang</option>
                                    <option value="Bắc Kạn">Bắc Kạn</option>
                                    <option value="Bạc Liêu">Bạc Liêu</option>
                                    <option value="Bắc Ninh">Bắc Ninh</option>
                                    <option value="Bến Tre">Bến Tre</option>
                                    <option value="Bình Định">Bình Định</option>
                                    <option value="Bình Dương">Bình Dương</option>
                                    <option value="Bình Phước">Bình Phước</option>
                                    <option value="Bình Thuận">Bình Thuận</option>
                                    <option value="Cà Mau">Cà Mau</option>
                                    <option value="Cao Bằng">Cao Bằng</option>
                                    <option value="Đắk Lắk">Đắk Lắk</option>
                                    <option value="Đắk Nông">Đắk Nông</option>
                                    <option value="Điện Biên">Điện Biên</option>
                                    <option value="Đồng Nai">Đồng Nai</option>
                                    <option value="Đồng Tháp">Đồng Tháp</option>
                                    <option value="Gia Lai">Gia Lai</option>
                                    <option value="Hà Giang">Hà Giang</option>
                                    <option value="Hà Nam">Hà Nam</option>
                                    <option value="Hà Tĩnh">Hà Tĩnh</option>
                                    <option value="Hải Dương">Hải Dương</option>
                                    <option value="Hải Phòng">Hải Phòng</option>
                                    <option value="Hậu Giang">Hậu Giang</option>
                                    <option value="Hòa Bình">Hòa Bình</option>
                                    <option value="Hưng Yên">Hưng Yên</option>
                                    <option value="Khánh Hòa">Khánh Hòa</option>
                                    <option value="Kiên Giang">Kiên Giang</option>
                                    <option value="Kon Tum">Kon Tum</option>
                                    <option value="Lai Châu">Lai Châu</option>
                                    <option value="Lâm Đồng">Lâm Đồng</option>
                                    <option value="Lạng Sơn">Lạng Sơn</option>
                                    <option value="Lào Cai">Lào Cai</option>
                                    <option value="Long An">Long An</option>
                                    <option value="Nam Định">Nam Định</option>
                                    <option value="Nghệ An">Nghệ An</option>
                                    <option value="Ninh Bình">Ninh Bình</option>
                                    <option value="Ninh Thuận">Ninh Thuận</option>
                                    <option value="Phú Thọ">Phú Thọ</option>
                                    <option value="Quảng Bình">Quảng Bình</option>
                                    <option value="Quảng Nam">Quảng Nam</option>
                                    <option value="Quảng Ngãi">Quảng Ngãi</option>
                                    <option value="Quảng Ninh">Quảng Ninh</option>
                                    <option value="Quảng Trị">Quảng Trị</option>
                                    <option value="Sóc Trăng">Sóc Trăng</option>
                                    <option value="Sơn La">Sơn La</option>
                                    <option value="Tây Ninh">Tây Ninh</option>
                                    <option value="Thái Bình">Thái Bình</option>
                                    <option value="Thái Nguyên">Thái Nguyên</option>
                                    <option value="Thanh Hóa">Thanh Hóa</option>
                                    <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                                    <option value="Tiền Giang">Tiền Giang</option>
                                    <option value="Trà Vinh">Trà Vinh</option>
                                    <option value="Tuyên Quang">Tuyên Quang</option>
                                    <option value="Vĩnh Long">Vĩnh Long</option>
                                    <option value="Vĩnh Phúc">Vĩnh Phúc</option>
                                    <option value="Yên Bái">Yên Bái</option>
                                </select>
                            </div>
                            {/* Total */}
                            <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">
                                        Tổng tiền hàng
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {formatter.format(totalPrice)}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-gray-900">
                                        Phí vận chuyển{" "}
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        {formatter.format(shippingFee)}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                    Tổng thanh toán
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                    {" "}
                                    {formatter.format(
                                        totalPrice + (totalPrice > 0 ? shippingFee : 0)
                                    )}
                                </p>
                            </div>
                        </div>
                        <input
                            type="submit"
                            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
                            value="Đặt hàng"


                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
