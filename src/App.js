import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
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
    <Router>
      <div className="flex flex-col min-h-screen bg-background-dark">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
