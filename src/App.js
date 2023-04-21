import NavBar from './NavBar/navbar';
import { createBrowserRouter, createRoutesFromElements, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './home/home';
import Dex from './dex/dex';
import Gen1 from './gen/gen1';
import Gen2 from './gen/gen2';
import Gen3 from './gen/gen3';
import Gen4 from './gen/gen4';
import Gen5 from './gen/gen5';
import Gen6 from './gen/gen6';
import Gen7 from './gen/gen7';
import Gen8 from './gen/gen8';
import Gen9 from './gen/gen9';
import Mon from './individualMon/mon';
import GenHome from './gen/genhome';
import TypeHome from './types/typeHome';
import Type from './types/type';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path='/' element={<Home/>}>,
      <Route path='dex' element={<Dex/>}/>
    </Route>
  )
)

function App() {
  return (
    <div className='app'>
      <BrowserRouter router={router}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='dex' element={<Dex/>}/>
          <Route path='gen' element={<GenHome/>}/>
          <Route path='gen/gen1' element={<Gen1/>}/>
          <Route path='gen/gen2' element={<Gen2/>}/>
          <Route path='gen/gen3' element={<Gen3/>}/>
          <Route path='gen/gen4' element={<Gen4/>}/>
          <Route path='gen/gen5' element={<Gen5/>}/>
          <Route path='gen/gen6' element={<Gen6/>}/>
          <Route path='gen/gen7' element={<Gen7/>}/>
          <Route path='gen/gen8' element={<Gen8/>}/>
          <Route path='gen/gen9' element={<Gen9/>}/>
          <Route path='types' element={<TypeHome/>}/>
          <Route path='types/:type' element={<Type/>}/>
          <Route path='dex/:monName' element={<Mon/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
