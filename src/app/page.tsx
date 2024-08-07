"use client"

import React, { useEffect, useState, useRef } from 'react';
import { Box, Text, Button, useMediaQuery, Image } from '@chakra-ui/react';
import MenuTable from './components/MenuTable';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home: React.FC = () => {

  
  const [isNavSticky, setIsNavSticky] = useState(false);
  

  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');
  const [isSmallerThan769] = useMediaQuery('(max-width: 769px)');
  const [isSmallerThan1024] = useMediaQuery('(max-width: 1024px)');
  const [isSmallerThan640] = useMediaQuery('(max-width: 640px)');
  const [isSmallerThan450] = useMediaQuery('(max-width: 450px)');
  const mediaQueries = { isSmallerThan1280, isSmallerThan1024, isSmallerThan769, isSmallerThan450 };

  type ImagesArray = string[];
  let imgLinkks: ImagesArray = [
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_waffles.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_wings.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_salads.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_bombs.png "
  ]
  interface ResponsiveSettings {
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
      initialSlide?: number;
    };
  }
  
  interface CarouselSettings {
    dot: boolean
    infinite: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    speed: number;
    autoplaySpeed: number;
    cssEase: string;
    responsive: ResponsiveSettings[];
  }
  
  const settings1: CarouselSettings = {
    dot: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    speed: 4500 * 4,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settings2: CarouselSettings = {
    dot: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2800 * 4,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  



  return (
    <Box overflow={'hidden'} position={'relative'} 
     minH={'1000px'}>

      

      
    <Box py={"100px"} background={ " linear-gradient(180deg, rgba(24, 24, 24, .8) 80%, transparent),url('https://rocomamas.com/img/home/tiles.webp')"} backgroundPosition={"center"} backgroundSize={"cover"}>
<Box transform={"rotate(-3deg)"} >
     <Slider {...settings1}>
           {imgLinkks && imgLinkks.map((url, i)=>(
            <Box  display={"flex"} key={i} justifyContent={"center"} alignItems={"center"} maxW={isSmallerThan1024 ? "250px" : "381px"} w={isSmallerThan1024 ? "250px" : "381px"}>
              <Image transform={"rotate(3deg)"} src={url} h={isSmallerThan1024 ? "90%" : "100%"} maxW={isSmallerThan1024 ? "90%" : "100%"} objectFit={"cover"} objectPosition={"center"}></Image>
               </Box>
           ))}
    </Slider>
   
    <Box position={"relative"} top={"-50px"} zIndex={"-1"}>
    <Slider {...settings2}>
          {["Explosive ","Burgers ", " Fire ","Wings ", " Juicy ","Hotdogs", "Frozen "," Cocktails "].map((item, i)=>(
            <Text textAlign={"center"} opacity={".3"} key={i} fontSize={isSmallerThan1024 ? "3.75rem" : "6rem"} color={"white"} className='Rocomamas-header'>{item}</Text>
          ))}
    </Slider>
    </Box>
    </Box>



    </Box>

      <MenuTable/>

      <Box margin={"2rem 0rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box display={"grid"} gridTemplateColumns={isSmallerThan769 ? "repeat(1,minmax(0,1fr))" : "repeat(2,minmax(0,1fr))"} padding={"0rem 2.5rem"} gap={"1.25rem"}>
             <Image src={"/images/image-1.webp"} borderRadius={"10px"} height={"auto"} maxW={"100%"}></Image>
             <Image src={"/images/image-2.webp"} borderRadius={"10px"} height={"auto"} maxW={"100%"}></Image>
             <Image src={"/images/image-3.webp"} borderRadius={"10px"} height={"auto"} maxW={"100%"}></Image>
             <Image src={"/images/image-4.webp"} borderRadius={"10px"} height={"auto"} maxW={"100%"}></Image>
             
          </Box>
      </Box>

      <Box display={isSmallerThan1024 ? "block" : "flex"}>
           <Image src={"/images/image-5.webp"} width={isSmallerThan1024 ?  "100%" : "51.3%"} height={"auto"}></Image>
           <Box width={isSmallerThan1024 ? "100%" : "48.7%"} border={"5px dashed #C82138"} padding={"1rem"}>
               <Box
               marginLeft={isSmallerThan769 ? "0rem" : "2.25rem"}
               marginTop={"1.25rem"}
               >
               <Image src={"/images/smile.png"} width={isSmallerThan1024 ? "145px" : "311px"} height={isSmallerThan1024 ? "145px" : "311px"} marginLeft={isSmallerThan1024 ? "-17px" : "-50px"}></Image>
               <Box>
                 <Box fontSize={isSmallerThan1024 ? "43px" : "60px"}><h2 className="TabernaSans">GIFT CARDS</h2></Box>
                 <Text fontSize={".875rem"} lineHeight={"1.25rem"} fontFamily={"Poppins"}>...because sharing the love of deliciousness has never been so tasty! 🍔🎉</Text>
                 <Button  _hover={{bg: "#9b2c2c"}} background={"rgb(200, 36, 56)"} className='TabernaSans-Regular' marginTop={".75rem"} marginBottom={"2.5rem"} color={"white"} fontSize={"1.25rem"} lineHeight={"1.75rem"} padding={"21px 11%"}>buy a gift card</Button>
               </Box>
               </Box>
           </Box>
      </Box>
     
    
    </Box>
  );
};

export default Home;
