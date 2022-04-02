import './App.css';
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidelinks from './components/Sidelinks';
import Hero from './components/Hero';
import About from './components/About';


function App() {
  const [DarkMode, setDarkMode] = React.useState(true)
    function toggleTheme(){
        setDarkMode(prevState => !prevState)
    }

  const ScreenSizeDetector = require('screen-size-detector');
  const screen = window.innerWidth;

  const lightStyles = {
    backgroundColor: "#fff",
    color: "var(--dark-text)"
  }

  const darkStyles = {
    backgroundColor: "#0A192F"
  }

  return (
    <div style={DarkMode ? darkStyles : lightStyles}>
      
      <Header dark={DarkMode} onclick={toggleTheme} />
      <Hero dark={DarkMode} />
      <hr></hr>
      <About />
      <Footer />
    </div>
  )
}

export default App;
