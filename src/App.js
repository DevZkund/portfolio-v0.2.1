import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Services from "./components/Services";
import emailjs from "emailjs-com";
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
  return (
    <div className="flex flex-col min-h-dvh lg:px-16 md:px-24 px-8">
      <Header />
      <main className="flex-1">
        <Portfolio />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
