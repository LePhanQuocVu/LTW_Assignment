import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachNewsAction } from '../../redux/actions/QuanLyNewsAction';
import { Button } from '@material-tailwind/react';
export default function News() {
    const [displayCount, setDisplayCount] = useState(6);
    const { arrProduct } = useSelector(state => state.QuanLyNewsReducer);
    const loadMoreArticles = () => {
        setDisplayCount(prevCount => prevCount + 6); // Load 6 more articles
    };
    const renderNews = () => {
        // return arrFilm.slice(0, 12).map((phim, index) => {
        return arrProduct.slice(0, displayCount).map((product, index) => {

            return (
                <NavLink
                key={index}
                to={`/article/${product.id}`}
                className="flex flex-col max-w-sm mx-auto group hover:no-underline focus:no-underline dark:dark:bg-gray-900"
                >
                <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:dark:bg-gray-500"
                    src={product.img}
                    alt={product.title}
                />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400 line-clamp-2">
                    {product.title}
                    </h3>
                    <span className="text-xs dark:dark:text-gray-600">{product.date}</span>
                    <p className="dark:dark:text-gray-400 line-clamp-5">{product.content}</p>
                </div>
                </NavLink>

            )




        })
    }
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachNewsAction();
        dispatch(action); //dispatch function từ thunk



    }, [dispatch])
    return (
        <div className='bg-white/10 backdrop-blur-md shadow-lg rounded-lg border border-gray-200'>
            <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 pt-1">

                <div className="space-y-2 text-center">
                    <h2 style={{ fontSize: '50px', marginTop: '50px' }} className="text-3xl font-bold dark:dark:text-gray-400">Tin tức</h2>
                    <p className="font-serif text-sm dark:text-gray-400"></p>
                </div>

                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <NavLink to='/article/1' className="flex flex-col">
                        <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:dark:bg-gray-900">
                            <img src="https://images.indianexpress.com/2023/12/ios-17-point-2.jpg?w=640" alt="first" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:dark:bg-gray-500" />
                            <div className="p-6 space-y-2 lg:col-span-5">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline dark:dark:text-gray-400">Khám Phá iPhone 14: Đột Phá Công Nghệ và Thiết Kế Mới</h3>
                                <span className="text-xs dark:dark:text-gray-600"> 1 Tháng 10, 2023</span>
                                <p className="dark:dark:text-gray-400">Chào mừng bạn đến với bản tin mới nhất của Phone Store, nơi chúng tôi chia sẻ thông tin độc quyền về những đột phá công nghệ từ Apple. Hãy cùng chúng tôi khám phá iPhone 14 - thiết bị mà Apple tuyên bố là bước tiến lớn nhất trong lịch sử iPhone. Từ hệ thống camera tiên tiến cho đến vi xử lý mạnh mẽ, iPhone 14 không chỉ là một chiếc điện thoại thông minh, nó là một trung tâm giải trí di động.</p>
                            </div>
                        </a>
                    </NavLink>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {renderNews()}
                    </div>
                    <div className="flex justify-center">
                        {displayCount < arrProduct.length && (
                        <Button onClick={loadMoreArticles} type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:dark:bg-gray-900 dark:dark:text-gray-400">Thêm ...</Button>)}
                    </div>
                </div>
            </section>


        </div>
    )
}
