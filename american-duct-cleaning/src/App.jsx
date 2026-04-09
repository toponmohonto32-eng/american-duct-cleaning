import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import LocationsPage from './pages/LocationsPage'

export default function App() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="bg-white">
      <Header onContactClick={() => setShowContact(true)} />
      <Routes>
        <Route path="/" element={<HomePage onContactClick={() => setShowContact(true)} />} />
        <Route path="/service/:slug" element={<ServicePage onContactClick={() => setShowContact(true)} />} />
        <Route path="/locations" element={<LocationsPage onContactClick={() => setShowContact(true)} />} />
      </Routes>
      <Footer />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  )
}
