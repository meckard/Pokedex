import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDexFullState, selectDexState, fetchUrls, fetchFullDex } from "../Redux/dexSlice";


export default function Dex () {
    const dexState = useSelector(selectDexState)
    const dexFullState = useSelector(selectDexFullState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUrls())
    }, [dispatch])

    useEffect(() =>{
        dispatch(fetchFullDex())
    })

    return(
        dexFullState?.sprites?.name?
        <div>
            <h1>The Dex</h1>
            <h2>{dexFullState.name}</h2>
        </div>
        :<div>Loading...</div>
    )
}