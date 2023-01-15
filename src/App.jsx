

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Choose from './components/Choose'
import Articles from './components/Articles'
import Footer from './components/Footer'
function App() {


  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Choose />
      <Articles />
      <Footer />
    </div>
  )
}

export default App
