import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MoreMon from "../moreMon/moreMon";
import { selectDexFullState, selectDexState, fetchUrls, getNextPage, selectOffset, getUrls, selectLoading} from "../Redux/dexSlice";
import './dex.css'

export default function Dex () {
    const dexState = useSelector(selectDexState)
    const dexFullState = useSelector(selectDexFullState)
    const offset = useSelector(selectOffset)
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    const fetchCallBack = useCallback( async() => {
        dispatch(fetchUrls())
    }, [dispatch]
    )

    useEffect(() => {
        if(loading) {
            setLoading(false);
            console.log(loading)
            dispatch(fetchUrls(offset))
        }
    }, [loading, dispatch, fetchCallBack])

    

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
                        <div className='pokemonCard' key={mon.id}>
                            <h2>{mon.name.toUpperCase()}</h2>
                            <p># {mon.id}</p>
                            <img src={mon.sprites.front_default} alt='front sprite of Pokemon' />
                            <div className="types">
                                <p>{mon.types[0].type.name}</p>
                                {mon.types[1]?
                                <p>{mon.types[1].type.name}</p>
                            : ''}
                            </div>
                        </div>
                    )
                })
            )})}
            </div>
            <button onClick={handleClick}>show more</button>
        </div>
        :<div>Loading...</div>
    )
}