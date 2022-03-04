import Home from "./main/Home";
// import Products from './main/Products';
import Recognition from "./main/Recognition";
import Contact from "./main/Contact";
import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import About from "./main/About";
import Products from "./main/Products";
// import About from './main/About';

export default function Main({ pages, setHome }) {
  let page = {};
  for (let i = 0; i < pages.length; i++) {
    if (pages[i].isActive) {
      page = pages[i];
    }
  }

  let content = page.name;
  if (page.name === "Home") {
    content = <Home pages={page} setHome={setHome} />;
    // }
    // } else if (page.name === 'About') {
    //   content = <About pages={page} />;
    // } else if (page.name === 'Products') {
    //   content = <Products pages={page} />;
  } else if (page.name === "Recognition") {
    content = <Recognition pages={page} />;
  } else if (page.name === "Contact") {
    content = <Contact pages={page} />;
  }

  const [height, setHeight] = useState(0);
  useEffect(() => {
    const updateDimensions = () => {
      const footer = document.querySelector("#footer");
      setHeight(footer.clientHeight);
    };
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  content = (
    <>
      <Home pages={page} setHome={setHome} />
      <About pages={page} setHome={setHome} />
      <Products pages={page} setHome={setHome} />

      <Recognition pages={page} />
      <Contact pages={page} />
      <Container bg={"transparent"} h={height + "px"}></Container>
    </>
  );
  return (
    <Container
      as={"main"}
      w={"100%"}
      bg={"gray.700"}
      maxW={"max"}
      m={0}
      p={0}
      pb={50}
      mt={16}
      // className="pb-48 mt-16"
    >
      {content}
    </Container>
  );
}
