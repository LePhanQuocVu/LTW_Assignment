import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Input,
  Textarea
} from "@material-tailwind/react";
import EditIcon from '@mui/icons-material/Edit';
import {  IconButton } from "@mui/material";
import { useState } from "react";
export default function DialogDefault(props) {
  const [open, setOpen] = React.useState(false);
  const values = props.values;
  const handleOpen = () => setOpen(!open);
  const [address, setaddress] = useState(values.row.address);
  const [note, setnote] = useState(values.row.note);

  
  function handleChangeaddress(event) {
    setaddress(event.target.value)
  }

  function handleChangenote(event) {
    setnote(event.target.value)
  }

  return (
    <>
      <IconButton onClick={handleOpen} style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
        <EditIcon/>
      </IconButton>
      <Dialog open={open} size="xs" handler={handleOpen} className="flex flex-col justify-center items-center">
            <DialogHeader>Chỉnh sửa thông tin đặt hàng</DialogHeader>
            <DialogBody style={{height:'fit-content',overflow:'auto', scrollbarWidth: '0px'}} className="!overflow-x-hidden !overflow-y-visible">
                <form className="w-100 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-3">
                        <Input size="lg" type="text" name='address' label="Địa chỉ" value={address} onChange={(e)=>handleChangeaddress(e)} required/>

                        <Textarea id="message" rows="4" label="Ghi chú" name="note" value={note} onChange={(e)=>handleChangenote(e)} ></Textarea>                    
                    
                    </div>
                    <Button className="mt-6" type="submit" fullWidth>
                    Lưu thông tin
                    </Button>

                </form>
            </DialogBody>
      </Dialog>
    </>
  );
}