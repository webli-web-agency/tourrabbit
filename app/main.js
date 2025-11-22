"use client";

import Header from "../components/header.js";
import Footer from "../components/footer.js";
import HomeMain from "../components/home/index.js";
import AboutMain from "../components/about/index.js";
import ContactMain from "../components/contact/index.js";
import TestimonialsMain from "../components/testimonials/index.js";
import PackagesMain from "../components/packages/index.js";
import ServicesMain from "../components/services/index.js";

import SmoothScroll from "../components/smoothScroll"; // ADD THIS

const Main = () => {
  return (
    <SmoothScroll>
      <main className="relative w-screen overflow-x-hidden overflow-y-visible">
        <Header />
        <HomeMain />
        <AboutMain />
        <ServicesMain />
        <PackagesMain />
        <TestimonialsMain />
        <ContactMain />
        <Footer />
      </main>
    </SmoothScroll>
  );
};

export default Main;
