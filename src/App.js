import About from "./components/About";
import Contact from "./components/Contact";
import EducExper from "./components/EducExper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Services from "./components/Services";
import Works from "./components/Works";

const App=()=>{
  return(
    <div id="portfolio" className="seriffont">
      <Header />
      <Introduce />
      <About />
      <EducExper />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;