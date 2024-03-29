import { Link } from "react-router-dom";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import Avatar from './Avatar';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
export default function Sidebar() {
    var username = localStorage.getItem('username');
    return (
        <Card className=" w-full max-w-[20rem] p-4 shadow-xl bg-black shadow-black rounded-none" style={{ minHeight: '100vh' }}>
            <div className="mb-2 p-4">
                <Avatar />
                <Typography variant="h4" className="text-gray-300">
                    {username}
                </Typography>
            </div>
            <List>
                <Link to="/profile" className="text-gray-300">
                    <ListItem>
                        <ListItemPrefix>
                            <InfoRoundedIcon className="h-5 w-5 text-gray-300" />
                        </ListItemPrefix>
                        Thông tin cá nhân
                    </ListItem>
                </Link>
                <Link to="/products" className="text-gray-300">
                    <ListItem>
                        <ListItemPrefix>
                            <SmartphoneIcon className="h-5 w-5 text-gray-300" />
                        </ListItemPrefix>
                        Quản lí sản phẩm
                    </ListItem>
                </Link>
                <Link to="/users" className="text-gray-300">
                    <ListItem>
                        <ListItemPrefix>
                            <ManageAccountsIcon className="h-5 w-5 text-gray-300" />
                        </ListItemPrefix>
                        Quản lí người dùng
                    </ListItem>
                </Link>
                <span className="text-gray-300">
                    <ListItem>
                        <ListItemPrefix>
                            <PowerSettingsNewRoundedIcon className="h-5 w-5 text-gray-300" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </span>
            </List>
        </Card>
    );
}
