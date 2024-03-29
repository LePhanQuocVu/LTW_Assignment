import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';

export default function Admin() {
  const history = useHistory();
  const [auth, setAuth] = useState('');
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    getUserData();
    var auth = localStorage.getItem('username');
    if (auth == null) {
      history.push("/login");
    }
    setAuth(auth);

  }, []);

  console.log(auth);

  const getUserData = async () => {
    const reqData = await fetch("http://localhost/qlsvmvc/?c=user&a=list");
    const resData = await reqData.json();

    setUserData(resData);

  }
  const handleDelete = async (id) => {

    const res = await axios.delete(`http://localhost/qlsvmvc/?c=user&a=delete&id="${id}"`);
    console.log("ket qua ", "http://localhost/qlsvmvc/?c=user&a=delete&id=" + id)
    setMessage(res.data.success);
    getUserData();

  }

  return (
    <div>
      {/* <Navbar />
      <Sidebar /> */}
      <div>  <div className="container">
        <div className="row">
          <div className="col-md-10 mt-4">
            <h5 className="mb-4">User List</h5>
            <p className="text-danger">{message} </p>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">username</th>
                  <th scope="col">password</th>

                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map((uData, index) => (
                    <tr key={index}>

                      <td>{uData.username}</td>
                      <td>{uData.password}</td>

                      <td>
                        <Link to={"/edit/" + uData.username} className="btn btn-success mx-2">Edit</Link>
                        <button className="btn btn-danger" onClick={() => handleDelete(uData.username)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div></div>
    </div>
  )
}

