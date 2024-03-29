
import React, { useState } from 'react'
import axios from 'axios';
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Login(props) {

    const history = useHistory();

    const [data, setData] = useState({
        taiKhoan: "",
        matKhau: "",



    });
    const handleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value });


    }

    const submitForm = (e) => {

        e.preventDefault();
        const sendData = {
            taiKhoan: data.taiKhoan,
            matKhau: data.matKhau


        }
        axios.post("http://localhost/qlsvmvc/login.php", sendData).then((result) => {

            if (result.data.Status === '200') {

                // window.localStorage.setItem('username', result.data.username);
                localStorage.setItem("username", result.data.username);
                localStorage.setItem("role", result.data.role);
                localStorage.setItem("image", result.data.image);

                var role = localStorage.getItem('role');
                if (role === "user") {
                    history.push('/home');
                } else if (role === "admin") {
                    history.push('/home');
                }


            } else {

                toast.error("Tên đăng nhập hoặc mật khẩu sai!");

            }

        });

    }




    return (
        <form onSubmit={submitForm} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <NavLink to="/home" className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">

                        Phone Store</NavLink>
                </div>
            </div>
            <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
      xl:text-bold">Đăng nhập</h2>
                <div className="mt-12">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài khoản</div>
                            <input required name="taiKhoan" onChange={handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào tài khoản" />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Mật khẩu
                                </div>
                                <div>

                                </div>
                            </div>
                            <input required type="password" name="matKhau" onChange={handleChange} className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" placeholder="Nhập vào mật khẩu" />
                        </div>
                        <div className="mt-10">
                            <input type='submit' value=" Đăng nhập" className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                  font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                  shadow-lg"/>


                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Bạn chưa có tài khoản ? <NavLink to="register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng ký</NavLink>
                    </div>
                </div>
            </div>
        </form>
    )
}