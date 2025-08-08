
import Header from "./components/header"
import Home from "./PAGES/Home"
import About from "./PAGES/About"
import Contact from "./PAGES/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  return <>
  <div>
    <div className="bg-green-900 text-white py-4 px-10 font-semibold text-2xl">
      <Header />
    </div>
    <div>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/Contact" element = {<Contact />} />
      </Routes>
      
    </div>
  </div>
  
  
  
  
  
  </>

}
export default App