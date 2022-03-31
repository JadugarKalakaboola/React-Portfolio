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
  const lightStyles = {
    backgroundColor: "#fff",
    color: "var(--dark-text)"
  }
  const darkStyles = {
    backgroundColor: "#0A192F"
  }
  return (
    <div style={DarkMode ? darkStyles : lightStyles}>
      
      <Header dark={DarkMode} onclick={toggleTheme}/>
      <Sidelinks dark={DarkMode} /> 
      <Hero dark={DarkMode} />
      <About />
      <Footer />
    </div>
  )
}

export default App;
