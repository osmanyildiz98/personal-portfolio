import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import { LocalStorageProvider } from "./context/LocalStorageContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <LocalStorageProvider>
      <ThemeProvider>
        <LanguageProvider>
          <main className="flex flex-col gap-20 items-center justify-center bg-bodyBackgroundColor phone:gap-10 font-Inter">
            <Header />
            <Hero />
            <Routes>
              <Route path="/" element={<Skills />} />
            </Routes>
            <Profile />
            <Routes>
              <Route path="/" element={<Projects />} />
            </Routes>
            <Footer />
          </main>
        </LanguageProvider>
      </ThemeProvider>
    </LocalStorageProvider>
  );
}

export default App;
