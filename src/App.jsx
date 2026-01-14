import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import PokeList from "./pages/pokeList"
import Palindromo from "./pages/Palindromo"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/PokeList" element={<PokeList/>} />
      <Route path="/Palindromo" element={<Palindromo/>} />
    </Routes>
  )
}

export default App