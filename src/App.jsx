import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import Skills from "./components/Skills";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Profile from "./components/Profile";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <main className="flex flex-col gap-20 items-center justify-center bg-bodyBackgroundColor phone:gap-10">
          <Header />
          <Hero />
          <Skills />
          <Profile />
        </main>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
