import React, { useState } from 'react';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RepeatIcon from '@mui/icons-material/Repeat';

const MealCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(false);
  const [repeated, setRepeated] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);// Toggle the handle click state
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteMeal = () => {
    console.log("delete meal");
    handleClose();
  };

  const handleOpenReplyModel = () => {
    console.log("open model")
  };

  const hanleCreateRemeal = () => {
    console.log("handle create remeal");
    setRepeated(!repeated); // Toggle the repeat state
  };

  const hanleLikeRemeal = () => {
    console.log("handle like meal");
    setLiked(!liked); // Toggle the like state
  };

  return (
    <div className="">
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg"
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col cursor-pointer">
            <span className="font-semibold">Jenifer</span>
            <span className="text-gray-600">@Jenifer_23 . 2m</span>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <MenuItem onClick={handleDeleteMeal}>Delete</MenuItem>
            <MenuItem onClick={handleDeleteMeal}>Edit</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="mt-2">
        <div className="cursor-pointer">
          <p className="mb-2 p-0">Healthy Meal</p>
          <img className="w-[55rem] border border-gray-400 p-5 rounded-md" src="https://img.delicious.com.au/l9DHH2AK/w759-h506-cfill/del/2024/01/prawn-and-pork-rice-paper-rolls-205271-1.jpg" alt="" />
        </div>
        <div className="py-5 flex items-center justify-between">
          <div className="space-x-3 flex items-center text-gray-600">
            <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
            <p>43</p>
          </div>

          <div className={`${repeated ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`} onClick={hanleCreateRemeal}>
            <RepeatIcon className="cursor-pointer" />
            <p>54</p>
          </div>

          <div className={`${liked ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`} onClick={hanleLikeRemeal}>
            {liked ? <FavoriteIcon className="cursor-pointer" /> : <FavoriteBorderIcon className="cursor-pointer" />}
            <p>54</p>
          </div>

          <div className="space-x-3 flex items-center text-gray-600">
            <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
            <p>430</p>
          </div>

          <div className="space-x-3 flex items-center text-gray-600">
            <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
