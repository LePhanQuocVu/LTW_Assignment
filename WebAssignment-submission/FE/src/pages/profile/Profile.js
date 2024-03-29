import { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import EditPassword from './EditPassword'
import axios from "axios";
import { useEffect } from "react";
import { toast } from 'react-toastify';
const Profile = () => {
    var username = localStorage.getItem("username");

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    const [image, setImage] = useState("");

    const [onEdit, setOnEdit] = useState(true);
    useEffect(() => {
      axios.post("http://localhost/qlsvmvc/?c=User&a=getUser", {
        username: username,
      }).then((res) => {
        if (res) {
          setFullname(res.data[0]["fullname"]);
          setEmail(res.data[0]["email"]);
          setPhoneNumber(res.data[0]["phonenumber"]);
          setAddress(res.data[0]["address"]);
          setImage(res.data[0]["image"]);
          localStorage.setItem("image", res.data[0]["image"])
        }
      });
    }, []);
    function handleChangeEdit(e) {
      e.preventDefault();
      setOnEdit(!onEdit);
    }
      const handleEditInfo = async (e) => {
        e.preventDefault();
        setOnEdit(!onEdit);
   
        await axios
          .post("http://localhost/qlsvmvc/?c=User&a=updateInfo", {
            username:username,
            fullname: fullname,
            email: email,
            phonenumber: phoneNumber,
            address: address,
            image: image,
          })
          .then((res) => {
            if (res.data) {
              toast.success("Cập nhật thông tin thành công")
            } else {
              toast.error("Bị lỗi trong quá trình cập nhật")
            }
          });
      };
      return (
        <div className="grid m-4 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    className="text-3xl md:text-5xl font-semibold"
                    sx={{ m: "0 0 5px 0" }}
                >
                    Thông tin người dùng
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-2/4">
                    <EditPassword />
                </div>
            </div>
          <form onSubmit={(e) => handleEditInfo(e)}>
            <div className="grid gap-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Input
                    size="lg"
                    label="Họ và tên"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    disabled={onEdit}
                  />
                </div>
                <div>
                  <Input
                    size="lg"
                    label="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={onEdit}
                  />
                </div>
                <div>
                  <Input
                    size="lg"
                    label="Số điện thoại"
                    name="phone_number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    disabled={onEdit}
                  />
                </div>
                <div>
                  <Input
                    size="lg"
                    label="Địa chỉ"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={onEdit}
                  />
                </div>
                <div>
                  <Input
                    size="lg"
                    label="Ảnh đại diện"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    disabled={onEdit}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-end">
                  {
                    !onEdit ? 
                    <Button type="submit" onClick={(e) => handleEditInfo(e)}>
                      Lưu thông tin
                    </Button> :
                    <Button type="submit" onClick={(e) => handleChangeEdit(e)}>
                      Chỉnh sửa thông tin
                    </Button>
                  }
                </div>
              </div>
            </div>
          </form>
        </div>
    );
};


export default Profile;



