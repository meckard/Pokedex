import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectDexState, fetchUrls, selectOffset} from "../Redux/dexSlice";
import './dex.css'

export default function Dex () {
    const dexState = useSelector(selectDexState)
    const offset = useSelector(selectOffset)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        if(loading) {
            setLoading(false);
            console.log(loading)
            dispatch(fetchUrls(offset))
        }
    }, [loading, dispatch,])

    

    console.log(loading)
    console.log(dexState)
    console.log(offset)

    const handleClick = () => {
        setLoading(true)
    }

    
    


    return(
        dexState[0]?.[19].name?
        <div>

         <h1>The Dex</h1>
            <div className='dex'>
            {dexState.map ((page) => {
                return(
                page.map((mon) => {
                    return (
                        <Link to={`${mon.name}`}>
                        <div className='pokemonCard' key={mon.id}>
                            <h2>{mon.name.toUpperCase()}</h2>
                            <p className='number'># {mon.id}</p>
                            <img src={mon.sprites.front_default} alt='front sprite of Pokemon' />
                            <div className="types">
                                <p>{mon.types[0].type.name}</p>
                                {mon.types[1]?
                                <p>{mon.types[1].type.name}</p>
                            : ''}
                            </div>
                        </div>
                        </Link>
                    )
                })
            )})}
            </div>
            <button onClick={handleClick}>show more</button>
        </div>
        :<div>Loading...</div>
    )
}