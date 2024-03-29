import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Productlist() {
    const [product, setProduct] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {

        getProduct();
    }, []);
    const getProduct = () => {
        fetch("http://localhost/qlsvmvc/?c=product&a=getall")
            .then(res => { return res.json() })
            .then(data => { setProduct(data) })
            .catch(error => { console.log(error) });
    };
    const handleDelete = async (id) => {

        const res = await axios.delete(`http://localhost/qlsvmvc/?c=product&a=delete&id=${id}`);

        setMessage(res.data.success);
        getProduct();

    }


    return (
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-md-10 mt-4">
                        <h5 className="mb-4">Product List</h5>
                        <p className="text-danger"> </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Sr.No</th>
                                    <th scope="col">Product Title</th>
                                    <th scope="col">Product Price</th>
                                    <th scope="col">Product Image</th>
                                    <th scope="col">product Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map((pdata, index) => (

                                        <tr key={index}>
                                            <td>{index + 1} </td>
                                            <td>{pdata.ptitle} </td>
                                            <td>{pdata.pprice} </td>

                                            <td><img src={`http://localhost/reactcrudphp/images/${pdata.pimage}`} height={50} width={90} /></td>
                                            <td>{pdata.status === 1 ? "Active" : "Inactive"} </td>
                                            <td>
                                                <Link to="/editproduct" className="btn btn-success mx-2">Edit</Link>

                                                <button className="btn btn-danger" onClick={() => handleDelete(pdata.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Productlist;