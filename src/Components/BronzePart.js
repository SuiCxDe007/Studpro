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


function BronzePart() {

    const [companys, setCompanys] = useState([]);
   const [participants, setParticipants] = useState([]);

    const CompanyColltectionRef  = collection(db,"Bronze");
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
              color="#CD7F32"
              gutterBottom
            >
              Bronze partner
            </Typography>
            
        </div>
        <div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {companys.map((item, idx) => (
              <Grid item key={item.logo} xs={6}>
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

export default BronzePart;