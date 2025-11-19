import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import HorizontalScroll from "./pages/HorizontalScroll";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <Header />
      <Home />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Testimonials /> */}
      {/* <HorizontalScroll /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;