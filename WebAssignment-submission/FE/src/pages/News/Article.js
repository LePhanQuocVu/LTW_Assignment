import { NavLink } from 'react-router-dom';
import React, { useEffect , useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import './article.css'
import { history } from '../../App';
import { layDanhSachCommentNewsAction, xoaCommentNewsAction } from "../../redux/actions/QuanLyCommentNewsAction";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from 'react-toastify'

import { layDanhSachNewsAction } from '../../redux/actions/QuanLyNewsAction';
import { useParams } from "react-router-dom";

// import { useParams } from "react-router-dom";
import { layThongTinChiTietNews } from "../../redux/actions/QuanLyNewsAction";
export default function Article(props) {
    var role = localStorage.getItem('role');
    var username = localStorage.getItem("username");
    var avatar = localStorage.getItem("image");

    const { id } = useParams();
    const dispatch = useDispatch();
    const productDetail = useSelector(
        (state) => state.QuanLyNewsReducer.productDetail
    );
    const { arrProduct } = useSelector(state => state.QuanLyNewsReducer);
    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: (values) => {
            if (role !== "user") {
                toast.error("Vui lòng đăng nhập để bình luận!");
            } else {
                const sendData = {
                    comment: values.comment,
                    newsid: id,
                    username: username,
                };

                axios
                    .post("http://localhost/qlsvmvc/?c=commentnews&a=save", sendData)
                    .then((result) => {
                        if (result.data.Status === "Invalid") {
                        } else {
                            window.location.reload();
                        }
                    });
            }

        },
        validationSchema: Yup.object({
            comment: Yup.string().required("Không được để trống!"),
        }),
    });
    useEffect(() => {
        const action = layDanhSachNewsAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    // const { id } = useParams();

    useEffect(() => {
        //Lấy thông tin param từ url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietNews(id));
        const action = layDanhSachCommentNewsAction(id);
        dispatch(action); //dispatch function từ thunk

    }, []);
    const { arrComment } = useSelector((state) => state.QuanLyCommentNewsReducer);
    const [avatarArr,setAvatar] = useState(null);
    const renderComment = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrComment.map((comment, index) => {
            axios
            .post("http://localhost/qlsvmvc/?c=User&a=getImg", {username: comment.username})
            .then((result) => {
                console.log(result.data)
                setAvatar(result.data)
            });
            return (
                <div className="border rounded-md p-3 ml-3 my-3">
                    <div className="flex gap-3 items-center">

                        <img
                            src={avatarArr}
                            className="object-cover w-8 h-8 rounded-full 
    border-2 border-emerald-400  shadow-emerald-400
    "
                            alt="1"
                        />
                        <h3 className="font-bold">{comment.username}</h3>

                    </div>
                    <div class="text-gray-700 text-sm mb-4 mt-2">Đăng vào {comment.time}</div>
                    <p className="text-gray-600 mt-2">{comment.comment}</p>
                    {(role === "admin" || comment.username === username) && (
                        <btn
                            onClick={() => {
                                const action = xoaCommentNewsAction(comment.id);
                                dispatch(action); //dispatch function từ thunk
                                window.location.reload();
                            }}
                            className="text-gray-500 hover:text-gray-700">
                            <i class="fa fa-trash-alt"></i> Xóa
                        </btn>
                    )}
                </div>
            );
        });
    };
    const rendersideNews = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrProduct.slice(7, 10).map((product, index) => {

            return (
                <div className="sidebar-img flex mb-6 py-4">
                    <img className="w-2/5 rounded-md mx-4" src={product.img} alt={product.title}></img>
                    <btn onClick={() => { history.push(`/article/${product.id}`); window.location.reload(); }}  >                   <span className="text-base sm:text-sm sm:leading-none hover:cursor-pointer">{product.description}</span>
                    </btn>
                </div>

            )




        })
    }
    const renderbottomNews = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrProduct.slice(4, 7).map((product, index) => {

            return (

                <div className="item-qc flex flex-row mx-40  divide-y divide-slate-200">
                    <span className="w-2/5 h-64"> <img className="rounded-lg w-96  " src={product.img} alt={product.title}></img></span>
                    <div className="w-3/5 py-2 md:pl-10 flex flex-col">
                        <btn onClick={() => { history.push(`/article/${product.id}`); window.location.reload(); }}  >                     <span className=" text-slate-400 text-3xl hover:cursor-pointer hover:text-blue-600 md:leading-none"><btn>{product.title} </btn></span>
                        </btn>
                        <span className="text-sm py-2 small-text">10 bài viết</span>
                        <span className="text-sm"> {product.author} <span className="text-sm text-slate-400 mx-2">{product.date}</span></span>
                    </div>
                </div>

            )




        })
    }

    return (
        <div className="main">
            {/* content */}

            <div className="main_content1 container mx-auto ">
                {/* ..... */}
                <div className="mx-auto all-container flex relative">
                    <div className="sidebar-item flex flex-col pt-10 px-10 bg-white ">
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-facebook"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-square-instagram"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-twitter"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-brands fa-linkedin"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-solid fa-envelope-open-text"></i></span>
                        <span className="mb-5 flex items-center justify-center w-10 h-10 rounded-full bg-white text-slate-400   text-xl transition duration-300 ease-in-out border-2 border-gray-300"><i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div className="content mx-10 w-4/5">
                        <div className="header_content flex justify-between pt-4">
                            <div className="article flex items-center justify-center ">
                                <NavLink to="/news"> <h3 className="text-3xl font-bold mr-2 ">Tin tức</h3></NavLink> <span className="text-xl text-slate-400">   &gt; Điện thoại</span>
                            </div>
                            <div className="date px-4 py-2">
                                <p className="text-lg text-slate-400">{productDetail[0]?.date}(GMT+7)</p>
                            </div>
                        </div>
                        <div className="source">
                            <h1 className="title text-lg sm:text-3xl pt-8 px-2 font-bold underline hover:cursor-pointer hover:text-slate-400">{productDetail[0]?.title}</h1>
                            <p className="text-base px-2 py-2 mb-10 title-article sm:text=">Theo báo cáo của 91Mobiles, công ty đang lên kế hoạch cho ra mắt C67 5G tại Ấn Độ vào đầu tháng sau. Gần đây, thiết bị đã được phát hiện được chứng nhận trên nền tảng TDRA của UAE, điều này cho thấy rằng việc ra mắt sắp diễn ra.</p>
                            <span> <img className="rounded-xl hover: cursor-pointer my-2" src={productDetail[0]?.img} alt={productDetail[0]?.title}></img></span>
                        </div>
                        <div>
                            <p className="text-lg  px-2 py-2">{productDetail[0]?.content}</p>

                        </div>
                        <div className="w-full bg-white rounded-lg border p-2 my-4 mx-6">
                            <h3 className="font-bold">Bình luận</h3>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="flex flex-col">{renderComment()}</div>
                                <div className="w-full px-3 my-2">
                                    <div className="flex gap-3 items-center mb-2 ml-3">
                                        <img
                                            src={avatar}
                                            className="object-cover w-8 h-8 rounded-full 
    border-2 border-emerald-400  shadow-emerald-400
    "
                                            alt="1"
                                        />
                                        <h3 className="font-bold">{username}</h3>
                                    </div>
                                    <textarea
                                        className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                                        name="comment"
                                        placeholder="Để lại bình luận của bạn"

                                        onChange={formik.handleChange}
                                        value={formik.values.comment}
                                    />
                                    {formik.errors.comment && formik.touched.comment && (
                                        <p className="text-danger">{formik.errors.comment}</p>
                                    )}
                                </div>
                                <div className="w-full flex justify-end px-3">
                                    <input
                                        type="submit"
                                        className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
                                        defaultValue="Post Comment"
                                        value="Đăng"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-qc w-2/5 ">

                        <img className="w-full mt-20" src="https://cdn.tgdd.vn/2023/11/banner/380x215-380x215.png" alt="Vivo"></img>
                        <div className="header-sidebar ">
                            <p className="font-bold my-4 text-xl">Xem nhiều hơn tại đây!!!!....</p>
                        </div>

                        {rendersideNews()}




                    </div>
                </div>
                {/* ...... */}


                <div className="end_content container mt-20">





                    {renderbottomNews()}

                </div>


            </div>

        </div >
    );
}