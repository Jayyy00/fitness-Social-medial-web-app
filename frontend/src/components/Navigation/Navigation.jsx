import React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
    handleClose();
  };

  const handleNavigation = (item) => {
    if (item.title === 'Profile') {
      navigate(`/profile/${5}`);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className='h-screen sticky top-0 py-10 flex flex-col items-start justify-center pl-10'>
      <div className='space-y-6'>
        {navigationMenu.map((item) => (
          <div
            key={item.title}
            className='cursor-pointer flex space-x-3 items-center'
            onClick={() => handleNavigation(item)}
          >
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='py-10'>
        <Button
          sx={{ width: 'calc(100% + 30px)', borderRadius: '29px', py: '10px', bgcolor: '#2962ff' }}
          variant='contained'
        >
          Post Meal Plans
        </Button>
      </div>
      <div className='flex items-center space-x-3'>
        <Avatar
          alt="username"
          src='https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg'
        />
        <div>
          <div className='flex items-center'>
            <span>Jenifer</span>
          </div>
          <span className='opacity-70'>@Janifer_23</span>
        </div>
        <div className='py-10'>
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
              'aria-labelledby': 'basic-button',
            }}
            getContentAnchorEl={null} // Ensure menu realigns properly
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Ensure menu realigns properly
            transformOrigin={{ vertical: 'top', horizontal: 'center' }} // Ensure menu realigns properly
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Changed to handleLogout */}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
