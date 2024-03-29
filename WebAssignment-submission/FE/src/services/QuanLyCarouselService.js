import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyCarouselService extends baseService {





    layDanhSachCarousel = () => {

        return this.get(`http://localhost/qlsvmvc/?c=carousel&a=list`)
    }
    xoaCarousel = (id) => {

        return this.delete(`http://localhost/qlsvmvc/?c=carousel&a=delete&id=${id}`)
    }

}



export const quanLyCarouselService = new QuanLyCarouselService();