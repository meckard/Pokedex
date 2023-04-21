import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMonState, fetchAbilites, selectAbility } from "../Redux/pokemonSlice";
import './ability.css'

export default function Abilities () {
    const monState = useSelector(selectMonState)
    const abilState = useSelector(selectAbility)
    const dispatch = useDispatch()

    console.log(monState)

    let urls = []

    const abilUrl = () => {
        monState.abilities.map((abil) => {
          return urls.push(abil.ability.url)
        })
    }

    abilUrl()

    console.log(urls)

    useEffect(() => {
        dispatch(fetchAbilites(urls))
    }, [dispatch,])

    return (
        abilState[0]?.name?
        <div className='ability'>
            <h2>Ability</h2>
            {abilState.map((ability) => {
                return (
                <div className='abilComp'>
                    <p className='abilName'>{ability.name}</p>
                    <p>{ability.effect_entries.map((eng) => {
                        if(eng.language.name === "en") {
                            return eng.effect
                        }
                    })}</p>
                </div>
                )
            })}
        </div>
        :<p>Loading...</p>
    )

}