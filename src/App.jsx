import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="flex flex-col gap-20 items-center justify-center bg-bodyBackgroundColor phone:gap-10">
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
