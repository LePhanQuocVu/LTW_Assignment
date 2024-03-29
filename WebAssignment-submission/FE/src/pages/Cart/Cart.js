import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { xoaDanhSachGioHangAction } from '../../redux/actions/QuanLyGioHangAction';
import { congGioHangAction, truGioHangAction } from '../../redux/actions/QuanLyGioHangAction';
import { layDanhSachGioHangAction } from '../../redux/actions/QuanLyGioHangAction';
import { useHistory } from 'react-router-dom';

export default function Cart() {
    var role = localStorage.getItem('role');
    const history = useHistory();
    if (role !== "user") {
        history.push("/");

    }

    var username = localStorage.getItem('username');
    const dispatch = useDispatch();
    const { arrProduct } = useSelector(state => state.GioHangReducer);
    useEffect(() => {
        const action = layDanhSachGioHangAction(username);
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    let formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });

    const [isProcessing, setIsProcessing] = useState(false);

    const handleIncrement = (product_id, username) => {
        window.location.reload();
        if (!isProcessing) {
            window.location.reload();
            setIsProcessing(true);

            const action = congGioHangAction(product_id, username);

            dispatch(action)
                .then(() => {
                    window.location.reload();
                    setIsProcessing(false);

                })
                .catch(() => {

                    setIsProcessing(false); // Xử lý trường hợp lỗi

                });
        }
    };
    const [isProcessing2, setIsProcessing2] = useState(false);

    const handleDecreasement = (product_id, username) => {
        window.location.reload();
        if (!isProcessing2) {
            window.location.reload();
            setIsProcessing2(true);
            const action = truGioHangAction(product_id, username);

            dispatch(action)
                .then(() => {
                    setIsProcessing2(false);

                })
                .catch(() => {
                    setIsProcessing2(false); // Xử lý trường hợp lỗi
                });
        }
    };

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        if (arrProduct && arrProduct.length > 0) {
            const total = arrProduct.reduce((acc, product) => acc + (product.pprice * product.sl), 0);
            setTotalPrice(total);
        }
    }, [arrProduct]);
    const renderOrder = () => {
        return arrProduct.map((product, index) => {

            return (
                <div key={index} className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">{product.ptitle}</span>
                    <span className="font-semibold text-sm">{formatter.format(product.pprice * product.sl)}</span>
                </div>
            )
        })

    }


    const renderProduct = () => {


        return arrProduct.map((product, index) => {

            return (

                <div key={index} className="flex flex-wrap items-center hover:bg-gray-100 -mx-8 px-6 py-5">

                    <div className="flex md:w-2/5 w-2/4"> {/* product */}
                        <div className="w-20">
                            <img className="h-24 object-contain" src={product.pimg} alt={product.ptitle} />
                        </div>
                        <div className="flex flex-wrap flex-col justify-between ml-4 flex-grow w-2/4 line-clamp-2">
                            <span className="font-bold text-sm">{product.ptitle}</span>
                            <span className="text-red-500 text-xs">Apple</span>
                            <btn onClick={() => {
                                const action = xoaDanhSachGioHangAction(product.p_id, username);
                                dispatch(action); //dispatch function từ thunk
                            }} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Xóa</btn>
                        </div>
                    </div>
                    <div className="flex justify-center md:w-1/5 w-2/4">
                        <btn onClick={() => handleDecreasement(product.p_id, username)}
                            disabled={isProcessing2}

                        >
                            {isProcessing2 ? "" : <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>}</btn>



                        <input className="bg-gray-50 border border-gray-300 w-16 text-center text-gray-700 font-semibold outline-none focus:border-indigo-500 h-100 p-1.5" type="number" min="1" defaultValue={product.sl} />
                        <btn onClick={() => handleIncrement(product.p_id, username)}
                            disabled={isProcessing}

                        >
                            {isProcessing ? "" : <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                            </svg>}</btn>
                    </div>
                    <span className="text-center w-full md:w-1/5 font-semibold text-sm flex justify-between md:justify-center"><label className='inline-block m-0 md:hidden'>Đơn giá</label>{formatter.format(product.pprice)}</span>
                    <span className="text-center w-full md:w-1/5 font-semibold text-sm flex justify-between md:justify-center"><label className='inline-block m-0 md:hidden'>Tổng</label>{formatter.format(product.pprice * product.sl)}</span>
                </div>


            )




        })
    }


    const renderSoLuong = () => {

        return arrProduct.reduce((tongSoLuong, spGH, index) => {
            return tongSoLuong += parseInt(spGH.sl);

        }, 0)


    }

    return (



        <div className="bg-gray-100">
            <div className="container mx-auto mt-10">
                <div className="flex flex-wrap shadow-md my-10">
                    <div className="w-full md:w-3/4 bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Giỏ hàng</h1>
                            <h2 className="font-semibold text-2xl">{renderSoLuong()} Sản phẩm</h2>
                        </div>
                        <div className="mt-10 mb-5 hidden md:flex">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Chi tiết sản phẩm</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Giá</h3>
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Tổng</h3>
                        </div>
                        {renderProduct()}

                        <NavLink to="/home" className="flex  fill-current font-semibold text-dark text-sm mt-10">
                            <svg className="text-dark fill-current mr-2  w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296" fill="#000000" />
                            </svg>                            Tiếp tục mua hàng
                        </NavLink>
                    </div>
                    <div id="summary" className="w-full md:w-1/4 px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Tổng đơn hàng</h1>
                        {renderOrder()}

                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Tổng tiền</span>
                                <span>{formatter.format(totalPrice)}</span>
                            </div>
                            <button onClick={() => { history.push('/checkout') }} className="rounded bg-black font-semibold py-3 text-sm text-white uppercase w-full transition hover:bg-black hover:bg-opacity-80">Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
