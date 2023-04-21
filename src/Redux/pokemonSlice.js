import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        monSpecies: [],
        monUrl: [],
        evolution: [],
        ability: [],
        error: false,
        isLoading: true,
    },
    reducers: {
        setMonState(state, action) {
            state.monUrl = action.payload
        },
        startGetMon(state) {
            state.isLoading = true
            state.error = false
        },
        getMonSuccess(state, action){
            state.isLoading = false
            state.monUrl = action.payload
        },
        getMonFailed(state){
            state.isLoading = false
            state.error = true
        },
        setEvolution(state, action){
            state.evolution = action.payload
        },
        setMonSpecies(state,action) {
            state.monSpecies = action.payload
        },
        clearEvo(state) {
            state.evolution = []
        },
        setAbility(state, action) {
            state.ability = action.payload
        }
    }
})


export async function getUrls (mon){
    const url= `https://pokeapi.co/api/v2/pokemon/${mon}`
    
    const response = await fetch(url)
    const json = await response.json()
    
    return json
    
}

export async function getMonSpecies(mon){
    const url = `https://pokeapi.co/api/v2/pokemon-species/${mon}/`
    
    const response = await fetch(url)
    const json = await response.json()

    return json
}

export async function getEvos (evoUrl){
    const evoResponse = await fetch(evoUrl)
    const evoJson = await evoResponse.json()

    return evoJson.chain

   }

export async function getAbilities (abilUrls) {
    let abList = []
    for(let abilUrl of abilUrls) {
        console.log(abilUrl)
        let response = await fetch(abilUrl)
        let json = await response.json()
        abList.push(json)
    }
    return abList
}

export const fetchMonUrls = (mon) => async (dispatch) => {
    try{
        dispatch(startGetMon())
        let urls = await getUrls(mon)
        dispatch(getMonSuccess(urls))
    } catch(error) {
        dispatch(getMonFailed())
    }
}

export const fetchMonSpecies = (mon) => async (dispatch) => {
    try{
        dispatch(startGetMon())
        let url = await getMonSpecies(mon)
        dispatch(setMonSpecies(url))
    } catch(error) {
        dispatch(getMonFailed())
    }
}

export const fetchEvos = (evoUrl) => async (dispatch) => {
    try{
        let evo = await getEvos(evoUrl)
        dispatch(setEvolution(evo))
        console.log(evo)
    } catch(error) {
        dispatch(getMonFailed())
    }
}

export const fetchAbilites = (abilUrl) => async (dispatch) => {
    try {
        let abil = await getAbilities(abilUrl)
        dispatch(setAbility(abil))
    } catch(error) {
        dispatch(getMonFailed())
    }
}


export const {
    setMonState,
    startGetMon,
    getMonSuccess,
    getMonFailed,
    setEvolution,
    setMonSpecies,
    clearEvo,
    setAbility
} = pokemonSlice.actions

export const selectMonState = (state) => state.pokemon.monUrl
export const selectEvo = (state) => state.pokemon.evolution
export const selectSpecies = (state) => state.pokemon.monSpecies
export const selectAbility = (state) => state.pokemon.ability

export default pokemonSlice.reducer