import React from 'react';
import {Carousel} from 'react-bootstrap';
import '../App.css';
import { useState, useEffect } from "react";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'

import { db} from "../firebase-config";

import image1 from './../assets/images/1.jpg';
import image2 from './../assets/images/2.jpg';
import image3 from './../assets/images/3.jpg';

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const CarouselContainer =() =>{
  const [carousel, setCarousel] = useState([]);

  const CarouselColltectionRef  = collection(db,"Carousel");

  useEffect(() => {
        
    const getCarousel = async () => {
      const data = await getDocs(CarouselColltectionRef);
      setCarousel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    
    getCarousel();
  }, [CarouselColltectionRef]);


    return(
      <div>
        {/* <div  style={{ position: 'relative', zIndex: '1090' }}>
          <h1>manji
          </h1>
        </div> */}



        <div style={{ position: 'relative', zIndex: '-1' }}>
          <Carousel controls={false} fade = {true} pause = {false} >
          {carousel.map((item, idx) => (
            <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

          ))},

        </Carousel>  
      </div> 
      </div>  
    )

}

export default CarouselContainer