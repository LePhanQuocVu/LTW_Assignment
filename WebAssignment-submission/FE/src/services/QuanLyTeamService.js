import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyTeamService extends baseService {




    layDanhSachTeam = () => {
        return this.get(`http://localhost/qlsvmvc/?c=team&a=list`);
    }
    xoaTeam = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=team&a=delete&id=${id}`)

    }



}



export const quanLyTeamService = new QuanLyTeamService();