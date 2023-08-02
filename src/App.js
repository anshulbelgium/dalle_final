import React from "react";
import { useState } from "react";
import Header from "./Component/Header";
import {Routes , Route} from "react-router-dom"
import History from "./Component/History";
import ImageGenerator from "./Component/ImageGenerator";
import Result from "./result";
import MyProvider  from "./Context/ResultContext";
import ImageDetail from "./ImageDetail";
import Footer from "./Component/Footer";
import Missing from "./Component/Missing";
import About from "./Component/About"
import Privacypolicy from "./Component/Privacypolicy";
import TermsCondition from "./Component/TermsCondition";
import Contactus from "./Component/Contactus";
import { useRef } from "react";

const App = () => {
  const HowItWork = useRef();
  const Faq = useRef();

  const handleHowItWork = () => HowItWork.current.scrollIntoView();
  const handleFaq = () => Faq.current.scrollIntoView();

  return (
    <div className="main-wrapper">
      <MyProvider>
        <Header handleHowItWork={handleHowItWork} handleFaq={handleFaq} />
        <Routes>
          <Route path = "/" element = {<ImageGenerator HowItWorkSec={HowItWork} FaqSec={Faq} />}/>
          <Route path = "/history" element = {<History />}/>
          <Route path="/result" element={<Result />} />
          <Route path="/images" element={<ImageDetail />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/privacy-policy" element={<Privacypolicy />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/terms-and-condition" element={<TermsCondition />} />
          <Route path="*" element= {<Missing/>} />
        </Routes>
        <Footer />
      </MyProvider>
    </div>
  );
}

export default App;
