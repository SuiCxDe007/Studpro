import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Avatar } from '@mui/material'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

import { db} from "../firebase-config";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function Title() {
  const [companys, setCompanys] = useState([]);
  

    const CompanyColltectionRef  = collection(db,"WhyStudPro");
  

    useEffect(() => {
        
        const getCompany = async () => {
          const data = await getDocs(CompanyColltectionRef);
          setCompanys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getCompany()
      }, []);

  return(
    <div>
      <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Studpro 5.0
            </Typography>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
            <HorizontalRuleIcon sx={{fontSize: 60, Width:"md" }}> </HorizontalRuleIcon>
            </Typography>
     <Container sx={{ py: 3  }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {companys.map((item, idx) => (
              <Grid item key={item.logo} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 , boxShadow: 2}}>
                  
                <CardActionArea>
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
                  </CardContent>
                </CardActionArea>
                
              </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    
    </div>
    
  );
}

export default Title;
