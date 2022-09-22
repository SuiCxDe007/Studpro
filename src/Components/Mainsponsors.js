import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material';



function FormRow() {
  return (
    <React.Fragment>
      <Grid container>
            {companys.map((item, idx) => (
              <Grid item xs={2} >
                <Card borderRadius= {0} >
                  
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.img}
                    alt="Companies"
                  />
                </CardActionArea>
                
              </Card>
              </Grid>
            ))}
        </Grid>

    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box >
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );

}
const companys = [
    {
      img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
      
    },
    {
        img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
      },
      {
        img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
      },
    
  ];
