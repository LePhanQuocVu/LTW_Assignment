import { useState } from 'react';
import { Avatar } from '@mui/material';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
const AvatarInput = () => {
        var avatar = localStorage.getItem('image');

    const [selectedAvatar, setSelectedAvatar] = useState('https://i.pinimg.com/236x/54/12/11/541211d3d6faf98854cb9b3da2373c4e.jpg');
    const [uploadedAvatar, setUploadedAvatar] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedAvatar(reader.result);
                setUploadedAvatar(file);
            };
            reader.readAsDataURL(file);
        } else {
            setSelectedAvatar('');
            setUploadedAvatar(null);
        }
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="flex items-center">
            <label htmlFor="avatar-upload">
                <div
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Avatar
                        src={avatar}
                        alt="Avatar"
                        className="w-12 h-12 cursor-pointer"
                        style={{ height: '110px', width: '110px', marginBottom: '15px' }}
                    />
                    {isHovered && (
                        <div
                            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50  cursor-pointer"
                            style={{ height: '110px', width: '110px', borderRadius: '50%' }}>
                            <CameraAltRoundedIcon style={{ color: 'white' }} />
                        </div>
                    )}
                </div>
                <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default AvatarInput;