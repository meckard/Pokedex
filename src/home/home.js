import { useSelector, useDispatch } from "react-redux"
import { selectPodState, fetchPod } from "../Redux/podSlice"
import { useEffect } from "react"
import PokemonOfTheDay from "../Pod/Pod"
import { selectMon } from "../Redux/podSlice"

export default function Home () {
    const randomPokemon = Math.floor(Math.random() * (1008 - 1 + 1) + 1)
    const podState = useSelector(selectPodState)
    const mon = useSelector(selectMon)
    const dispatch = useDispatch()
    console.log(mon)

  useEffect(() => {
    dispatch(fetchPod(mon))
  }, [dispatch, mon])

    return(
        podState?.sprites?.back_shiny?
        <div>
            <h1>Pokedex</h1>
            <PokemonOfTheDay/>
        </div>
        :<div>loading...</div>
    )
}