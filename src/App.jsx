import {} from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
        <Nav/>
        {/* para ser renderizado de uma rota pai chamar os filhos */}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App
