import FeatureProperty from "./components/FeatureProperty"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import PopulerSearch from "./components/PopulerPlace"
import AboutUs from "./components/AboutUs"

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <FeatureProperty />
        <AboutUs />
        <PopulerSearch />
      </div>
    </>
  )
}

export default App
