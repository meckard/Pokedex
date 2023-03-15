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
import Bug from './types/bug';
import Dark from './types/dark';
import Dragon from './types/dragon';
import Electric from './types/electric';
import Fairy from './types/fairy';
import Fighting from './types/fighting';
import Fire from './types/fire';
import Flying from './types/flying';
import Ghost from './types/ghost';
import Grass from './types/grass';
import Ground from './types/ground';
import Ice from './types/ice';
import Normal from './types/normal';
import Poison from './types/poison';
import Psychic from './types/psychic';
import Rock from './types/rock';
import Steel from './types/steel';
import Water from './types/water';
import GenHome from './gen/genhome';
import TypeHome from './types/typeHome';

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
          <Route path='types/bug' element={<Bug/>}/>
          <Route path='types/dark' element={<Dark/>}/>
          <Route path='types/dragon' element={<Dragon/>}/>
          <Route path='types/electric' element={<Electric/>}/>
          <Route path='types/fairy' element={<Fairy/>}/>
          <Route path='types/fighting' element={<Fighting/>}/>
          <Route path='types/fire' element={<Fire/>}/>
          <Route path='types/flying' element={<Flying/>}/>
          <Route path='types/ghost' element={<Ghost/>}/>
          <Route path='types/grass' element={<Grass/>}/>
          <Route path='types/ground' element={<Ground/>}/>
          <Route path='types/ice' element={<Ice/>}/>
          <Route path='types/normal' element={<Normal/>}/>
          <Route path='types/poison' element={<Poison/>}/>
          <Route path='types/psychic' element={<Psychic/>}/>
          <Route path='types/rock' element={<Rock/>}/>
          <Route path='types/steel' element={<Steel/>}/>
          <Route path='types/water' element={<Water/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
