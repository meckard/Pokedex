import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTypeState, fetchTypeUrls, clearType } from "../Redux/typeSlice";
import './type.css'

export default function Steel () {
    const typeState = useSelector(selectTypeState)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(loading) {
            setLoading(false);
            console.log(loading)
            dispatch(clearType())
            dispatch(fetchTypeUrls('steel'))
        }
    }, [loading, dispatch])


    console.log(typeState)

    return (
        typeState?.[30]?.name?
        <div>
            <h1>Steel</h1>
            <div className='type'>
                {typeState.map((mon) => {
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