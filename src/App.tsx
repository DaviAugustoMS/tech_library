import { useState } from "react";
import "./App.scss";
import "./components/layout/backgroundTop.scss";
import "./components/layout/backgroundBottom.scss";
import { Logo } from "./components/Logo";
import { BookCase } from "./components/BookCase";
import { Lady } from "./components/Lady";
import { Clock } from "./components/Clock";
import books from "./utils/books";

function App() {
  const [booksState, setBooksState] = useState<any>(books);
  const [activeAbc, setActiveAbc] = useState(false);
  const [activeColors, setActiveColors] = useState(false);
  const [activeSizes, setActiveSizes] = useState(false);

  const handleAlphabet = () => {
    const alphabet = books.sort((a, b) => a.type.localeCompare(b.type));
    setBooksState(alphabet);
    setActiveAbc(!activeAbc);
    setActiveColors(false);
    setActiveSizes(false);
  };

  const handleColors = () => {
    const colors = books.sort((a, b) => a.color.localeCompare(b.color));
    setBooksState(colors);
    setActiveColors(!activeColors);
    setActiveAbc(false);
    setActiveSizes(false);
  };

  const handleSizes = () => {
    const sizes = books.sort((a, b) => a.size.localeCompare(b.size));
    setBooksState(sizes);
    setActiveSizes(!activeSizes);
    setActiveAbc(false);
    setActiveColors(false);
  };

  const handleReset = () => {
    const reset = books.sort((a, b) => a.id - b.id);
    setBooksState(reset);
    setActiveAbc(false);
    setActiveColors(false);
    setActiveSizes(false);
  };

  return (
    <div className="App">
      <div className="bg-top">
        <Clock />
        <Logo />
      </div>
      <div className="bg-bottom">
        <BookCase data={booksState} />
        <Lady
          handleAlphabet={handleAlphabet}
          handleColors={handleColors}
          handleSizes={handleSizes}
          handleReset={handleReset}
          active={activeAbc}
          activeColors={activeColors}
          activeSizes={activeSizes}
        />
      </div>
    </div>
  );
}

export default App;
