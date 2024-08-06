"use client";
import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaXmark } from "react-icons/fa6";
import NavSlider from "./NavSlider";
import Link from "next/link";

// Use props interface in functional component
export default function MenuTable() {
  const [isSmallerThan1280] = useMediaQuery("(max-width: 1280px)");
  const [isSmallerThan769] = useMediaQuery("(max-width: 769px)");
  const [isSmallerThan1024] = useMediaQuery("(max-width: 1024px)");
  const [isSmallerThan450] = useMediaQuery("(max-width: 450px)");
  const [isSmallerThan640] = useMediaQuery("(max-width: 640px)");
  const mediaQueries = {
    isSmallerThan1280,
    isSmallerThan1024,
    isSmallerThan769,
    isSmallerThan450,
  };
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
    title: "smash burgers",
    items: [
      { name: "Hamburger", price: 85 , isExtra: false},
      { name: "Cheeseburger", price: 95 , isExtra: false},
      { name: "Bacon Burger", price: 105 , isExtra: false},
      { name: "Bacon Cheeseburger", price: 115 , isExtra: false},
      { name: "Double Hamburger", price: 105 , isExtra: false},
      { name: "Double Cheeseburger", price: 120 , isExtra: false},
      { name: "Double Bacon Burger", price: 130 , isExtra: false},
      { name: "Double Bacon Cheeseburger", price: 140 , isExtra: false},
      { name: "Add an Egg", price: 8 , isExtra: true},
    ],
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Veggie Sandwich", price: 70  , isExtra: false},
      { name: "Cheese Sandwich", price: 70  , isExtra: false},
      { name: "Grilled Cheese", price: 70  , isExtra: false},
      { name: "Bacon Grilled Cheese", price: 80  , isExtra: false},
      { name: "Bacon Egg Cheese", price: 80  , isExtra: false},
      { name: "Add an Egg", price: 8  , isExtra: true},
    ],
  },
  {
    title: "Hot dogs",
    items: [
      { name: "Hot Dog", price: 80  , isExtra: false},
      { name: "Cheese Dog", price: 80  , isExtra: false},
      { name: "Bacon Dog", price: 90  , isExtra: false},
      { name: "Bacon Cheese Dog", price: 90  , isExtra: false},
    ],
  },
 
];
  const fullMenu2: FullMenu = [
    {
        title: "Drinks",
        items: [
          { name: "Water", price: [5, 10] , isExtra: false},
          { name: "Sodas & Juices", price: [15, 30]  , isExtra: false},
          { name: "Bottled Beer", price: [20, 30]  , isExtra: false},
        ],
      },
      {
        title: "Fries",
        items: [
          { name: "BYO2 Style or Spicy Cajun Style", price: 0  , isExtra: true},
          { name: "Little Fries", price: 30  , isExtra: false},
          { name: "Large Fries", price: 40  , isExtra: false},
        ],
      },
      {
        title: "the 80/20 combo meal",
        items: [
          { name: "Choose any 1 Burger, Sandwich, Hot Dog and Fries", price: 0 , isExtra: true},
          { name: "Get a Free Drink", price: 0 , isExtra: false},
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




  return (
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
          alignItems={"center"}
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
              height={isSmallerThan769 ? "auto" : "630px"}
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
          alignItems={"center"}
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
              height={isSmallerThan769 ? "auto" : "630px"}
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
      <Box 
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
      </Box>

      <Box
      padding={"1.25rem"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      >
     <Button bg={"rgb(200, 36, 56)"} _hover={{bg: "#9b2c2c"}} color={"white"} className="TabernaSans-Regular" padding={"21px 5rem"} fontSize={"1.25rem"} lineHeight={"1.75rem"}>View Menu</Button>
      </Box>



    </Box>
  );
}
