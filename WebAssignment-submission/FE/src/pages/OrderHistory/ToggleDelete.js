import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import DeleteIcon from '@mui/icons-material/Delete';
import {  IconButton } from "@mui/material";
export default function DialogDelete(props) {
  const [open, setOpen] = React.useState(false);
  const values = props.values;
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <IconButton onClick={handleOpen} size="xs" style={{padding:'0',height:'fit-content',alignSelf:'center'}}>
        <DeleteIcon/>
      </IconButton>
      <Dialog open={open} handler={handleOpen} >
        <DialogHeader className="flex justify-center">Xóa đơn hàng</DialogHeader>
        <DialogBody className="flex justify-center flex-wrap text-center">
          Bạn có chắc chắn muốn xóa đơn hàng
          <span className="px-1" style={{color:'red'}}>{values.row.id}</span>
          không? 
        </DialogBody>
        <DialogFooter className="flex justify-evenly">
          <Button
            variant="text"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Không</span>
          </Button>
          <Button variant="gradient"  onClick={handleOpen}>
            <span>Có</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}