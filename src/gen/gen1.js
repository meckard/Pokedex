import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectGenState, fetchGenUrls, selectOffset } from "../Redux/genSlice";
import './gen.css'

export default function Gen1 () {
    const genState = useSelector(selectGenState)
    const offset = useSelector(selectOffset)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(loading) {
            setLoading(false);
            console.log(loading)
            dispatch(fetchGenUrls())
        }
    }, [loading, dispatch])

    const handleClick = () => {
        setLoading(true)
    }
    console.log(genState)

    return (
        genState?.[30]?.name?
        <div>
            <h1>Generation 1</h1>
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

