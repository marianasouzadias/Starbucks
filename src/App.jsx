
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import News from "./Components/News/News"
import About from "./Components/About/About"


function App() {
  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/novidades" element={<News/>}/>
  <Route path="/sobre" element={<About/>}/>
</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
