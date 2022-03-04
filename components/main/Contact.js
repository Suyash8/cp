import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import db from "./firebase";
import {
  Box,
  Flex,
  Heading,
  Text,
  // Container,
  Link,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button
} from "@chakra-ui/react";
import { Annotation, AtSymbol, Subject, UserCircle } from "./arrow";

export default function Contact(props) {
  return (
    <Flex
      borderTop={"whitesmoke"}
      mt={2}
      as={"section"}
      // bg={"gray.600"}
      id={"Contact"}
      flexDir={"column"}
      w={"100%"}
      justify={"end"}
      // className="w-full flex flex-col justify-end"
    >
      <Heading2 />
      <Lg props={props} />
    </Flex>
  );
}
function Heading2() {
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
        mx={4}
        my={6}
        h={"100%"}
        fontSize={{ xs: "xl", md: "2xl" }}
        fontWeight={"bold"}
        color={"gray.900"}
        maxW={"min"}
        // className="mx-4 my-6 h-full flex flex-row text-xl items-center justify-center font-bold text-gray-900 max-w-min"
      >
        CONTACT
      </Heading>
      <Text
        fontSize={{ xs: "0.8rem", sm: "1.6rem", base: "2.4rem", lg: "4rem" }}
        fontWeight={"medium"}
        textAlign={"center"}
        // className="font-medium text-center"
      >
        Reach out for support or just say hello
      </Text>
    </Flex>
  );
}

function Lg(props) {
  return (
    <Box mx={"auto"} maxW={"90vw"}>
      <Flex
        flexDir={{ xs: "column", lg: "row" }}
        px={"1.5rem"}
        pt={{ xs: "0.5rem", lg: "2.5rem" }}
        pb={{ xs: "0.5rem", lg: "2rem" }}
        shadow={"xl"}
        borderWidth={2}
        borderColor={"gray.900"}
        rounded={"3xl"}
        bg={"gray.800"}
        // minW={{ xs: "100vw", sm: "90vw" }}
        maxW={"100vw"}
        w={"100%"}
        mx={"auto"}
        gap={"1rem"}
        className={
          "lg:divide-x lg:divide-y-0 divide-gray-300 lg:pt-8 xs:divide-y xs:divide-x-0"
        }
      >
        <Form props={props} />
        <Whereabouts />
      </Flex>
    </Box>
  );
}

function MyModal({ closeModal, isOpen, isError }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen backdrop-blur-md px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-200"
                >
                  {isError
                    ? "Message could not be sent"
                    : "Message sent successfully"}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {isError
                      ? "Your message could not be sent. Check your internet connection and reload the page before sending the message again. The error is logged in the console."
                      : "Your message has been successfully submitted. You will recieve an email as soon as we review your message."}
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium ${
                      isError
                        ? "text-red-900 bg-red-200"
                        : "text-blue-900 bg-blue-200"
                    } border border-transparent rounded-md ${
                      isError ? "hover:bg-red-500" : "hover:bg-blue-500"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500`}
                    onClick={closeModal}
                  >
                    {isError ? "Ok" : "Got it, thanks!"}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function Form({ props }) {
  let [isOpen, setIsOpen] = useState(false);
  let [isError, setIsError] = useState(false);
  let [loading, setLoading] = useState({});

  let data = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  useEffect(() => {
    setUserData(
      localStorage.getItem("userData")
        ? JSON.parse(localStorage.getItem("userData"))
        : {
            name: "",
            email: "",
            subject: "",
            message: ""
          }
    );
  }, []);
  const [userData, setUserData] = useState(data);

  const updateForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData((prevData) => {
      let data = {
        ...prevData,
        [name]: value
      };
      localStorage.setItem("userData", JSON.stringify(data));
      return data;
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading({ isLoading: true });
    try {
      const docRef = await addDoc(collection(db, "contacts"), { userData });

      console.log("Document written with ID: ", docRef.id);
      setIsError(false);
      setUserData({ name: "", email: "", subject: "", message: "" });
      localStorage.removeItem("userData");
    } catch (e) {
      console.error("Error adding document: ", e);
      setIsError(true);
    }
    setIsOpen(true);
    setLoading("");
  }

  return (
    <>
      <div className="py-8 text-base min-w-lg md:min-w-2xl leading-7 space-y-6 text-gray-600">
        <Heading
          as={"h3"}
          textTransform={"uppercase"}
          fontWeight={"medium"}
          fontSize={"sm"}
          mb={"2rem"}
          letterSpacing={"0.1em"}
          color={"white"}
          // className="uppercase font-medium text-sm mb-8 tracking-widest text-white"
        >
          Send us a message
        </Heading>
        <Flex
          as={"form"}
          direction={"column"}
          minW={{ xs: 0, md: "40ch" }}
          gap={"0.5rem"}
          w={"100%"}
          // className="flex flex-col min-w-0 md:min-w-[40ch] gap-2 w-full"
          onSubmit={handleSubmit}
        >
          <FormControl isRequired>
            <FormLabel
              display={"block"}
              fontSize={"md"}
              color={"gray.100"}
              // className="block font-medium text-gray-100"
              htmlFor="name"
            >
              Name
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <UserCircle />
              </InputLeftElement>

              <Input
                id="name"
                name="name"
                type="text"
                px={"0.75rem"}
                rounded={"lg"}
                w={"100%"}
                color={"gray.100"}
                borderColor={"gray.300"}
                bg={"gray.700"}
                mb={"0.25rem"}
                focusBorderColor={"gray.300"}
                // className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
                className={"focus:ring-gray-500"}
                placeholder="John Doe"
                value={userData.name}
                onChange={updateForm}
                required
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              display={"block"}
              fontSize={"md"}
              color={"gray.100"}
              // className="block font-medium text-gray-100"
              htmlFor="email"
            >
              Email
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <AtSymbol />
              </InputLeftElement>

              <Input
                id="email"
                name="email"
                type="email"
                px={"0.75rem"}
                rounded={"lg"}
                w={"100%"}
                color={"gray.100"}
                borderColor={"gray.300"}
                bg={"gray.700"}
                mb={"0.25rem"}
                focusBorderColor={"gray.300"}
                // className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
                className={"focus:ring-gray-500"}
                placeholder="john@doe.com"
                value={userData.email}
                onChange={updateForm}
                required
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel
              display={"block"}
              fontSize={"md"}
              color={"gray.100"}
              // className="block font-medium text-gray-100"
              htmlFor="subject"
            >
              Subject
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <Subject />
              </InputLeftElement>

              <Input
                id="subject"
                name="subject"
                type="text"
                px={"0.75rem"}
                rounded={"lg"}
                w={"100%"}
                color={"gray.100"}
                borderColor={"gray.300"}
                bg={"gray.700"}
                mb={"0.25rem"}
                focusBorderColor={"gray.300"}
                // className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
                className={"focus:ring-gray-500"}
                placeholder="just a hi"
                value={userData.subject}
                onChange={updateForm}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired className="">
            <FormLabel
              display={"block"}
              fontSize={"md"}
              color={"gray.100"}
              // className="block font-medium text-gray-100"
              htmlFor="message"
            >
              Message
            </FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"}>
                <Annotation />
              </InputLeftElement>
              <Textarea
                id="message"
                name="message"
                px={"0.75rem"}
                pl={"2.4rem"}
                rounded={"lg"}
                w={"100%"}
                color={"gray.100"}
                borderColor={"gray.300"}
                resize={"vertical"}
                bg={"gray.700"}
                mb={"0.25rem"}
                maxH={"50ch"}
                minH={"10ch"}
                focusBorderColor={"gray.300"}
                // className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
                className={"focus:ring-gray-500"}
                placeholder="hi"
                value={userData.message}
                onChange={updateForm}
                required
              />
            </InputGroup>
          </FormControl>
          <Button
            {...loading}
            // isLoading
            // loadingText={"Submitting"}

            type="submit"
            w={"full"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            // py={"0.5rem"}
            px={"1rem"}
            borderColor={"transparent"}
            rounded={"md"}
            fontSize={"md"}
            color={"gray.100"}
            bg={"green.600"}
            _hover={{
              bg: "green.700",
              borderWidth: 3,
              borderColor: "green.500"
            }}
            _focus={{
              bg: "green.700",
              borderWidth: 3,
              borderColor: "green.500"
            }}
            // className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-gray-100  bg-green-600
            // hover:bg-gray-500 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Submit
          </Button>
        </Flex>
        <MyModal
          closeModal={() => setIsOpen(false)}
          isOpen={isOpen}
          isError={isError}
        />
      </div>
    </>
  );
}
function Whereabouts({ props }) {
  let data = [
    {
      name: "Where to find us",
      type: "link",
      link:
        "https://www.google.com/maps/place/Computer+Paradise/@26.7166353,88.4190114,17z/data=!4m5!3m4!1s0x39e4416f20fd3b41:0xbe77cdd11fd07b4b!8m2!3d26.7166016!4d88.4212002",
      data: [
        "Beside Hotel Vinayak Building, 1st Floor",
        "Hill Cart Road, Siliguri - 734 001",
        "West Bengal, India"
      ]
    },
    {
      name: "Email us at",
      type: "email",
      data: [
        "support@computerparadisesa.com",
        "akhilsharma@computerparadisesa.com",
        "somansharma@computerparadisesa.com"
      ]
    },
    {
      name: "Call us at",
      type: "phone",
      data: ["+91 89428 60901", "+91 97331 44909"]
    }
  ];

  return (
    <Box
      py={"2rem"}
      fontWeight={"medium"}
      px={"1rem"}
      color={"white"}
      // className="py-8 leading-7 font-medium text-base px-4 text-white"
    >
      <Heading
        as={"h3"}
        textTransform={"uppercase"}
        fontWeight={"medium"}
        fontSize={"sm"}
        mb={"2rem"}
        letterSpacing={"0.1em"}
        color={"white"}
        // className="uppercase font-medium text-sm mb-8 tracking-widest text-white"
      >
        Contact info
      </Heading>
      <Box className="divide-y divide-gray-300">
        {data.map((data) => (
          <Section props={data} key={data.type} />
        ))}
      </Box>
    </Box>
  );
}

function Email(props) {
  return (
    <>
      <Link
        decoration={"none"}
        isExternal
        href={`mailto:${props.data}`}
        _hover={{ textDecoration: "none" }}
      >
        {props.data}
      </Link>
      <br />
    </>
  );
}

function Data(props) {
  return (
    <>
      {props.data}
      <br />
    </>
  );
}

function Heading1(props) {
  return (
    <Heading
      as={"h4"}
      color={"green.300"}
      mb={"1rem"}
      mt={"1.25rem"}
      fontSize={"md"}
      fontWeight={"300"}
      // className="text-green-300 mb-4 mt-5 font-medium "
    >
      {props.name}
    </Heading>
  );
}

function Add({ data, link }) {
  return (
    <Link
      decoration={"none"}
      isExternal
      href={link}
      _hover={{ textDecoration: "none" }}
    >
      <Data data={data} key={data} />
    </Link>
  );
}

function Section({ props }) {
  return (
    <Box>
      <Heading1 name={props.name} />
      <Text
        mb={"1.25rem"}
        // className="mb-5"
      >
        {props.type === "email"
          ? props.data.map((data) => <Email data={data} key={data} />)
          : props.type === "link"
          ? props.data.map((data) => (
              <Add data={data} link={props.link} key={data} />
            ))
          : props.data.map((data) => <Data data={data} key={data} />)}
      </Text>
    </Box>
  );
}
