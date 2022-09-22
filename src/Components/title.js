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

function Title() {
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
            <HorizontalRuleIcon sx={{fontSize: 60, Width:"md" }}></HorizontalRuleIcon>
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
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                  
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {item.title}
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
    
    </div>
    
  );
}

const companys = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/WhyStudpro%2Fdesign.png?alt=media&token=cf0bbf24-28a6-4ea9-ae01-d91852df2c23',
    title: 'Reason 1',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/WhyStudpro%2Fdesign.png?alt=media&token=cf0bbf24-28a6-4ea9-ae01-d91852df2c23',
    title: 'Reason 2',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/WhyStudpro%2Fdesign.png?alt=media&token=cf0bbf24-28a6-4ea9-ae01-d91852df2c23',
    title: 'Resaon 3',
  },
];


export default Title;
