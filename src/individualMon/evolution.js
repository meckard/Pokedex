import { useSelector, useDispatch } from "react-redux";
import { fetchEvos, selectEvo, selectSpecies, clearEvo } from "../Redux/pokemonSlice";
import { useEffect,} from "react";
import { Link } from "react-router-dom";
import './evolution.css'

export default function Evolution (params) {
   const evoState = useSelector(selectEvo)
   const speciesState = useSelector(selectSpecies)
   const dispatch = useDispatch()
   

   useEffect(() => {
    dispatch(clearEvo)
    dispatch(fetchEvos(speciesState?.evolution_chain?.url))

}, [dispatch, speciesState?.evolution_chain?.url] )

const evolution = () => {
    if(evoState.evolves_to) {
    return evoState.evolves_to.map((mon1) => {
        return mon1.evolution_details.map((con1) => {
            return (
                <div className='evo1'>    
                <Link to={`/dex/${mon1.species.name}`} onClick={params.loading(true)}><p className='name'>{mon1.species.name}</p></Link>
                <p>{condition(Object.entries(con1))}</p>
                </div>
                )
           })
        })

    } else {
        return <p>This pokemon does not evolve</p>
    }
}

const evolution2 = () => {
    if(evoState.evolves_to[0].evolves_to) {
       return evoState.evolves_to[0].evolves_to.map((mon2) => {
            return mon2.evolution_details.map((con2) => {
                return (
                    <div className="evo2">
                        <Link to={`/dex/${mon2.species.name}`} onClick={params.loading(true)}><p className='name2'>{mon2.species.name}</p></Link>
                        <p>{condition(Object.entries(con2))}</p>
                    </div>
                    )
               })
            })
    } else {
        return <p>This Pokemon does not evolve</p>
    }
}


const condition = (arr) => {
 let goodArr = []
 for(let i =0; i< arr.length; i++) {
     if(arr[i][1]) {
         goodArr.push(arr[i])
     }
 }
 let conditions = []
 for(let i = 0; i < goodArr.length; i++) {
 switch (goodArr[i][0]){
    case 'min_level':
        conditions.push( `Evolves at level ${goodArr[0][1]} `);
        break
    case 'gender':
    if(goodArr[0][1] === 1) {
        conditions.push( `Pokemon must be female `)
    } else {
        conditions.push( `Pokemon must be Male `)
    }; break
    case 'held_item': 
        conditions.push( `Pokemon must be holding ${goodArr[i][1].name} `);
        break
    case 'item':
        conditions.push( `Pokemon evolves with a ${goodArr[0][1].name} `);
        break
    case 'known_move' :
        conditions.push( `Pokemon must know the move ${goodArr[0][1].name} `);
        break
    case 'known_move_type' :
        conditions.push( `Pokemon must know a ${goodArr[0][1].name} type move `);
        break
    case 'location':
        conditions.push( `Pokemon must be at ${goodArr[0][1].name} `);
        break
    case 'min_happiness':
        conditions.push( 'Pokemon evolves via happiness ');
        break
    case 'min_beauty':
        conditions.push( 'Pokemon evolves via beauty ');
        break
    case 'need_overworld_rain':
        conditions.push( 'it needs to be raining in the overworld ');
        break
    case 'party_species':
        conditions.push( `Needs to be in a party with ${goodArr[0][1][0]} `);
        break
    case 'trigger':
        if(goodArr[i][1].name === "trade") {
            conditions.push( 'This Pokemon needs to be traded to evolve ')
        }; break
    case 'party_type':
        conditions.push( `Needs to be in a party with a ${goodArr[0][1].name} type Pokemon `);
        break
    case 'relative_physical_status':
        if(goodArr[0][1][0] === 1) {
            conditions.push( "This Pokemon's attack needs to be higher than it's defence ")
        } else if (goodArr[0][1][0] === 0) {
            conditions.push( "This Pokemon's attack needs to be equal to it's defence ")
        } else {
            conditions.push( "This Pokemon's attack needs to be less than it's defence ")
        }; break
    case 'time_of_day':
        conditions.push( `This pokemon only evolves at ${goodArr[0][1]} `);
        break
    case 'turn_upside_down':
        conditions.push( 'The console must be turned upside down ')
        break
    default :
        conditions.push( 'this pokemon does not evolve ')
        
 }
}
return conditions
}


    return(
        evoState?.species?.name?
        <div className='evolution'>
            <h2>Evolutions</h2>
            <div className='evoDeets'>
                <div className='mon1'>
                   <Link to={`/dex/${evoState.species.name}`}><p>{evoState.species.name}</p></Link>
                </div>
                <div className='mon2'>
                    <div className='evoCon1'>{evolution()}</div>
                </div>
                {evoState?.evolves_to[0]?
                <div className='mon3'>
                    <div className='evoCon2'>{evolution2()}</div>
                </div>
                :''}
            </div>
        </div>
        :<p>Loading...</p>
    )
}