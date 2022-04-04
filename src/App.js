import "./App.css";
import Game from "./components/Game";
import HowToPlay from "./components/HowToPlay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Win from "./components/Win";
import Lose from "./components/Lose";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HowToPlay />} />
          <Route path="/game" element={<Game />} />
          <Route path="/win" element={<Win />} />
          <Route path="/lose" element={<Lose />} />
        </Routes>
      </BrowserRouter>
      {/* <Game /> */}
    </>
  );
}

export default App;
