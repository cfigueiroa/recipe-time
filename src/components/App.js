import { BrowserRouter, Routes, Route } from "react-router-dom";

import Receita from "./Receita";
import Receitas from "./Receitas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Receitas />} />
        <Route path="/receita/:variavelLegal" element={<Receita />} />
      </Routes>
    </BrowserRouter>
  );
}
