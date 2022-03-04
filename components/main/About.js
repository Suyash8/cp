import { Flex, Heading } from "@chakra-ui/react";

export default function About() {
  return <Heading2 />;
}

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
        ABOUT
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
