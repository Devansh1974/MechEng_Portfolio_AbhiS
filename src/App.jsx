import Layout from './components/Layout';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </Layout>
  );
}

export default App;
