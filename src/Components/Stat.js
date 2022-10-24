import React from 'react';
import statimage from './image/monitoring.png';
import '../Components/CSS/stat.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

function Stat() {
  
  return(
    <div>
      <div className="row">
        <div className="columnpic">
            <div className="image">
            <img src={statimage} width="50%" height="50%"/>
            </div>
        </div>
            
        <div className="columndes">
            <div className="description">
            <h3 className="title" >Studpro 5.0 Registration Statistics </h3>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <ColorButton variant="contained" onClick={() => { window.open("https://bit.ly/StudProDashboard")}}>
              Click to View
            </ColorButton >
            
            </div>
        </div>
      </div>

    </div>
    
  );
}




export default Stat;
