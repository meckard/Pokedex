import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGenState, fetchGenUrls, clearGen} from "../Redux/genSlice";
import { Link } from "react-router-dom";
import './gen.css'

export default function Gen1 () {
    const genState = useSelector(selectGenState)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(loading) {
            setLoading(false);
            dispatch(clearGen())
            console.log(loading)
            dispatch(fetchGenUrls(151, 0))
        }
    }, [loading, dispatch])


    console.log(genState)

    return (
        genState?.[30]?.name?
        <div>
            <h1>Generation 1</h1>
            <div className='generation'>
                {genState.map((mon) => {
                    return (
                        <Link to={`/dex/${mon.name}`}>
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
                })}

            </div>
        </div>
        :<div>Loading...</div>
    )

}

