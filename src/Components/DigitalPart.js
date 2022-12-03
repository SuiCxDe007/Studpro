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


function DigitalPart() {

    const [companys, setCompanys] = useState([]);
   const [participants, setParticipants] = useState([]);

    const CompanyColltectionRef  = collection(db,"Digital");
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




    return(
        <div>
        <div>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="#01579b"
              gutterBottom
            >
              Digital Partner
            </Typography>
            
        </div>
        <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
            >
            {companys.map((item, idx) => (
              <Grid item key={item.logo} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} style={{boxShadow: "none"}}>
                  
                <CardActionArea>
                   
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.logo}
                    alt="green iguana"
                  />
                </CardActionArea>
                
              </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </div>

        </div>
    )
}

export default DigitalPart;