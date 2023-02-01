import style from "./app.module.css";

import { Navbar } from "./components/navbar/Navbar";
import { Hello } from "./components/hello/Hello";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <Hello/>
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
