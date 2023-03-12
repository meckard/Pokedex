import { createSlice } from "@reduxjs/toolkit";

export const dexSlice = createSlice({
    name: 'dex',
    initialState: {
        dexUrl: [],
        error: false,
        isLoading: true,
        dexFull: [],
        offset: 0
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
            state.dexUrl = [...state.dexUrl, action.payload]
        },
        getDexFailed(state){
            state.isLoading = false
            state.error = true
        },
        getNextPage(state) {
            state.offset +=60
        },
    }
})


export async function getUrls (offset){
    const url= `https://pokeapi.co/api/v2/pokemon/?limit=60&offset=${offset}`
    
    const response = await fetch(url)
    const json = await response.json()
    let monList = []
    for(let i =0; i < json.results.length; i++){
       let mons = await fetch(json.results[i].url)
       let monsJson = await mons.json()
       monList.push(monsJson)

    }
    return monList
    
}

export const fetchUrls = (offset) => async (dispatch) => {
    try{
        dispatch(startGetDex())
        let urls = await getUrls(offset)
        dispatch(getDexSuccess(urls))
        dispatch(getNextPage())
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

export const {
    setDexState,
    startGetDex,
    getDexSuccess,
    getDexFailed,
    getNextPage,
    setLoadingOn
} = dexSlice.actions

export const selectDexState = (state) => state.dex.dexUrl
export const selectOffset = (state) => state.dex.offset

export default dexSlice.reducer