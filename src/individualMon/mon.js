import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectMonState, fetchMonUrls, fetchMonSpecies } from "../Redux/pokemonSlice"
import Evolution from "./evolution";
import './mon.css'
import DefaultSprites from "./defaultSprites";
import AdditionalSprites from "./additionalSprites";
import Abilities from "./abilities";
import Moves from "./moves";

export default function Mon () {
    const monState = useSelector(selectMonState)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    let mon = useParams()


    useEffect(() => {
        if(loading) {
            setLoading(false);
            dispatch(fetchMonUrls(mon.monName))
            dispatch(fetchMonSpecies(mon.monName))
        }
    }, [loading, dispatch, mon.monName])


    return (
        monState?.name?
        <div>
            <h1>{monState.name}</h1>
            <h2>#{monState.id}</h2>
            <DefaultSprites/>
            <Evolution loading={setLoading}/>
            <AdditionalSprites/>
            <Abilities/>
            <Moves/>
        </div>
        :<div>Loading...</div>
    )

}