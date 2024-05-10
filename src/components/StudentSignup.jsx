import {Dialog, Box, TextField, Button} from "@mui/material";
import { useState, useContext } from "react";
import { authenticateSignUp, authenticateStudentSignUp } from "../../service/api";
import {DataContext} from '../../context/DataProvider';
import { ButtonWrapper, dialogStyle } from "./CSS-Creds";

const SignupInitials=
{
    Name: '',
    StudentId: '',
    Password:'',
    Department: '',
    Programme: '',
    Email: ''
}



const StudentSignup= ({open, SetOpen}) =>
{
    const onClose=() =>
{
    SetOpen(false);
}
    
const [signup, setSignup] =useState(SignupInitials);
const{setAccount}= useContext(DataContext);

const onInputChange=(e)=>
    {
    //    console.log(e.target.value);

     setSignup({...signup, [e.target.name]: e.target.value});
     console.log(signup);
    }

const signupUser= async()=>
{
    await authenticateStudentSignUp(signup);
    setAccount(signup.StudentId);
    onClose();
}
    return(
        

        <Box>
        <Dialog open={open} onClose={()=>onClose()} PaperProps={{sx:dialogStyle}}>

            
            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='Name' style={{fontSize:60, marginTop:0, marginLeft: 10}} label='Enter Name'/>       
            
            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='StudentId' style={{fontSize:10, marginTop:0, marginLeft: 10}} label='Enter ID'/>

            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='Password' style={{fontSize:10, marginTop:0, marginLeft: 10}} label='Enter Password'/>
           
            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='Department' style={{fontSize:10, marginTop:0, marginLeft: 10}} label='Enter Department'/>
           
            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='Programme' style={{fontSize:10, marginTop:0, marginLeft: 10}} label='Enter Programme'/>
           
            <TextField variant='standard' onChange={(e)=>onInputChange(e, signup, setSignup)} name='Email' style={{fontSize:10, marginTop:0, marginLeft: 10}} label='Enter Email'/>

            <ButtonWrapper> <Button onClick={() => signupUser()}variant="contained">Continue </Button></ButtonWrapper>
                

        </Dialog>

        </Box>
    )
}

export default StudentSignup;