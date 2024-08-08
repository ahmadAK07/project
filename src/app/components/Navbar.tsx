'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import {
  Flex,
  Box,
  useDisclosure,
  Image,
  useMediaQuery,
  Button,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

const Navbar = () => {
  const [navHeight, setNavHeight] = useState("80px");
  const [isSmallerThan1280] = useMediaQuery('(max-width: 1280px)');
  const [isSmallerThan769] = useMediaQuery('(max-width: 769px)');
  const [isSmallerThan1024] = useMediaQuery('(max-width: 1024px)');
  const [isSmallerThan640] = useMediaQuery('(max-width: 640px)');
  const [isSmallerThan450] = useMediaQuery('(max-width: 450px)');
  const mediaQueries = { isSmallerThan1280, isSmallerThan1024, isSmallerThan769, isSmallerThan450 };


  const links = ['Home', 'About', 'Contact'];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showNav, setShowNav] = useState(true);



  return (
    <Box boxShadow={'md'} bg={'white'} position={'fixed'} zIndex={888} w={'100%'} display={'flex'} justifyContent={'center'}>
      <Flex
        bg={'white'}
        w={isSmallerThan1280 ? "100%" : "1280px"}
        color={'#bb2228'}
        fontFamily={'Roboto'}
        fontWeight={500}
        fontSize={'16px'}
        textTransform={'uppercase'}
        px={'20px'}
        alignItems={'center'}
        justifyContent={'space-between'}
        h={`${navHeight}`}
      >
        <Link href="/">
          <Image ml={isSmallerThan769 ? -1 : ''} w={isSmallerThan769 ? 200 : 250} src={"./logo.png"} alt="Logo" />
        </Link>

        <Link href="/">
          <Button
            bg={'#992428'}
            px={isSmallerThan769 ? 4 : 6}
            py={isSmallerThan769 ? 3 : 5}
            fontWeight={600}
            textTransform={'uppercase'}
            border={'1px solid transparent'}
            color={'white'}
            fontSize={isSmallerThan769 ? "14px" : "18px"}
            _hover={{ color: '#992428', background: "white", border: '1px solid #992428' }}
          >
            Shop Now!
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
