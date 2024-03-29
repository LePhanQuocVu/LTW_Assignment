import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyCommentNewsService extends baseService {





    layDanhSachCommentNews = (id) => {

        return this.get(`http://localhost/qlsvmvc/?c=commentnews&a=list&search=${id}`)
    }
    xoaCommentNews = (id) => {

        return this.delete(`http://localhost/qlsvmvc/?c=commentnews&a=delete&id=${id}`)
    }

}



export const quanLyCommentNewsService = new QuanLyCommentNewsService();