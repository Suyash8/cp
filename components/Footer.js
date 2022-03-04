import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Text,
  Link
} from "@chakra-ui/react";

export default function Footer({ pages, setHome }) {
  return (
    <Box
      id={"footer"}
      bg={"gray.900"}
      color={"gray.200"}
      position={"absolute"}
      bottom={0}
      right={0}
      left={0}
      w={"100%"}
    >
      <Container
        as={Flex}
        flexWrap={"wrap"}
        flexDir={"row"}
        justify={"center"}
        pt={5}
      >
        {pages.map((page) => (
          <LinkFooter key={page.name} name={page.name} handleClick={setHome} />
        ))}
      </Container>
      <Box pb={5}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.700",
            flexGrow: 1,
            mr: 8
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.700",
            flexGrow: 1,
            ml: 8
          }}
        >
          <Logo />
        </Flex>
        <Text pt={4} fontSize={"sm"} textAlign={"center"}>
          Computer Paradise &reg; 2005
        </Text>
      </Box>
    </Box>
  );
}

const Logo = (props) => {
  return (
    <Image
      // mt={"0.7rem"}
      src={"PC.svg"}
      width={12}
      height={12}
      alt={"Logo"}
    />
  );
};

const LinkFooter = ({ name, handleClick }) => {
  return (
    <Link
      p={0}
      href={"#" + name}
      _hover={{
        textDecoration: "none"
      }}
    >
      <Button
        onClick={() => handleClick(name)}
        fontWeight={"500"}
        fontSize={"md"}
        bg={"transparent"}
        p={0}
        _hover={{
          bg: "transparent",
          textDecoration: "none"
        }}
      >
        {name}&nbsp;
        {name !== "Contact" && "/"}
        &nbsp;
      </Button>
    </Link>
  );
};
