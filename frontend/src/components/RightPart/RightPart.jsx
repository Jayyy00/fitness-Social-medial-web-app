import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightPart = () => {
   
  const handleChangeTheme = () => {
    console.log("handle change theme");
  }

  return (
    <div className='py-5 sticky top'>
      <div className='relative flex items-center'>
        <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12 bg-gray-200'/>

        <div className='absolute top-0 left-0 pl-3 pt-3'>
          <SearchIcon className='text-gray-500'/>
        </div>
        <Brightness6Icon className='ml-3 cursor-pointer' onClick={handleChangeTheme}/>
      </div>

      <section className='my-5'>
        <h1 className='text-xl font-bold'>Get Verified</h1>
        <h1 className='font-bold my-2'>Subscribe to unlock new Features</h1>
        <Button variant='contained' sx={{ backgroundColor: '#1e88e5', color: '#fff', padding: '10px', paddingX: '20px', borderRadius: '25px' }}>
          Get Verified
        </Button>
      </section>
         
      <section className='mt-7 space-y-5'>
        <h1 className='font-bold text-xl py-1'>What's Happening?</h1>

        <div>
          <p className='text-sm'>Keto Diet Recipe . LIVE</p>
          
          {[1,1,1,1].map((item, index) => (
            <div className='flex justify-between w-full' key={index}>
              <div>
                <p>Customized Meal Plans . Trending</p>
                <p className='font-bold'>#CustomizedMeals</p>
                <p>34.3k Meals</p>
              </div>
              <MoreHorizIcon />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default RightPart;
