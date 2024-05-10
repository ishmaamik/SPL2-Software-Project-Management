import { Toolbar, Box, Button, Typography } from "@mui/material";
import { HeaderStyle } from "./CSS-Headers";
import Profile from "./Profile";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";
const StudentDashboard=()=>
{
    const{account} =useContext(DataContext);
    const{setAccount}= useContext(DataContext);
    return(
        <Box style={{display:"flex"}}>

        <HeaderStyle>
        
            <Toolbar>
          { 
            account?      
            <Button variant="contained" style={{marginLeft:1000, marginTop:25, textTransform:"none"}}>Hi <Profile account={account} setAccount={setAccount} variant={"text"} logon={<p>Sign Out</p>}/></Button>
           :
            <Button variant="contained" style={{marginLeft:1000, marginTop:25, textTransform:"none"}}>Hi, Login to explore your Dashboard</Button> 
        }
            </Toolbar>

            
            </HeaderStyle>

          {account &&  <Typography style={{marginLeft:100, marginTop:200} }>{account}</Typography>}

            </Box>
    )
}

export default StudentDashboard;