
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import Novidades from "./Components/Novidade/Novidades"
import Sobre from "./Components/Sobre/Sobre"


function App() {
  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/novidades" element={<Novidades/>}/>
  <Route path="/sobre" element={<Sobre/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
