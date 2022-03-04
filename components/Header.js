import {
  Box,
  Flex,
  Text,
  // IconButton,
  Button,
  Stack,
  // Collapse,
  // Icon,
  Link,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // useColorModeValue,
  // useBreakpointValue,
  Slide,
  // useDisclosusre,
  Image
} from "@chakra-ui/react";

import { Menu } from "@headlessui/react";
// import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header({ pages, setHome }) {
  return (
    <HeaderBone>
      <CP />
      <Nav pages={pages} setHome={setHome} />
    </HeaderBone>
  );
}

const HeaderBone = ({ children }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const hero = document.querySelector("#hero");
      setHeight(hero.clientHeight);
    };
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [bgCol, setBgCol] = useState("rgb(17 24 39 / 0.75)");
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        if (currentScrollPos <= height) {
          setBgCol("rgb(17 24 39 / 0.75)");
        }
      } else {
        if (currentScrollPos >= height) {
          setBgCol("rgb(209 213 219 / 0.4)");
        }
      }
      setPrevScrollpos(currentScrollPos);
    };
  }
  return (
    <Box as={"header"}>
      <Slide direction="top" in={true}>
        <Flex
          bg={"gray.900"}
          borderBottomWidth={1}
          backdropFilter={"blur(10px)"}
          as={"nav"}
          position={"relative"}
          w={"100%"}
          h={16}
          px={4}
        >
          {children}
        </Flex>
      </Slide>
    </Box>
  );
};

const Nav = ({ pages, setHome }) => {
  return (
    <>
      <Flex
        display={{ xs: "none", md: "flex" }}
        w={"100%"}
        justify={"end"}
        align={"center"}
        gap={1}
        px={6}
        // className="justify-end"
      >
        {pages.map((page) => (
          <LinkLarge
            key={page.name}
            name={page.name}
            isActive={page.isActive}
            handleClick={setHome}
          />
        ))}
      </Flex>
      <Hamburger pages={pages} setHome={setHome} display={true} />
    </>
  );
};

const LinkLarge = (props) => {
  const className = props.isActive
    ? "text-blue-800 border-b-4 border-blue-500"
    : "text-gray-300 hover:text-blue-500 transition duration-300";
  return (
    <Link href={"#" + props.name} my={1}>
      <button
        onClick={() => props.handleClick(props.name)}
        className={"pb-1 px-2 font-semibold " + className}
      >
        {props.name}
      </button>
    </Link>
  );
};

const Hamburger = ({ pages, setHome, display }) => {
  return (
    <Menu>
      <Flex
        w={"100%"}
        display={{ xs: "flex", md: "none" }}
        justify={"end"}
        align={"center"}
      >
        <Menu.Button>
          <Svg />
        </Menu.Button>
        <Menu.Items>
          <Slide direction={"top"} in={display} unmountOnExit>
            <Stack
              position={"absolute"}
              top={16}
              right={5}
              bg={"gray.600"}
              p={6}
              shadow={"2xl"}
              rounded={"lg"}
              // className={`mobile-menu`}
            >
              {pages.map((page) => (
                <LinkSmall
                  key={page.name}
                  name={page.name}
                  isActive={page.isActive}
                  handleClick={setHome}
                />
              ))}
            </Stack>
          </Slide>
        </Menu.Items>
      </Flex>
    </Menu>
  );
};

const CP = () => {
  return (
    <Link minW={"40%"}>
      <Flex
        align={"center"}
        justify={"start"}
        gap={2}
        px={6}
        mr={"auto"}
        as={"div"}
      >
        <Image
          mt={"0.7rem"}
          src={"PC.svg"}
          width={12}
          height={12}
          alt={"Logo"}
        />
        <Flex
          display={{ xs: "none", lg: "flex" }}
          fontWeight={"semibold"}
          fontSize={"1.7rem"}
        >
          <Text color={"bblue"}>Computer</Text>&nbsp;
          <Text color={"rred"}>Paradise</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

const LinkSmall = ({ isActive, name, handleClick }) => {
  const className = isActive
    ? {
        color: "gray.800",
        bg: "blue.500",
        fontWeight: "semibold"
      }
    : { color: "blue.500", bg: "transparant" };
  return (
    <Menu.Item>
      <Link href={"#" + name} p={0} my={1}>
        <Button
          as={"button"}
          onClick={() => handleClick(name)}
          w={"100%"}
          rounded={"lg"}
          size={"sm"}
          px={4}
          py={7}
          _hover={{ bg: "bblue", color: "gray.200", opacity: "100%" }}
          {...className}
          className={"transition duration-300"}
        >
          {name}
        </Button>
      </Link>
    </Menu.Item>
  );
};

const Svg = () => {
  return (
    <svg
      className="w-8 h-8 text-blue-500"
      x-show="!showMenu"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h14M4 18h16"></path>
    </svg>
  );
};
