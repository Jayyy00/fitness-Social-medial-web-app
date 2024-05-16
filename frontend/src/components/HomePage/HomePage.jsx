import React from 'react'
import { Grid } from '@mui/material'
import Navigation from '../Navigation/Navigation'
import HomeSection from '../HomeSection/HomeSection'
import RightPart from '../RightPart/RightPart'
import Profile from '../Profile/Profile'
import {Routes, Route} from 'react-router-dom';
function HomePage() {
  return (
    <Grid container xs={12} classname= 'px-5 lg:px-36'>
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
            <p className='text-center'> </p>
            <Navigation/>
        </Grid>

        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
           <Routes>
              <Route path="/" element={<HomeSection/>}></Route>
              <Route path="/profile" element={  <Profile/>}></Route>
           </Routes>
        
        </Grid>

        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
           <RightPart/>
        </Grid>
    </Grid>
  )
}

export default HomePage