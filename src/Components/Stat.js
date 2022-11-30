import React from 'react';
import statimage from './image/monitoring.png';
import '../Components/CSS/stat.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {
    collection,
    getDocs,
} from "firebase/firestore";
import {useEffect} from "react";
import {useState} from "react";
import {db} from "../firebase-config";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

function Stat() {
    const [images, setImages] = useState([]);
    const ImagesColltectionRef  = collection(db,"OtherImages");
    useEffect(() => {

        const getImages = async () => {
            const data = await getDocs(ImagesColltectionRef);
            setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        };

        getImages();
    }, []);
  return(
    <div>
        <Box
            sx={{
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="lg">
                <center><h1><span  style={{color: '#ec6c16'}}>Stud</span>Pro 5.0</h1></center>

                <Typography variant="h5" align="#ec6c16" color="text.secondary" align="justify" paragraph>
                    StudPro Career Fair was an initiative by Institute of Electrical and Electronics Engineers (IEEE) Young Professional Sri Lanka Section 2017 Executive Committee  to provide a platform for IEEE student members to expose their talent to the industries as well as to encourage the student members to continue their IEEE membership as Young Professionals.
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" align="justify" paragraph>
                    The purpose of this event is to enable undergraduate/graduate job seekers and prospective employers to meet each other under one roof. As the world’s largest professional organization, the emphasis of IEEE on the professionalism of its members will make sure that the candidates at IEEE StudPro Career Fair will compliment the companies that they will affiliate in the future. Furthermore, this event will double as an opportunity for the fresh graduates and for final year undergraduates to reach out to reputed companies established in Sri Lanka under one roof. The event has been successfully held annually since 2017 with a significant impact.

                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                >
                </Stack>
            </Container>
        </Box>
      <div className="row">
        <div className="columnpic">
            <div className="image">
            <img src={statimage} width="50%" height="50%"/>
            </div>
        </div>
            
        <div className="columndes">
            <div className="description">
            <h3 className="title" ><span  style={{color: '#ec6c16'}}>Stud</span>Pro 5.0 Registration Statistics </h3>
            <Typography variant="h5" align="center" color="text.secondary" align="justify" paragraph>
              StudPro 5.0 was able to reach more than 1300 Registrations covering more than 21 universities of Sri Lanka. Registrants are mainly from Computing, Electrical, Electronic  & Telecommunication Fields.
            </Typography>
            <ColorButton variant="contained" onClick={() => { window.open("https://bit.ly/StudProDashboard")}}>
              Click to View
            </ColorButton >
            
            </div>
        </div>
          <center>   <div style={{margin: 20}} className="columndes">
              <center><h1><span  style={{color: '#ec6c16'}}>Stud</span>Pro 5.0 Program Plan</h1></center>
              {images.map((item, idx) => (

               <img
                      src={item.programplan}
                      width="100%"
                      height="100%"
                      className="d-inline-block align-top"

                  />))}
          </div></center>
      </div>

    </div>
    
  );
}




export default Stat;
