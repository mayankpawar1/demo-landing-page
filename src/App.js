import React, { useState } from 'react';
import Banner from './components/banner';
import Header from './components/header/header';
import HeaderTop from './components/header/headerTop';
import AccordionItem from './components/accordion';
import Breadcrumb from './components/BreadCrumb';
import MegaMenu from './components/header/MegaMenu';
import Testimonial from './components/testimonial';
import Services from './components/services';
import AwardHighlightSection from './components/award';
import CaseStudyHighlight from './components/casestudy';
import Footer from './components/footer';
import BookADemoForm from './components/bookform';

function App() {
  
  const [showMenu, setShowMenu] = useState(false);

  const toggleMegaMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="md:flex-row min-h-screen">
      <HeaderTop/>
      <Header toggleMegaMenu={toggleMegaMenu} />
      {showMenu ? <MegaMenu/> : "" }
      <main id="site-main" className="overflow-y-auto">
        <Breadcrumb/>
        <Banner/>
        <Testimonial/>
        <Services/>
        <AccordionItem/>
        <AwardHighlightSection/>
        <CaseStudyHighlight/>
        <BookADemoForm/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;