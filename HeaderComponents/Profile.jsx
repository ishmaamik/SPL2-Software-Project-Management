import {Button, Menu, MenuItem} from "@mui/material";
import { useState } from "react";

const Profile= ({account, setAccount, variant,logon}) =>
{
    const [open, setOpen]= useState(false);

    const handleClick=(event)=>
    {
        setOpen(event.currentTarget);
    }

    const logout=()=>
    {
        setAccount('');
    }
    const handleClose=()=>
    {
        setOpen(false);
    }
    return(
        <>
            <Button variant={variant} style={{color: '#ffffff'}} onClick={handleClick}>{account}</Button>

            <Menu
        
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={open}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logout();}}>{logon}</MenuItem>
      </Menu>
        </>
    )
}

export default Profile;