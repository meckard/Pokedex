import NavBar from './NavBar/navbar';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css';
import PokemonOfTheDay from './Pod/Pod';
import Home from './home/home';
import Dex from './dex/dex';

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
        <h1>Pokedex</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='dex' element={<Dex/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;
