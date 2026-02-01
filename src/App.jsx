import React from 'react'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="h-screen flex-col">
      <div className="flex-grow ">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  )
}
  


export default App
