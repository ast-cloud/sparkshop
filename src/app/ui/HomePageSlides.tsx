"use client";
import React from 'react';
import { useMediaQuery } from '@mui/material';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function HomePageSlides(){

    const imageStyle = {
      height: useMediaQuery('(max-width: 900px)')? '35vw':'28vw',
      width: '100vw',
      borderRadius:'0px'
    } as React.CSSProperties;

    const carouselStyle = {
        marginTop:'2vh',
        borderRadius:'0px',
        overflow:'hidden'
      } as React.CSSProperties;
  
    return (
      <div className="" style={carouselStyle}>
        <Carousel className='carousel-container' showThumbs={false} swipeable={true} showArrows={true} autoPlay={true} emulateTouch={true} showStatus={false} >
          <div className='carousel-item'>
              <img src="/1.jpg" style={imageStyle} alt=''/>
          </div>
          <div className='carousel-item'>
              <img src="/2.jpg" style={imageStyle} alt=''/>
          </div>
          <div className='carousel-item'>
              <img src="/3.jpg" style={imageStyle} alt=''/>
          </div>
          <div className='carousel-item'>
              <img src="/4.jpg" style={imageStyle} alt=''/>
          </div>
        </Carousel>
      </div>
    )
  
  }
  