
import './App.css';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Navbar } from './components/Navbar';
import { MainContext } from './context';
import { useState,useEffect } from 'react';
import { Route,Routes,NavLink } from 'react-router-dom';
import { Users } from './components/Users';
function App() {
  
const[fetcheddata,setFetchedData]=useState([])

const fetchmetod=()=>{
fetch("https://jsonplaceholder.typicode.com/comments").then(data=>data.json()).then(result=>setFetchedData(result))
console.log(fetcheddata)
}
    useEffect(() => {
      fetchmetod();
      
  },[]);

  
  const data={
    fetcheddata,
    setFetchedData
  }
  return (
    
      <MainContext.Provider value={data} className="App">
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Main></Main>}></Route>
     <Route path="/user" element={<Users></Users>}>

     </Route>
     </Routes>
     <Footer></Footer>
    </MainContext.Provider>
   
   
  );
}

export default App;
