import { useSelector } from "react-redux";
import { selectMonState } from "../Redux/pokemonSlice";
import './moves.css'
import Collapsible  from 'react-collapsible'

export default function Moves () {
    const monState = useSelector(selectMonState)


    return(
        monState?.moves[0]?
        <div>
        <h2>moves</h2>
        {monState.moves.map((move) => {
            return(
                <div className='move'>
                    <Collapsible trigger={move.move.name}>
                        <p className="moveName">{move.move.name}</p>
                        <div className='details'>
                        {move.version_group_details.map((detail) => {
                            return (
                                <div className='detail'>
                                    <p className='version'>{detail.version_group.name}</p>
                                    <p>LVL {detail.level_learned_at}</p>
                                    <p>Learn by {detail.move_learn_method.name}</p>
                                </div>
                            )
                        })}
                        </div>
                    </Collapsible>
                </div>
            )
        })}
        </div>
        :<p>Loading</p>
    )
}