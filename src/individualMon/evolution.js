import { useSelector, useDispatch } from "react-redux";
import { selectMonState, fetchEvos, selectEvo, selectSpecies, clearEvo } from "../Redux/pokemonSlice";
import { useEffect, useState } from "react";

export default function Evolution () {
   const monState = useSelector(selectMonState)
   const evoState = useSelector(selectEvo)
   const speciesState = useSelector(selectSpecies)
   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(clearEvo)
    dispatch(fetchEvos(speciesState?.evolution_chain?.url))

}, [dispatch, speciesState?.evolution_chain?.url] )



const evo1 = () => {
    let evoArr = ''
    if(evoState.evolves_to[0].evolution_details[0]){
        evoArr = Object.entries(evoState.evolves_to[0].evolution_details[0])
    }
    return evoArr
}
const evo2 = () => {
    let evoArr2 = ''
    if (evoState.evolves_to[0].evolves_to[0]){
        evoArr2 = Object.entries(evoState.evolves_to[0].evolves_to[0].evolution_details[0])
    }
    return evoArr2
}




const condition = (arr) => {
 let goodArr = []
 for(let i =0; i< arr.length; i++) {
     if(arr[i][1]) {
         goodArr.push(arr[i])
     }
 }
 console.log(goodArr)
 return goodArr[0][1]
}


    return(
        evoState?.species?.name?
        <div className='evolution'>
            <h2>Evolutions</h2>
            <div className='mon1'>
                <p>{evoState.species.name}</p>
                <p>evolves at level {condition(evo1())}</p>
            </div>
            <div className='mon2'>
                <p>{evoState.evolves_to[0].species.name}</p>
            </div>
            {evoState?.evolves_to[0]?.evolves_to[0]?.species?.name?
            <div className='mon3'>
                <p>evolves at level {condition(evo2())}</p>
                <p>{evoState.evolves_to[0].evolves_to[0].species.name}</p>
            </div>
            :<p></p>}
        </div>
        :<p>Loading...</p>
    )
}