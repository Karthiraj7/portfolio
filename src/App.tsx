import './App.css';
import Home from './Component/home/home';
import About from './Component/about me/about';
import Skills from './Component/skill/skill';
import ContactForm from './Component/contact/contact';
import Footer from './Component/footer/footer';
import Navbar from './Component/header/header';
import Resume from './Component/Resume/Resume';

function App() {
  
  return (
    <div className="App">
      <section>
        <Navbar/>
      </section>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>
      <section id="skill">
        <Skills/>
      </section>
      <section>
        <ContactForm/>
      </section>
      <section>
        <Footer/>
      </section>
      <section>
        <Resume/>
      </section>
    </div>
  );
}

export default App;
