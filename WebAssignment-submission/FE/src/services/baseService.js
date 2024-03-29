import Axios from "axios"


export class baseService {


    get = (url) => {
        return Axios({
            url: `${url}`,
            method: 'GET',

        })
    }
    delete = (url) => {
        return Axios({
            url: `${url}`,
            method: 'DELETE',
        })
    }
    post = (url, model) => {
        // console.log("model: ", model);
        return Axios({
            url: `${url}`,
            method: 'POST',
            data: model,


        })
    }
    put = (url) => {
        // console.log("url:", url);
        console.log("cong gio hang: ", url);
        return Axios({
            url: `${url}`,
            method: 'PUT',

        })
    }





}