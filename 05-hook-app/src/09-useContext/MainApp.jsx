import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import { Navbar } from "./Navbar"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="about" element={ <AboutPage /> } />
        <Route path="login" element={ <LoginPage /> } />
        
        <Route path="./*" element={ <Navigate to="about" /> } />
      </Routes>
    </UserProvider>
  )
}