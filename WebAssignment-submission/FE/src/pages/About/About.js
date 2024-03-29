import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachTeamAction } from '../../redux/actions/QuanLyTeamAction';
import { layDanhSachTestimonialAction } from '../../redux/actions/QuanLyTestimonialAction';
import { layDanhSachStatisticAction } from '../../redux/actions/QuanLyStatisticAction';
import { layDanhSachServiceAction } from '../../redux/actions/QuanLyServiceAction';
import { layDanhSachAboutImgAction } from '../../redux/actions/QuanLyAboutImgAction';
export default function About() {
    const { arrTeam } = useSelector(state => state.QuanLyTeamReducer);
    const { arrTestimonial } = useSelector(state => state.QuanLyTestimonialReducer);
    const { arrStatistic } = useSelector(state => state.QuanLyStatisticReducer);
    const { arrService } = useSelector(state => state.QuanLyServiceReducer);
    const { arrImg } = useSelector(state => state.QuanLyAboutImgReducer);
    const renderTestimonial = () => {

        return arrTestimonial.slice(0, 4).map((product, index) => {

            return (
            <div key={index} className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:dark:bg-gray-900">
                    <p className="relative px-6 py-1 text-lg italic text-center dark:dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:dark:text-violet-400">
                            <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
                            <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
                        </svg>{product.content}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:dark:text-violet-400">
                            <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
                            <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
                        </svg>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:dark:bg-violet-400 dark:dark:text-gray-900">
                    <img src={product.img} alt="img" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full  dark:dark:bg-gray-700" />
                    <p className="text-xl font-semibold leadi">{product.name}</p>
                    <p className="text-sm uppercase"></p>
                </div>
            </div>)




        })
    }
    const renderTeam = () => {

        return arrTeam.slice(0, 4).map((product, index) => {

            return (<div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:dark:bg-gray-100 dark:dark:text-gray-800">
                <img alt="img" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:dark:bg-gray-500" src={product.img} />
                <div className="flex-1 my-4">
                    <p className="text-xl font-semibold leadi">{product.name}</p>
                    <p>{product.role}</p>
                </div>
                <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
                    <btn rel="noopener noreferrer" title="Email" className="dark:dark:text-gray-900 hover:dark:dark:text-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </btn>
                    <btn rel="noopener noreferrer" title="Twitter" className="dark:dark:text-gray-900 hover:dark:dark:text-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
                            <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                        </svg>
                    </btn>
                    <btn rel="noopener noreferrer" title="LinkedIn" className="dark:dark:text-gray-900 hover:dark:dark:text-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                            <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z" />
                        </svg>
                    </btn>
                    <btn rel="noopener noreferrer" title="GitHub" className="dark:dark:text-gray-900 hover:dark:dark:text-violet-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
                        </svg>
                    </btn>
                </div>
            </div>)




        })
    }
    const renderStatistic = () => {

        return arrStatistic.slice(0, 6).map((product, index) => {

            return (<div className="flex flex-col justify-start m-2 lg:m-6">
                <p className="text-4xl font-bold leadi lg:text-6xl">{product.quantity}</p>
                <p className="text-sm sm:text-base">{product.item}</p>
            </div>)




        })
    }
    const renderService = () => {

        return arrService.slice(0, 3).map((product, index) => {

            return (<div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">{product.name}</h4>
                    <p className="mt-2 dark:dark:text-gray-400">{product.description}</p>
                </div>
            </div>)




        })
    }
    const renderService2 = () => {

        return arrService.slice(3, 6).map((product, index) => {

            return (<div className="flex">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-lg font-medium leadi dark:dark:text-gray-50">{product.name}</h4>
                    <p className="mt-2 dark:dark:text-gray-400">{product.description}</p>
                </div>
            </div>)




        })
    }
    const renderImg = () => {

        return arrImg.slice(0, 4).map((product, index) => {

            return (<img alt="img" key={index} className="object-cover w-full dark:dark:bg-gray-500 aspect-square" src={product.img} />
            )




        })
    }
    const renderImg1 = () => {

        return arrImg.slice(4, 5).map((product, index) => {

            return (<img key={index} src={product.img} alt="img" className="mx-auto rounded-lg shadow-lg dark:dark:bg-gray-500" />
            )




        })
    }
    const renderImg2 = () => {

        return arrImg.slice(5, 6).map((product, index) => {

            return (<img src={product.img} key={index} alt="img" className="mx - auto rounded - lg shadow - lg dark: dark: bg - gray - 500" />
            )




        })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachTeamAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])

    useEffect(() => {
        const action = layDanhSachTestimonialAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    useEffect(() => {
        const action = layDanhSachStatisticAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    useEffect(() => {
        const action = layDanhSachServiceAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    useEffect(() => {
        const action = layDanhSachAboutImgAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])


    return (
        <div className='bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200'>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold leadi text-center sm:text-5xl dark:dark:text-gray-50 uppercase">Về Phone Store</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:dark:text-gray-400">Đam mê công nghệ và sự tiện lợi, Phone Store tự hào là điểm đến chính thức cho những người yêu thích sản phẩm của Apple.</p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracki sm:text-3xl dark:dark:text-gray-50">Phone Store - Nơi công nghệ gặp gỡ đẳng cấp </h3>
                            <p className="mt-3 text-lg dark:dark:text-gray-400"> </p>
                            <div className="mt-12 space-y-12">
                                {renderService()}
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            {renderImg1()}
                        </div>
                    </div>
                    <div>
                         <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracki sm:text-3xl dark:dark:text-gray-50">Tại sao chọn chúng tôi?</h3>
                                <div className="mt-12 space-y-12">
                                    {renderService2()}
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                {renderImg2()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    {renderStatistic()}
                </div>
            </section>

            <section className="py-6 dark:dark:bg-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                        {renderImg()}
                    </div>
                </div>
            </section>

            <section className="-my-1 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="text-xl md:text-4xl font-bold leadi text-center sm:text-5xl dark:dark:text-gray-50 uppercase">Nhận xét của khách hàng</h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                    {renderTestimonial()}
                </div>
            </section>



            <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                    <h1 className="text-xl md:text-4xl font-bold leadi text-center sm:text-5xl dark:dark:text-gray-50 uppercase">Đội ngũ phát triển trang web</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                        {renderTeam()}
                    </div>
                </div>
            </section>


        </div>
    )
}
