import { ChevronDownIcon } from "@heroicons/react/outline";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Link
} from "@chakra-ui/react";

export default function Home(props) {
  return (
    <Box as={"section"} id={"Home"}>
      <div className="bg-gray-900">
        <Hero2 handleClick={props.setHome} />
      </div>
      {/* <div className="min-h-screen">Home</div>
      <div className="min-h-screen">Home</div> */}
    </Box>
  );
}

function Hero2({ handleClick }) {
  return (
    <Container maxW={"7xl"} minH="calc(100vh - 4rem)" id={"hero"}>
      <Box
        bg={"gray.900"}
        className="absolute -z h-20 w-screen -top-20 right-0"
      />
      <Stack
        position={"relative"}
        align={"center"}
        spacing={{ xs: 8, lg: 10 }}
        pb={{ xs: 20, lg: 28 }}
        pt={10}
        direction={{ xs: "column", lg: "row" }}
      >
        <Stack flex={1} spacing={{ xs: 5, lg: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ xs: "4xl", base: "3xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"rred"}>
              We just not sell,
            </Text>
            <br />
            <Text
              as={"span"}
              position={"relative"}
              // _after={{
              //   content: "''",
              //   width: "full",
              //   height: "30%",
              //   position: "absolute",
              //   bottom: 1,
              //   left: 0,
              //   bg: "rred",
              //   zIndex: 1
              // }}
            >
              we develop relations
            </Text>
          </Heading>
          {/* <Text color={'gray.500'}>
            Snippy is a rich coding snippets app that lets you create your own
            code snippets, categorize them, and even sync them in the cloud so
            you can use them anywhere. All that is free!
          </Text> */}
          <Stack
            spacing={{ xs: 6, base: 4 }}
            direction={{ xs: "column", md: "row" }}
          >
            <Link p={0} w={"100%"} href={"#Contact"}>
              <Button
                rounded={"full"}
                w={"100%"}
                size={"lg"}
                fontWeight={"normal"}
                onClick={() => handleClick("Contact")}
                px={6}
                colorScheme={"red"}
                bg={"rred"}
                _hover={{ bg: "red.500" }}
              >
                Contact us
              </Button>
            </Link>
            <Link p={0} w={"100%"} href={"#Products"}>
              <Button
                rounded={"full"}
                w={"100%"}
                size={"lg"}
                fontWeight={"normal"}
                onClick={() => handleClick("Products")}
                px={6}
                bg={"gray.700"}
                _hover={{ bg: "gray.800" }}
                // leftIcon={<PlayIcon h={4} w={4} color={'gray.300'} />}
              >
                Catalogue
              </Button>
            </Link>
            <div className="my-1/2 absolute bottom-2 right-0 w-full flex items-center justify-center">
              <ChevronDownIcon className="w-8 flex items-center justify-center" />
            </div>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {/* <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={"red.400"}
          /> */}
          <Flex
            position={"relative"}
            // height={'300px'}
            width={"full"}
            justify={"center"}
          >
            <Image
              alt={"Hero Image"}
              maxW={"xl"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1cc3ed7cfea351718e7bec74/xcc-min.png"
              }
              // src={
              //   'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
              // }
            />
          </Flex>
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};

// function Hero(props) {
//   return (
//     <>
//       <div className="absolute -z h-20 bg-gray-900 w-full -top-20 right-0" />
//       <div className="min-h -z relative p-6 bg-gray-900">
//         <div className="grid mb-6 w-full md:grid-cols-2">
//           <div>
//             <h2 className="motto flex flex-col h-full justify-center b-8 text-6xl">
//               <div className="text-red">we just not sell,</div>
//               <div className="text-blue">we develop relations...</div>
//             </h2>
//             <div className="buttons md:flex">
//               <Button
//                 colorScheme="teal"
//                 variant="solid"
//                 onClick={() => props.handleClick('Contact')}
//               >
//                 Contact us
//               </Button>
//               <Button
//                 colorScheme="teal"
//                 variant="solid"
//                 onClick={() => props.handleClick('Products')}
//               >
//                 Catalogue
//               </Button>
//               {/* <button
//                 className="w-full rounded-lg my-2 block text-sm px-2 py-4 bg-black"
//                 onClick={() => props.handleClick('Contact')}
//               >
//                 Contact us
//               </button>
//               <button
//                 className="w-full rounded-lg my-2 block text-sm px-2 py-4 bg-white"
//                 onClick={() => props.handleClick('Products')}
//               >
//                 Catalogue
//               </button> */}
//             </div>
//           </div>
//           <img
//             className="min-w"
//             alt="hero_image"
//             src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1cc3ed7cfea351718e7bec74/xcc-min.png"
//           />
//         </div>
//         <div className="my-1/2 absolute bottom-2 right-0 w-full flex items-center justify-center">
//           <ChevronDownIcon className="w-8 flex items-center justify-center" />
//         </div>
//       </div>
//     </>
//   );
// }
