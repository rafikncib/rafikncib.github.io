import About from "./components/About";
import Contact from "./components/Contact";
import EducExper from "./components/EducExper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Services from "./components/Services";
import Works from "./components/Works";

import data from "../src/assets/js/data.json";
const App=()=>{
  return(
    <div id="portfolio" className="seriffont pt-5" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
      <Header />
      <Introduce />
      <About />
      <EducExper />
      <Services />
      <Works projects={data}/>
      <Contact />
      <Footer />
    </div>
  )
}
export default App;