import { useSelector } from "react-redux"
import { selectMonState } from "../Redux/pokemonSlice"

export default function DefaultSprites () {

 const monState = useSelector(selectMonState)


return (
<div className='sprites'>
                <div className='defaultSprites'>
                    <h3>Default Sprite</h3>
                    <div>
                        <img src={monState.sprites.front_default} alt='front sprite of pokemon'/>
                        <img src={monState.sprites.back_default} alt='back sprite of pokemon'/>
                    </div>
                </div>
                {monState.sprites.front_female?
                <div className='femaleSprites'>
                    <h3>Female Sprite</h3>
                    <div>
                        <img src={monState.sprites.front_female} alt='front female sprite of pokemon'/>
                        <img src={monState.sprites.back_female} alt='back female sprite of pokemon'/>
                    </div>
                </div>
                :''}
                <div className='shinySprites'>
                    <h3>Shiny Sprite</h3>
                    <div>
                        <img src={monState.sprites.front_shiny} alt='front shiny sprite of pokemon'/>
                        <img src={monState.sprites.back_shiny} alt='back shiny sprite of pokemon'/>
                    </div>
                </div>
                {monState.sprites.front_shiny_female?
                <div className='shinyFemaleSprites'>
                    <h3>Shiny Female Sprite</h3>
                    <div>
                        <img src={monState.sprites.front_shiny_female} alt='front shiny female sprite of pokemon'/>
                        <img src={monState.sprites.back_shiny_female} alt='back shiny female sprite of pokemon'/>
                    </div>
                </div>
                :''}
            </div>


                )}