import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar(){
    return (
        <ul className='navBar'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/dex'>Dex</Link>
            </li>
            <li>
                <Link to='/generations'>Generations</Link>
            </li>
            <li>
                <Link to='/types'>Types</Link>
            </li>
        </ul>
    )
}