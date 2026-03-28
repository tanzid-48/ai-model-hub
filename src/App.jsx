
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Models from './components/models/Models'
import Navbar from './components/navbar/Navbar'
import Tab from './components/tab/Tab'
import SelectCard from './components/selectCard/SelectCard'
import Footer from './components/footer/Footer'

const getModels = async() =>{
  const res = await fetch("/models.json")
  return res.json();
}
const modelPromise = getModels();

function App() {

 const [isActive,setIsActive] = useState("Models")
 const [cards,SetCards] = useState([])

  return (
    <>
     <nav>
      <Navbar></Navbar>
     </nav>
     <main>
      <Banner></Banner>

      <Tab setIsActive={setIsActive} ></Tab>
      
     {isActive === "Models" && <Suspense fallback = {<span className="loading loading-ring loading-xl"></span>}>
      <Models modelPromise = {modelPromise} cards = {cards} SetCards = {SetCards} ></Models>
     </Suspense>}

      {isActive === "Card" && <SelectCard cards = {cards} ></SelectCard>}
      

     </main>
     
     <footer>
     <Footer></Footer>
     </footer>
     
    </>
  )
}

export default App
