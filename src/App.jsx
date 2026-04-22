import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

function App() {
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App