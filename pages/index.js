// import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
export default function Home() {
  const [pages, setPages] = useState([
    { name: "Home", isActive: true },
    { name: "About" },
    { name: "Products" },
    { name: "Recognition" },
    { name: "Contact" }
  ]);
  function setHome(home) {
    setPages((prevState) => {
      let page = [];
      for (let i = 0; i < prevState.length; i++) {
        page.push({
          ...prevState[i],
          isActive: prevState[i].name === home ? true : false
        });
      }

      localStorage.setItem("pages", JSON.stringify(page));
      return page;
    });
  }
  useEffect(() => {
    setPages((prevState) => {
      const page = localStorage.getItem("pages")
        ? JSON.parse(localStorage.getItem("pages"))
        : prevState;
      return page;
    });
  }, []);

  return (
    <div>
      {/* Header */}
      <Header pages={pages} setHome={setHome} />

      {/* Main */}
      <Main pages={pages} setHome={setHome} />

      {/* Footer */}
      <Footer pages={pages} setHome={setHome} />

      {/* <div className="h-[500vh]" /> */}
    </div>
  );
}
