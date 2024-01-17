import './app.module.css';

import { Hello } from './components/hello/Hello';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Portfolio } from './components/portfolio/Portfolio';

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
