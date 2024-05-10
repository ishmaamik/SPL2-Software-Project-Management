import {Button} from "@mui/material";
import { useState, useContext } from "react";
import LoginDialog from "../Credentials/LoginDialog";
import SignUpDialog from "../Credentials/SignUpDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "../HeaderComponents/Profile";
import { ButtonWrapper } from "./CSS-CustomButtons";




const CustomButtons=()=>
{
    const [Open, SetOpen] = useState(false);
    const{account} =useContext(DataContext);
    const{setAccount}= useContext(DataContext);

    

    const OpenDialog=()=>
{
    SetOpen(true);
}

    return(
        <ButtonWrapper>

    {
        account ?  <Profile account={account} setAccount={setAccount} variant={"contained"} logon={<p>Logout</p>}/>
        : <Button variant="contained" onClick={()=> OpenDialog()}>Login</Button>
    }
        
        

        <LoginDialog open={Open} SetOpen={SetOpen}/>
        <SignUpDialog/>
        </ButtonWrapper>
    )
}

export default CustomButtons;