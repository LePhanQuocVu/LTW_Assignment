import axios from "axios";
import React, { useState } from "react";


function Adduser() {
    const [formvalue, setFormvalue] = useState({ taiKhoan: "", matKhau: "" });

    const handleInput = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sendData = {
            taiKhoan: formvalue.taiKhoan,
            matKhau: formvalue.matKhau


        }

        axios.post("http://localhost/qlsvmvc/?c=user&a=register", sendData).then((result) => {
            if (result.data.Status === 'Invalid') {
                alert("invalid user!");
            } else {
                console.log("send data: ", sendData);
                alert("add thanh cong");
            }

        });
        //let jsonres= res.data.json();        

    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <h5 className="mb-4">Adduser </h5>
                        <p className="text-sucess"> </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Username</label>
                                <div className="col-sm-10">
                                    <input type="text" name="taiKhoan" value={formvalue.taiKhoan} className="form-control" onChange={handleInput} />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-2">Password</label>
                                <div className="col-sm-10">
                                    <input type="text" name="matKhau" value={formvalue.matKhau} className="form-control" onChange={handleInput} />
                                </div>
                            </div>



                            <div className="mb-3 row">
                                <label className="col-sm-2"></label>
                                <div className="col-sm-10">
                                    <button name="submit" className="btn btn-success">Submit</button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Adduser;