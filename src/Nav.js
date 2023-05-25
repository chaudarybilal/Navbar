import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import {Button} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
const Nav = () => {
  return (
    <>
        <AppBar position="static">
        <Toolbar>
<Typography variant='h6' flexGrow={1}> Blissfull Bytes</Typography>

<Button variant='text' color='inherit' startIcon={<LoginIcon/>}>Login</Button>
<Button variant='text' color='inherit' endIcon={<LogoutIcon/>}>Logout</Button>
</Toolbar>


        </AppBar>
    </>
  )
} 

export default Nav