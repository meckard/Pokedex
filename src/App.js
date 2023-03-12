import NavBar from './NavBar/navbar';
import { createBrowserRouter, createRoutesFromElements, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './home/home';
import Dex from './dex/dex';
import Gen1 from './gen/gen1';
import GenHome from './gen/genhome';

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
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
