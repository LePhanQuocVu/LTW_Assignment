import { baseService } from "./baseService";
// import { GROUPID } from '../util/settings/config'
export class QuanLyTestimonialService extends baseService {




    layDanhSachTestimonial = () => {
        return this.get(`http://localhost/qlsvmvc/?c=testimonial&a=list`);
    }
    xoaTestimonial = (id) => {
        return this.delete(`http://localhost/qlsvmvc/?c=testimonial&a=delete&id=${id}`);

    }


}



export const quanLyTestimonialService = new QuanLyTestimonialService();