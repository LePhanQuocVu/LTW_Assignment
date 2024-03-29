import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyStatisticService extends baseService {




    layDanhSachStatistic = () => {
        return this.get(`http://localhost/qlsvmvc/?c=statistic&a=list`);
    }
    xoaStatistic = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=statistic&a=delete&id=${id}`)

    }





}



export const quanLyStatisticService = new QuanLyStatisticService();