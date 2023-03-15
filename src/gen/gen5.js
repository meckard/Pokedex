import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGenState, fetchGenUrls, clearGen} from "../Redux/genSlice";
import './gen.css'

export default function Gen5 () {
    const genState = useSelector(selectGenState)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(loading) {
            setLoading(false);
            dispatch(clearGen())
            console.log(loading)
            dispatch(fetchGenUrls(155, 494))
        }
    }, [loading, dispatch])

    console.log(genState)

    return (
        genState?.[30]?.name?
        <div>
            <h1>Generation 5</h1>
            <div className='generation'>
                {genState.map((mon) => {
                    return (
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
                    )
                })}

            </div>
        </div>
        :<div>Loading...</div>
    )

}