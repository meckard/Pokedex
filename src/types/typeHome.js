import { Link } from "react-router-dom"
import './type.css'

export default function TypeHome () {
    return (
        <div className='types'>
            <h1>Types</h1>
            <div className='typeBlocks'>
                <Link to='bug'>Bug</Link>
                <Link to='dark'>Dark</Link>
                <Link to='dragon'>Dragon</Link>
                <Link to='electric'>Electric</Link>
                <Link to='fairy'>Fairy</Link>
                <Link to='fighting'>Fighting</Link>
                <Link to='fire'>Fire</Link>
                <Link to='flying'>Flying</Link>
                <Link to='ghost'>Ghost</Link>
                <Link to='grass'>Grass</Link>
                <Link to='ground'>Ground</Link>
                <Link to='ice'>Ice</Link>
                <Link to='normal'>Normal</Link>
                <Link to='poison'>Poison</Link>
                <Link to='psychic'>Psychic</Link>
                <Link to='rock'>Rock</Link>
                <Link to='steel'>Steel</Link>
                <Link to='water'>Water</Link>
            </div>
        </div>
    )
}