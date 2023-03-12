import { useSelector} from "react-redux"
import { selectPodState } from "../Redux/podSlice"
import './Pod.css'
import shiny from '../Images/5646579.png'


export default function PokemonOfTheDay () {
  const podState = useSelector(selectPodState)
  console.log(podState)



  return (
    <div className='pod'>
        <h2>Pokemon of the Day</h2>
        <h3>{podState.name}</h3>
        <div className='sprites'>
          <ul>
          <div className='regularSprite'>
              <li><img src={podState.sprites.front_default} alt='The front sprite of the Pokemon of the day'/></li>
              <li><img src={podState.sprites.back_default} alt= 'The back sprite of the Pokemon of the day'/></li>
            </div>
            <div className='shinySprite'>
              <li><img className='shiny' src={shiny} alt='shiny symbol'/></li>
              <li><img src={podState.sprites.front_shiny} alt= 'The front shiny sprite of the Pokemon of the day'/></li>
              <li><img src={podState.sprites.back_shiny} alt='The back shiny sprite of the Pokemon of the day'/></li>
            </div>
          </ul>
        </div>
    </div>
  )


}