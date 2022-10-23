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
import { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { db} from "../firebase-config";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";





export default function NestedGrid() {

  const [companys, setCompanys] = useState([]); 

    const CompanyColltectionRef  = collection(db,"Sponsors");

    useEffect(() => {
        
        const getCompany = async () => {
          const data = await getDocs(CompanyColltectionRef);
          setCompanys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        
        getCompany();
      }, [CompanyColltectionRef]);
  return (
    <ImageList variant="quilted" cols={4}>
        {companys.map((item) => (
          <ImageListItem key={item.logo} cols={1} rows={1}>
            <img
              src={`${item.logo}?w=600&fit=crop&auto=format`}
              srcSet={`${item.logo}?w=600&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );

}
// const companys = [
//     {
//       img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
      
//     },
//     {
//         img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
//       },
//       {
//         img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
//       },
//       {
//         img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
//       },
//       {
//         img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
//       },
//       {
//         img: 'https://firebasestorage.googleapis.com/v0/b/website-3feaf.appspot.com/o/Companies%2F4.png?alt=media&token=7f4ed8c1-4477-49db-8229-61d5acd6e9c7',
        
//       },
    
//   ];
