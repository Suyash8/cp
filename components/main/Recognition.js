import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { ArrowCircleLeft, ArrowCircleRight } from "./arrow";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
let setting = {
  dots: false,
  focusOnSelect: true,
  centerMode: true,
  arrows: true,
  fade: false,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  className: "center",
  swipeToSlide: true,
  centerPadding: "50px",
  pauseOnHover: true
};

export default function Recognition() {
  let [settings, setSettings] = useState({
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    arrows: true,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    centerPadding: useBreakpointValue({
      xs: "50px",
      sm: "60px",
      base: "80px",
      md: "100px",
      lg: "300px"
    })
  });

  const [slider, setSlider] = useState(null);

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "Design Projects 1",
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      title: "Design Projects 2",
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80"
    },
    {
      title: "Design Projects 3",
      text:
        "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    }
  ];

  return (
    <ImgBone>
      <Heading2 />
      {/* Left and right buttons */}
      <ArrowBtn slider={slider} />
      {/* Slider */}
      <Slider
        {...settings}
        className={"relative max-h-[calc(100vh-7rem)]"}
        ref={(slider) => setSlider(slider)}
      >
        {cards.map((card, index) => (
          <ImgCard card={card} index={index} key={card} />
        ))}
      </Slider>
    </ImgBone>
  );
}

const ImgBone = ({ children }) => {
  return (
    <Box
      id={"Recognition"}
      as={"section"}
      position={"relative"}
      minH={"screen"}
      // height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {children}
    </Box>
  );
};

const ImgCard = ({ index, card }) => {
  return (
    <Box
      key={index}
      // height={"6xl"}
      maxH={"95vh"}
      position="relative"
      mx={"2rem"}
      borderRadius={"3rem"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundImage={`url(${card.image})`}
    >
      {/* This is the block you need to change, to customize the caption */}
      <Container size="container.lg" height="600px" position="relative">
        <Stack
          spacing={6}
          w={"full"}
          maxW={"lg"}
          position="absolute"
          top="50%"
          transform="translate(0, -50%)"
        >
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            {card.title}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color="GrayText">
            {card.text}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const ArrowBtn1 = ({ slider }) => {
  // As we have used custom buttons, we need a reference variable to
  // change the state

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <>
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="outline"
        position="absolute"
        color={"black"}
        _hover={""}
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ArrowCircleLeft size="40px" style={{ color: "black" }} />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="outline"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ArrowCircleRight size="40px" />
      </IconButton>
    </>
  );
};

const ArrowBtn = ({ slider }) => {
  // const top = useBreakpointValue({ base: "90%", md: "50%" });
  // const side = useBreakpointValue({ base: "30%", md: "40px" });
  return (
    <>
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={10}
        top={"50%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={10}
        top={"50%"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
    </>
  );
};

const Heading2 = () => {
  return (
    <Flex
      flexDir={"column"}
      gap={3}
      align={"center"}
      py={3}
      color={"white"}
      mx={2}
      // className="flex flex-col gap-3 items-center py-3 text-white mx-2"
    >
      <Heading
        as={"h2"}
        pt={"2rem"}
        mx={4}
        my={6}
        h={"100%"}
        fontSize={{ xs: "xl", md: "2xl" }}
        fontWeight={"bold"}
        color={"gray.900"}
        maxW={"min"}
        // className="mx-4 my-6 h-full flex flex-row text-xl items-center justify-center font-bold text-gray-900 max-w-min"
      >
        RECOGNITION
      </Heading>
      {/* <Text
        fontSize={{ xs: "0.8rem", sm: "1.6rem", base: "2.4rem", lg: "4rem" }}
        fontWeight={"medium"}
        textAlign={"center"}
        // className="font-medium text-center"
      >
        Reach out for support or just say hello
      </Text> */}
    </Flex>
  );
};
