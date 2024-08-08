"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Text, Button, useMediaQuery, Image } from "@chakra-ui/react";
import MenuTable from "./components/MenuTable";
import Navbar from "./components/Navbar";
const Home: React.FC = () => {
  const [isNavSticky, setIsNavSticky] = useState(false);

  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
  const [isSmallerThan769] = useMediaQuery("(max-width: 769px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)");
  const [isSmallerThan450] = useMediaQuery("(max-width: 450px)");
  const mediaQueries = {
    isSmallerThan1280,
    isSmallerThan1024,
    isSmallerThan769,
    isSmallerThan450,
  };

  type ImagesArray = string[];
  let imgLinkks: ImagesArray = [
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_waffles.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_wings.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_salads.png",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_bombs.png ",
    "https://rocomamas.com/_ipx/w_1280&f_webp/img/home/top-downs/top_down_combos.png",
  ];

  return (
    <Box overflow={"hidden"} position={"relative"} minH={"1000px"}>
      <Navbar />
      <Box
        my={"80px"}
        py={"100px"}
        background={
          " linear-gradient(180deg, rgba(24, 24, 24, .8) 80%, transparent),url('https://rocomamas.com/img/home/tiles.webp')"
        }
        backgroundAttachment={"fixed"}
        position={"relative"}
        overflow={"hidden"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Box
          display={isSmallerThan1024 ? "none" : "block"}
          w={"50vw"}
          h={"100%"}
          top={"0"}
          left={0}
          position={"absolute"}
          zIndex={10}
          background={
            " linear-gradient(90deg, rgba(24,24,24,1) 5% ,rgba(121,29,9,0) 50%)"
          }
          backgroundPosition={"top"}
          backgroundSize={"cover"}
          opacity={0.8}
        ></Box>
        <Box
          transform={"rotate(-3deg)"}
          transformOrigin={"center"}
          ml={"-20px"}
          width={"105vw"}
        >
          <Box className="ticker-container">
            <Box className="ticker-wrapper" display={"flex"}>
              <Box className="ticker-images" display={"flex"} gap={"20px"}>
                {imgLinkks &&
                  imgLinkks.map((url, i) => (
                    <Box
                      display={"flex"}
                      key={i}
                      justifyContent={"center"}
                      alignItems={"center"}
                      minW={isSmallerThan1024 ? "250px" : "400px"}
                      w={isSmallerThan1024 ? "250px" : "400px"}
                    >
                      <Image
                        transform={"rotate(3deg)"}
                        src={url}
                        h={isSmallerThan1024 ? "90%" : "100%"}
                        maxW={isSmallerThan1024 ? "90%" : "100%"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                      ></Image>
                    </Box>
                  ))}
                {imgLinkks &&
                  imgLinkks.map((url, i) => (
                    <Box
                      display={"flex"}
                      key={i}
                      justifyContent={"center"}
                      alignItems={"center"}
                      minW={isSmallerThan1024 ? "250px" : "400px"}
                      w={isSmallerThan1024 ? "250px" : "400px"}
                    >
                      <Image
                        transform={"rotate(3deg)"}
                        src={url}
                        h={isSmallerThan1024 ? "90%" : "100%"}
                        maxW={isSmallerThan1024 ? "90%" : "100%"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                      ></Image>
                    </Box>
                  ))}
              </Box>
            </Box>
          </Box>

          <Box
            position={"relative"}
            top={isSmallerThan769 ? "-30px" : "-50px"}
            zIndex={"-1"}
          >
            <Box className="ticker-container">
              <Box color={"white"} className="ticker-wrapper">
                <Text
                  whiteSpace={"nowrap"}
                  opacity={".3"}
                  fontSize={
                    isSmallerThan640
                      ? "1.9rem"
                      : isSmallerThan769
                      ? "2.5rem"
                      : isSmallerThan1024
                      ? "3.75rem"
                      : "6rem"
                  }
                  color={"white"}
                  className="Rocomamas-header ticker-text"
                >
                  {[
                    "Explosive ",
                    " Burgers",
                    "Fire",
                    "Wings",
                    "Juicy",
                    "Hotdog",
                    "Frozen",
                    "Cocktail",
                  ].map((word, i) => (
                    <span className="Rocomamas-header" key={i}>
                      {word}
                    </span>
                  ))}
                </Text>
                <Text
                  whiteSpace={"nowrap"}
                  opacity={".3"}
                  fontSize={
                    isSmallerThan640
                      ? "1.9rem"
                      : isSmallerThan769
                      ? "2.5rem"
                      : isSmallerThan1024
                      ? "3.75rem"
                      : "6rem"
                  }
                  color={"white"}
                  className="Rocomamas-header ticker-text"
                >
                  {[
                    "Explosive ",
                    " Burgers",
                    "Fire",
                    "Wings",
                    "Juicy",
                    "Hotdog",
                    "Frozen",
                    "Cocktail",
                  ].map((word, i) => (
                    <span className="Rocomamas-header" key={i}>
                      {word}
                    </span>
                  ))}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          display={isSmallerThan1024 ? "none" : "block"}
          w={"55vw"}
          h={"100%"}
          top={"0"}
          right={0}
          position={"absolute"}
          zIndex={10}
          background={
            " linear-gradient(270deg, rgba(24,24,24,1) 5% ,rgba(121,29,9,0) 50%)"
          }
          backgroundPosition={"top"}
          backgroundSize={"cover"}
          opacity={0.8}
        ></Box>
      </Box>

      <MenuTable />

      <Box
        margin={"2rem 0rem"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"grid"}
          gridTemplateColumns={
            isSmallerThan769
              ? "repeat(1,minmax(0,1fr))"
              : "repeat(2,minmax(0,1fr))"
          }
          padding={"0rem 2.5rem"}
          gap={"1.25rem"}
        >
          <Image
            src={"/images/image-1.webp"}
            borderRadius={"10px"}
            height={"auto"}
            maxW={"100%"}
          ></Image>
          <Image
            src={"/images/image-2.webp"}
            borderRadius={"10px"}
            height={"auto"}
            maxW={"100%"}
          ></Image>
          <Image
            src={"/images/image-3.webp"}
            borderRadius={"10px"}
            height={"auto"}
            maxW={"100%"}
          ></Image>
          <Image
            src={"/images/image-4.webp"}
            borderRadius={"10px"}
            height={"auto"}
            maxW={"100%"}
          ></Image>
        </Box>
      </Box>

      <Box display={isSmallerThan1024 ? "block" : "flex"}>
        <Image
          src={"/images/image-5.webp"}
          width={isSmallerThan1024 ? "100%" : "51.3%"}
          height={"auto"}
        ></Image>
        <Box
          width={isSmallerThan1024 ? "100%" : "48.7%"}
          border={"5px dashed #C82138"}
          padding={"1rem"}
        >
          <Box
            marginLeft={isSmallerThan769 ? "0rem" : "2.25rem"}
            marginTop={"1.25rem"}
          >
            <Image
              src={"/images/smile.png"}
              width={isSmallerThan1024 ? "145px" : "311px"}
              height={isSmallerThan1024 ? "145px" : "311px"}
              marginLeft={isSmallerThan1024 ? "-17px" : "-50px"}
            ></Image>
            <Box>
              <Box fontSize={isSmallerThan1024 ? "43px" : "60px"}>
                <h2 className="TabernaSans">GIFT CARDS</h2>
              </Box>
              <Text
                fontSize={".875rem"}
                lineHeight={"1.25rem"}
                fontFamily={"Poppins"}
              >
                ...because sharing the love of deliciousness has never been so
                tasty! 🍔🎉
              </Text>
              <Button
                border={"none"}
                _hover={{ bg: "#9b2c2c" }}
                background={"rgb(200, 36, 56)"}
                className="TabernaSans-Regular"
                marginTop={".75rem"}
                marginBottom={"2.5rem"}
                color={"white"}
                fontSize={"1.25rem"}
                lineHeight={"1.75rem"}
                padding={"21px 11%"}
              >
                buy a gift card
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
