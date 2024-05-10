import {Toolbar} from '@mui/material';
import ExampleImage2 from "../devopss.png";
import ExampleImage from "../DevOps.png";
import CustomButtons from '../CustomButtons/CustomButtons'
import { HeaderStyle, ImageStyle, Component } from './CSS-Headers';

const Header= () =>
{
    return(
        <Component>
   <HeaderStyle>
    <Toolbar>
      <CustomButtons></CustomButtons>
      
    </Toolbar>
   </HeaderStyle>
   <ImageStyle>
   <img src={ExampleImage2} alt="save2" style={{ width: '580px', height: '100%', marginTop:'150px', marginLeft:'100px'}} />
   <img src={ExampleImage} alt="save1" style={{ width: '490px', height: '100%', marginLeft: '100px',marginBottom:'10px' }} />
   </ImageStyle>
   
   </Component>
    )
}

export default Header;