import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../src/App.css';
import Text from './components/Textinfo/Text';
import HomeApp from './components/HomeApp';
import NavbarApp from './components/NavbarApp/NavbarApp';
import Tarjeta from './components/Cards/Tarjeta';
import imagen1 from './components/img/dios.jpg'

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<HomeApp/>}></Route>
        { <Route path='/text' element={<Text/>}></Route> }
        <Route path='/Cards' element={<Tarjeta src ={imagen1}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
