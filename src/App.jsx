import Home from "./components/Home";
import CompanyDescription from "./components/CompanyDescription";
import Contact from "./components/Contact";
import Header from "./components/Header";
import ServicesProvided from "./components/ServicesProvided";
import "./styles/globals.css";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const classMap = {
      slideInLeft: "slideInLeftActive",
      toAppear: "toAppearActive",
      slideInRight: "slideInRightActive",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetClass = Object.keys(classMap).find((cls) =>
            entry.target.classList.contains(cls),
          );

          const activeClass = classMap[targetClass];

          if (activeClass) {
            if (entry.isIntersecting) {
              entry.target.classList.add(activeClass);
            }
          }
        });
      },
      { threshold: 0.1 },
    );

    const selectors = Object.keys(classMap)
      .map((cls) => `.${cls}`)
      .join(", ");
    const elements = containerRef.current?.querySelectorAll(selectors);

    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="wrapper">
      <Header />
      <Home />
      <CompanyDescription
        slideInLeft={"slideInLeft"}
        slideInRight={"slideInRight"}
      />
      <ServicesProvided
        className={"slideInLeft"}
        toAppear={"toAppear"}
        slideInRight={"slideInRight"}
      />
      <Contact toAppear={"toAppear"} />
      <Footer />
    </div>
  );
}

export default App;
