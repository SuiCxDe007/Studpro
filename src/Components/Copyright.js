
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';


import '../App.css';
import CountUp from 'react-countup';

import { useState, useEffect } from "react";


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';





import { db} from "../firebase-config";
// import storage from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import CompanyCards from './CompanyCards';



function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
function Album() {

  const [companys, setCompanys] = useState([]);
  const [participants, setParticipants] = useState([]);

    const CompanyColltectionRef  = collection(db,"Sponsors");
    const ParticipantColltectionRef = collection(db,"Participant");

    useEffect(() => {
        
        const getCompany = async () => {
          const data = await getDocs(CompanyColltectionRef);
          setCompanys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        const getParticipants = async () => {
          const data = await getDocs(ParticipantColltectionRef);
          setParticipants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getParticipants();
        getCompany()
      }, []);
      
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              StudPro 5.0
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            StudPro Career Fair was an initiative by Institute of Electrical and Electronics Engineers (IEEE) 
            Young Professional Sri Lanka Section 2017 Executive Committee  to provide a platform for 
            IEEE student members to expose their talent to the industries as well as to encourage the student 
            members to continue their IEEE membership as Young Professionals. 

            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {companys.map((item, idx) => (
              <Grid item key={item.logo} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  
                <CardActionArea>
                  <div className="chipContainer">
                      <Chip variant="outlined" color="info" avatar={<Avatar style={{ color: "Black", backgroundColor: "#ec7c2c" }} >{item.years}</Avatar>} label="Years with us"  />
                  </div> 
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.logo}
                    alt="green iguana"
                  />
                  <CardContent>
                  
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                
              </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default Album;
