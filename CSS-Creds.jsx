import {styled, Box, TextField, Typography} from '@mui/material';


export const ButtonWrapper= styled(Box)
`
margin: 25px 0px 0 210px;  //top right bottom left i.e. clockwise starting from top
width: 150px;
&>button, &>p, &>div
{
 
    font-size: 14px;
}
`

export const BoldType= styled('b')
`
font-size: 20px;
font-weight: revert;
font-family: math;

`

export const Wrapper= styled(Box)
`
margin-left: 65px;
margin-top: 100px;
display: flex;
`

export const typo= styled(TextField)
`
width:80%;
`

export const Boxer= styled(Box)
`
display:flex;
margin-left:140px;
margin-top:50px;
`

export const dialogStyle=
{

    marginTop: '1%',
    width: '35%',
    height:'62%',
    maxWidth:'100%',
    maxHeight: '70%',
    overflow: 'hidden',
    boxShadow: 'none',
    background: ''
};

export const BoxStyle = styled(Box)
`
display:flex;
`

export const Errorz= styled(Typography)
`
margin-left:25px;
margin-top:10px;
`