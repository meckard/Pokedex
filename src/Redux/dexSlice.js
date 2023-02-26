import { createSlice } from "@reduxjs/toolkit";

export const dexSlice = createSlice({
    name: 'dex',
    initialState: {
        dexUrl: [],
        error: false,
        isLoading: false,
        dexFull: []
    },
    reducers: {
        setDexState(state, action) {
            state.dexUrl = action.payload
        },
        startGetDex(state) {
            state.isLoading = true
            state.error = false
        },
        getDexSuccess(state, action){
            state.isLoading = false
            state.dexUrl = action.payload
        },
        getDexFailed(state){
            state.isLoading = false
            state.error = true
        },
        setDexFullState(state, action) {
            state.dexFull = action.payload
        },
        getDexFullSuccess(state, action) {
            state.isLoading = false
            state.dexFull = action.payload
        }
    }
})

export async function getUrls (){
    const url= 'https://pokeapi.co/api/v2/pokemon/?limit60'
    
    const response = await fetch(url)
    const json = await response.json()

    return json
}

export const fetchUrls = () => async (dispatch) => {
    try{
        dispatch(startGetDex())
        let urls = await getUrls()
        dispatch(getDexSuccess(urls))
    } catch(error) {
        dispatch(getDexFailed())
    }
}

export async function getFullInfo () {
    let urls = selectDexState
    const response = await fetch(
        urls.map((mon) => {
           return mon.url
        })
    )
    const json = await response.json()
    return json
}

export const fetchFullDex = () => async (dispatch) => {
    try{
        dispatch(startGetDex())
        let info = await getFullInfo()
        dispatch(getDexFullSuccess(info))
    } catch(error) {
        dispatch(getDexFailed())
    }
}

export const {
    setDexState,
    setDexFullState,
    startGetDex,
    getDexSuccess,
    getDexFullSuccess,
    getDexFailed,
} = dexSlice.actions

export const selectDexState = (state) => state.dex.dex
export const selectDexFullState = (state) => state.dex.dexFull

export default dexSlice.reducer