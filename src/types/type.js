import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { selectTypeState, fetchTypeUrls, clearType } from "../Redux/typeSlice";
import { Link, useParams } from "react-router-dom";
import './type.css'

export default function Type () {
    const typeState = useSelector(selectTypeState)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const type = useParams()

    useEffect(() => {
        if(loading) {
            setLoading(false);
            console.log(loading)
            dispatch(clearType())
            dispatch(fetchTypeUrls(type.type))
        }
    }, [loading, dispatch])
    console.log(type)


    console.log(typeState)

    return (
        typeState?.[30]?.name?
        <div>
            <h1>{type.type}</h1>
            <div className='type'>
                {typeState.map((mon) => {
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