import { Routes, Route } from 'react-router-dom';
import Home from "./Home"
import NavBar from "./NavBar"
import AboutMe from "./AboutMe"
import MyExperience from "./MyExperience"
import MyProjects from "./MyProjects"


const App = () => {
  return (
    <>

      <NavBar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<MyExperience />} />
        <Route path="/projects" element={<MyProjects />} />
      </Routes>
    
    </>
    
  )
}

export default App