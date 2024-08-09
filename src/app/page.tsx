"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Text, Button, useMediaQuery, Image , List, ListItem} from "@chakra-ui/react";
const Home: React.FC = () => {
  type priceRange = [number, number];
  type MenuItem = {
    name: string;
    price: number | priceRange  ;
    isExtra: boolean
  };
  
  type MenuCategory = {
    title: string;
    items: MenuItem[];
  };
  
  type FullMenu = MenuCategory[];

  const fullMenu1: FullMenu = [
    {
      title: "WINGS",
      items: [
        { name: "HONEY GLAZED", price: 85, isExtra: false },
        { name: "SWEET CHILLI", price: 95, isExtra: false },
        { name: "SMOKEY BBQ", price: 105, isExtra: false },
        { name: "SUICIDE", price: 115, isExtra: false },
        { name: "ABOKYIE STYLE", price: 105, isExtra: false },
      ],
    },
    {
      title: "MEAL DEALS",
      items: [
        { name: "WING IT COMBO", price: 85, isExtra: false },
        { name: "BURGER COMBO", price: 100, isExtra: false },
        { name: "HOTDOG(PORK) COMBO", price: 90, isExtra: false },
      ],
    },
    {
      title: "BURGERS",
      items: [
        { name: "BEEF BURGER", price: 65, isExtra: false },
        { name: "CHEESEBURGER", price: 75, isExtra: false },
        { name: "MINI CHEESEBURGER", price: 45, isExtra: false },
        { name: "BACON(PORK) CHEESEBURGER", price: 100, isExtra: false },
        { name: "MINI BACON(PORK) CHEESEBURGER", price: 55, isExtra: false },
        { name: "DOUBLE CHEESEBURGER", price: 110, isExtra: false },
        { name: "BBQ CHEESEBURGER", price: 80, isExtra: false },
        { name: "MINI BBQ CHEESEBURGER", price: 45, isExtra: false },
        { name: "SPICY CHEESEBURGER", price: 80, isExtra: false },
        { name: "MINI SPICY CHEESEBURGER", price: 45, isExtra: false },
        { name: "MINI TRIO", price: 135, isExtra: false },
        { name: "CHILLI SAUCE", price: 3, isExtra: true },
        { name: "BBQ SAUCE", price: 5, isExtra: true },
        { name: "BURGER SAUCE", price: 10, isExtra: true },
        { name: "JALAPENOS", price: 5, isExtra: true },
        { name: "BACON(PORK)", price: 25, isExtra: true },
        { name: "CHEESE", price: 10, isExtra: true },
        { name: "EGG", price: 10, isExtra: true },
        { name: "EXTRA PATTY WITH CHEESE", price: 35, isExtra: true },
        { name: "EXTRA PATTY", price: 25, isExtra: true },

      ],
    },

  ];

const fullMenu2: FullMenu = [
  {
    title: "HOTDOGS (PORK)",
    items: [
      { name: "SINGLE HOTDOG(PORK)", price: 65, isExtra: false },
      { name: "DOUBLE HOTDOG(PORK)", price: 125, isExtra: false },
      { name: "SAUSAGE BITES(PORK)", price: 80, isExtra: false },
      { name: "BBQ SAUCE", price: 0, isExtra: true },
      { name: "MUSTARD", price: 0, isExtra: true },
      { name: "CHILLI", price: 0, isExtra: true },
      { name: "CHILLI SAUCE", price: 3, isExtra: true },
      { name: "BBQ SAUCE", price: 5, isExtra: true },
      { name: "BURGER SAUCE", price: 10, isExtra: true },
      { name: "JALAPENOS", price: 5, isExtra: true },
      { name: "BACON(PORK)", price: 25, isExtra: true },
      { name: "CHEESE", price: 10, isExtra: true },
      { name: "KETCHUP", price: 3, isExtra: true },

    ],
  },
  {
    title: "WINGMAN COCKTAIL MENU",
    items: [
      { name: "ALCOHOLIC", price: 65, isExtra: false },
      { name: "NON ALCOHOLIC", price: 45, isExtra: false },
      { name: "SOFT DRINKS", price: 10, isExtra: false },
      { name: "WATER", price: 5, isExtra: false },

    ],
  },
  {
    title: "SIDES",
    items: [
      { name: "YAM CHIPS", price: 25, isExtra: false },
      { name: "FRESH CUT POTATO CHIPS", price: 35, isExtra: false },
      { name: "SWEET POTATO FRIES", price: 55, isExtra: false },
    ],
  }
];

type ToppingColumn = {
  items: string[];
};

type ToppingMenu = ToppingColumn[];

const toppingMenu: ToppingMenu = [
  {
    items: [
      "Mayo",
      "Ketchup",
      "Mustard",
      "80/20 Sauce",
      "Relish"
    ]
  },
  {
    items: [
      "Spicy Rub",
      "Lettuce",
      "Tomatoes",
      "Pickles",
      "Grilled Onions"
    ]
  },
  {
    items: [
      "Grilled Mushrooms",
      "Raw Onions",
      "Jalapeño Peppers",
      "Green Peppers",
      "Barbecue Sauce",
      "Hot Sauce"
    ]
  }
];


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
    
      <Box
        mb={"80px"}
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

      <Box 
    padding={isSmallerThan640 ? "0rem 0rem" : "5rem 0rem"}
    background={isSmallerThan1024 ? "white" : "#FFEDE4"}
    >
      <Box padding={"0rem 1.25rem"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image maxWidth={"100%"} height={"auto"} src="https://8020gh.com/assets/menu_icon-9e8a8462.svg" alt="" />
      </Box>
      <Box
        padding={"5rem 0px 0px"}
        
        margin={"0 auto"}
        maxW={
          isSmallerThan640
            ? "640px"
            : isSmallerThan769
            ? "769px"
            : isSmallerThan1024
            ? "1024px"
            : isSmallerThan1280
            ? "1280px"
            : "100%"
        }
      >
        <Box
          display={"flex"}
          flexDirection={isSmallerThan769 ? "column" : "row"}
          gap={"2rem"}
          justifyContent={"center"}
          w={"100%"}
          padding={"0px 1rem"}
          fontSize={"1.125rem"}
          lineHeight={"1.75rem"}
          color={"rgb(200, 33, 56)"}
        >
        
          {fullMenu1 && fullMenu1.map((list, key)=>(
              <Box
              key={key}
              padding={"1.25rem"}
              border={"4px solid  black"}
              width={"315px"}
              height={"auto"}
            >
              <Text
                paddingBottom={".5rem"}
                fontWeight={900}
                className="TabernaSans"
                fontSize={isSmallerThan1024 ? "2.25rem" : "3rem"}
                lineHeight={isSmallerThan640 ? "2.5rem" : "1"}
              >
                {list.title}
              </Text>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <List margin={".75rem 0rem 0rem"}>
              {list.items.map((item, i) => (
                                <ListItem
                                key={i}
                                className="TabernaSans"
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                lineHeight={"1.75rem"}
                                margin={".75rem 0rem 0rem"}
                                color={item.isExtra ? "black" : "rgb(200, 33, 56)"}
                              >
                                <Text className="Hanleysans">{item.name}</Text> {typeof(item.price) == "number" ? (item.price == 0 ? "" : item.price) : `${item.price[0]}-${item.price[1]}` }
                              </ListItem>
              ))}
              
              </List>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        padding={"5rem 0px 0px"}
        margin={"0 auto"}
        maxW={
          isSmallerThan640
            ? "640px"
            : isSmallerThan769
            ? "769px"
            : isSmallerThan1024
            ? "1024px"
            : isSmallerThan1280
            ? "1280px"
            : "100%"
        }
      >
        <Box
          display={"flex"}
          flexDirection={isSmallerThan769 ? "column" : "row"}
          gap={"2rem"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          // alignItems={"center"}
          w={"100%"}
          padding={"0px 1rem"}
          fontSize={"1.125rem"}
          lineHeight={"1.75rem"}
          color={"rgb(200, 33, 56)"}
        >
        
          {fullMenu2 && fullMenu2.map((list, key)=>(
              <Box
              key={key}
              padding={"1.25rem"}
              border={"4px solid  black"}
              width={"315px"}
              height={"auto"}
            >
              <Text
                paddingBottom={".5rem"}
                fontWeight={900}
                className="TabernaSans"
                fontSize={isSmallerThan640 ? "2.25rem" : "3rem"}
                lineHeight={isSmallerThan640 ? "2.5rem" : "1"}
              >
                {list.title}
              </Text>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <List margin={".75rem 0rem 0rem"}>
              {list.items.map((item, i) => (
                                <ListItem
                                key={i}
                                className="TabernaSans"
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                lineHeight={"1.75rem"}
                                margin={".60rem 0rem 0rem"}
                                color={item.isExtra ? "black" : "rgb(200, 33, 56)"}
                              >
                                <Text className="Hanleysans">{item.name}</Text> {typeof(item.price) == "number" ? (item.price == 0 ? "" : item.price) : `${item.price[0]}-${item.price[1]}` }
                              </ListItem>
              ))}
              
              </List>
            </Box>
          ))}
        </Box>
      </Box>
      {/* <Box 
      padding={"5rem 1rem 0rem"}
      maxW={isSmallerThan1024 ? "407px" : "1024px"}
      width={"100%"}
      margin={"0px auto"}
      >
       <Box
       border={"4px solid black"}
       padding={".5rem"}
       margin={"1rem .5rem"}
       color={"rgb(200, 36, 56)"}
       >
      <Box padding={`0rem ${isSmallerThan769 ? "0rem" : "1rem"}`} marginTop={"1rem"}>
      <Text
                paddingBottom={".5rem"}
                fontWeight={900}
                className="TabernaSans"
                fontSize={isSmallerThan769 ? "1.875rem" : "2.25rem"}
                lineHeight={isSmallerThan640 ? "2.5rem" : "1"}
                textAlign={isSmallerThan1024 ? "center" : "start"}
              >
               Any 3 toppings free!!
              </Text>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box
                margin={".75rem .25rem 0rem"}
                borderBottom={"2px dashed black"}
              ></Box>
              <Box margin={".75rem 0rem"}>
                     <Box
                     padding={".75rem"}
                     display={"grid"}
                     gridTemplateColumns={isSmallerThan640 ? "repeat(1,minmax(0,1fr))" : isSmallerThan1024 ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))"}
                     gap={"1rem"}
                     >
                      {
                        toppingMenu.map((list, key)=> 
                        (
                          <Box key={key} fontSize={"1.125rem"} lineHeight={"1.75rem"} >
                          {list.items.map((item, i)=> (
                            <Text key={i} className="Hanleysans" width={"100%"} display={"block"}>{item}</Text>
                          ))}
                        </Box>
                        )
                      )
                      }
                      
                     </Box>
                     <Box fontSize={"1.25rem"} className="Hanleysans" color={"black"} lineHeight={"1.75rem"} textAlign={isSmallerThan1024 ? "center" : "start"} padding={".75rem"}>
                             additional toppings 3 cedis each
                     </Box>
              </Box>
      </Box>
       </Box>
      </Box> */}

      <Box
      padding={"1.25rem"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      >
     <Button border={"none"} bg={"rgb(200, 36, 56)"} _hover={{bg: "#9b2c2c"}} color={"white"} className="TabernaSans-Regular" padding={"21px 5rem"} fontSize={"1.25rem"} lineHeight={"1.75rem"}>View Menu</Button>
      </Box>



    </Box>

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
