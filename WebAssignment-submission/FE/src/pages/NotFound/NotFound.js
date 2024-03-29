import React from 'react'
import styled from "../NotFound/style.module.css"
import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div><section className={styled.page_404}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 flex justify-center">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className={styled.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className={styled.contant_box_404}>
                                <h3 className={styled.h2}>
                                    Trông bạn có vẻ đã bị lạc!
                                </h3>
                                <p>Trang bạn đang tìm kiếm không có sẵn!</p>

                                <NavLink to="/home" className={styled.link_404}>Quay về trang chủ</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>

    )
}
