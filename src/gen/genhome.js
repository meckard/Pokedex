import { Link } from "react-router-dom"
import './gen.css'

export default function GenHome () {
    return (
        <div className='generations'>
            <h1>Generations</h1>
            <div className='genBlocks'>
                <Link to='gen1'>Gen 1 Kanto</Link>
                <Link to='gen2'>Gen 2 Johto</Link>
                <Link to='gen3'>Gen 3 Hoenn</Link>
                <Link to='gen4'>Gen 4 Sinnoh</Link>
                <Link to='gen5'>Gen 5 Unova</Link>
                <Link to='gen6'>Gen 6 Kalos</Link>
                <Link to='gen7'>Gen 7 Alola</Link>
                <Link to='gen8'>Gen 8 Galar</Link>
                <Link to='gen9'>Gen 9 Paldea</Link>
            </div>
        </div>
    )
}