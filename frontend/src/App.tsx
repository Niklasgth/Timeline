import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Timeline from "./components/timeline/Timeline";
import "./styles/global.css";

function App() {
  const [themes, setThemes] = useState<string[]>([]);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  // Hämta teman från backend när appen startar
  useEffect(() => {
    fetch("http://localhost:8080/api/timeline/themes")
      .then((res) => res.json())
      .then((data: string[]) => {
        setThemes(data);
        if (data.length > 0) setSelectedTheme(data[0]);
      })
      .catch((err) => console.error("Fel vid hämtning av teman:", err));
  }, []);

  return (
    <>
      <Header themes={themes} onSelectTheme={setSelectedTheme} />
      <main>
        {selectedTheme ? <Timeline theme={selectedTheme} /> : <p>Välj ett tema</p>}
      </main>
      <Footer />
    </>
  );
}

export default App;
