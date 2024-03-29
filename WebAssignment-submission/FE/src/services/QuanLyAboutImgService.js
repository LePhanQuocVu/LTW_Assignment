import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyAboutImgService extends baseService {





    layDanhSachAboutImg = () => {

        return this.get(`http://localhost/qlsvmvc/?c=aboutimg&a=list`)
    }
    xoaAboutImg = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=aboutimg&a=delete&id=${id}`)

    }
}



export const quanLyAboutImgService = new QuanLyAboutImgService();