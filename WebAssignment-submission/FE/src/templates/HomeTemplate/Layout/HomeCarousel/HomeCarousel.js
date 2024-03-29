import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachCarouselAction } from '../../../../redux/actions/QuanLyCarouselAction';
import './HomeCarousel.css';


export default function HomeCarousel(props) {
    const { arrProduct } = useSelector(state => state.CarouselReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachCarouselAction();
        dispatch(action);
    }, [dispatch])
    const renderImg = () => {
    return arrProduct.map((item, index) => {
        var coursel_img = {
        backgroundImage:`url(${item.hinhAnh})`,       
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundAtachment: 'fixed'
        }
        return (
        <div key={index}>
            <div className='content_carousel' style={coursel_img}></div>
        </div>
        )
    })
    }

    return (

        <Carousel effect="fade" style={{ width: '100%', padding: 0, margin: 0 }} 
         autoplay={true} autoplaySpeed={3000} infinite easing
        >            
        {renderImg()}
        </Carousel>
    )
}