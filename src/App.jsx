import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import StatusBar from "./components/StatusBar";
import { FullPageScrollProvider } from "./FullPageScrollContext";
import "./App.css";

export default function App() {
  return (
    <FullPageScrollProvider>
      <div className="app">
        <Header />
        <SideNav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <StatusBar />
      </div>
    </FullPageScrollProvider>
  );
}
