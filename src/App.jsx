
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Models from './components/models/Models'
import Navbar from './components/navbar/Navbar'

const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json();
}
const modelPromise = getModels();

function App() {
  return (
    <>
     <nav>
      <Navbar></Navbar>
     </nav>
     <main>
      <Banner></Banner>
      
     <Suspense fallback = {<span className="loading loading-ring loading-xl"></span>}>
      <Models modelPromise = {modelPromise} ></Models>
     </Suspense>
      

     </main>
     
     <footer>

     </footer>
     
    </>
  )
}

export default App
