import Navbar from "./Navbar"
import Learn from "./pages/Learn"
import Home from "./pages/Home"
import About from "./pages/About"
import Teach from "./pages/Teach"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/teach" element={<Teach />} />
        </Routes>
      </div>
    </>
  )
}

export default App
