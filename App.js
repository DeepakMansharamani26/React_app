import React from 'react';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Services from './Components/Services';
import TopMenu from './Components/TopMenu';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Error from './Components/Error';
import GoToTop from './Components/GoToTop';

const App = () => {

  

  return (
    <>
    
      <BrowserRouter>
      <TopMenu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
          
        </Routes>
        <GoToTop/>
        <Footer/>
      </BrowserRouter>
      
      </>  
  )
}

export default App;
