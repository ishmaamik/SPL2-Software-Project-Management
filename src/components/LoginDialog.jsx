
import {Dialog, Box, TextField, Button} from '@mui/material';
import { useContext, useState} from 'react';
import SignUpDialog from './SignUpDialog';
import { authenticateStudentLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { ErrorClose, OnValueChange } from '../../CommonFunctionalities';
import { ButtonWrapper, BoldType, Wrapper, Boxer, dialogStyle, BoxStyle, Errorz} from './CSS-Creds';
import StudentDialog from './StudentDialog';
import AdminDialog from './AdminDialog';
import SupervisorDialog from './SupervisorDialog';
import StudentSignup from './StudentSignup';
const LoginInitials=
{
    
    Id: '',
    Password: ''
}


const LoginDialog= ({open, SetOpen}) =>{

    const [oven, signupOpen] = useState(false);
    const [login, setLogin]= useState(LoginInitials);
    const {setAccount}=useContext(DataContext);
    const [errorz, setErrorz]= useState(false);
    const [studentOpen, setStudent]= useState(false);
    const [adminOpen, setAdmin]= useState(false);
    const [supervisorOpen, setSupervisor]= useState(false);


    const SignupDialog=()=>
    {
        signupOpen(true);
        SetOpen(false); 
        
    }

    const OpenStudent=()=>
{
    setStudent(true);
    SetOpen(false);
}

const OpenAdmin=()=>
{
    setAdmin(true);
    SetOpen(false);
}
const OpenSupervisor=()=>
{
    setSupervisor(true);
    SetOpen(false);
}

    return(
        <BoxStyle>

        <Dialog open={open} onClose={()=> ErrorClose(SetOpen, setErrorz)} PaperProps={{sx:dialogStyle}} hideBackdrop={false}>
            
            
        <ButtonWrapper>
                <Button variant="contained" onClick={OpenStudent}>Login as Student</Button>
            </ButtonWrapper>

            <ButtonWrapper>
                <Button variant="contained" onClick={OpenAdmin}>Login as Admin</Button>
            </ButtonWrapper>

            <ButtonWrapper>
                <Button variant="contained" onClick={OpenSupervisor}>Login as Supervisor</Button>
            </ButtonWrapper>
       <Boxer>
       
            <p style={{marginLeft:50}}>New here?</p> 
            
            <Button onClick={()=> SignupDialog()}>
                Signup
            </Button>
            
        </Boxer>
        
        </Dialog>
                <StudentDialog open={studentOpen} SetOpen={setStudent}/>
                <AdminDialog open={adminOpen} SetOpen={setAdmin}/>
                <SupervisorDialog open={supervisorOpen} SetOpen={setSupervisor}/>
        <SignUpDialog open={oven} SetOpen={signupOpen}/>   

       
       </BoxStyle>
    );
            //if SignupDialog called within LoginDialog it closes the LoginDialog and hence the SignupDialog as well.
}

export default LoginDialog;