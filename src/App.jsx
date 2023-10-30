import Navbar from "./component/Navbar";
import Header from "./component/Header";
import About from "./component/About";
import Services from "./component/Services";
import Portfolio from "./component/Portfolio";
import Team from "./component/teamSlider/Team";
import Client from "./component/client/Client";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  


  return (
    <>
      <div className="body">
        <Navbar />

        <div className="content">
          <Header />

          <About />

          <Services />

          <Portfolio />

          <Team />

          <Client />

          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
