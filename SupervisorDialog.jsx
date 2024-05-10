import {Dialog, Box, TextField, Button} from '@mui/material';
import { useContext, useState} from 'react';
import SignUpDialog from '../Credentials/SignUpDialog';
import { authenticateSupervisorLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { ErrorClose, OnValueChange } from '../../CommonFunctionalities';
import { ButtonWrapper, BoldType, Wrapper, Boxer, dialogStyle, BoxStyle, Errorz} from './CSS-Creds';


const LoginInitials=
{
    
    Id: '',
    Password: ''
}

const SupervisorDialog= ({open, SetOpen})=>
{
    // const [oven, signupOpen] = useState(false);
    const [login, setLogin]= useState(LoginInitials);
    const {setAccount}=useContext(DataContext);
    const [errorz, setErrorz]= useState(false);

const ErrorClose=()=>
{
    setErrorz(false);
    SetOpen(false);
}

    const loginUser= async()=>
   {
    try{
    let response= await authenticateSupervisorLogin(login);
    if(response.status===200)
    {
        ErrorClose(SetOpen, setErrorz);
        setAccount(response.data.data.StudentId);
        
    }
    else
    {
        setErrorz(true);
    }
}
catch(error)
{
    console.error('Error:', error);
    setErrorz(true);

}
   }

    return(
        <Dialog open={open} onClose={()=> ErrorClose(SetOpen, setErrorz)} PaperProps={{sx:dialogStyle}} hideBackdrop={false}>
         <Wrapper>

                <BoldType>Supervisor ID:</BoldType>
                <TextField variant='standard' onChange={(e) =>OnValueChange(e, login, setLogin)} name='ID' style={{fontSize:60, marginTop:0, marginLeft: 10}} label='Enter ID'/>       
            </Wrapper>
            
            { errorz && <Errorz>Please enter valid Supervisor ID or Password</Errorz> }
            <Box style={{marginTop:50, marginLeft:70, display:'flex'}}>
                <BoldType >Password:</BoldType>
                <TextField variant='standard' onChange={(e)=>OnValueChange(e, login, setLogin)} name='Password' style={{fontSize:60, marginTop:0, marginLeft: 10}} label='Enter Password'/>       
                
                </Box> 

                <ButtonWrapper>
                <Button variant="contained" onClick={loginUser}>Login</Button>
            </ButtonWrapper>
                </Dialog>
    )
}

export default SupervisorDialog;