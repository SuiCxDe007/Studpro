import React, { useEffect,useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../Components/CSS/cardscroll.css';
import { dataDigitalBestSeller } from '../assets/data/data';
import imgGirl from '../assets/images/Batman.png';

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


function Cardscroll() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

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
    <div className="App">
      <Slider {...settings}>
        {companys.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={item.logo}
                alt={item.name}
                onError={handleErrorImage}
              />
              <h1>{item.name}</h1>
            </div>
            <div className="card-bottom">
              <h3>{item.years}</h3>
              <span className="category">{item.details}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Cardscroll;