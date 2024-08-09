import React, { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { ColorModeContext } from '../ThemeProviderComponent/ThemeProviderComponent';
import './ToggleThemeButton.css'

const ToggleThemeButton = () => {
  const colorMode = useContext(ColorModeContext);
  const [imge, setImg]=useState(false);
  return (
    <Button variant="contained" onClick={()=>{
      colorMode.toggleColorMode()
     setImg((pre)=>!pre)
    
    }
     
      } style={{backgroundColor:"#212121" ,border:"#212121"}}>
      {
        !imge?<img src="/sun.png" alt="" />:<img src="/half-moon.png" alt="" />
       
      }
    
      
    </Button>
  );
};

export default ToggleThemeButton;