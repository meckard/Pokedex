import { createSlice } from "@reduxjs/toolkit";

export const genSlice = createSlice({
    name: 'gen',
    initialState: {
        genUrl: [],
        error: false,
        isLoading: false,
        offset: 0
    },
    reducers: {
        setGenState(state, action) {
            state.genUrl = action.payload
        },
        startGetGen(state) {
            state.isLoading = true
            state.error = false
        },
        getGenSuccess(state, action){
            state.isLoading = false
            state.genUrl =  action.payload
        },
        getGenFailed(state){
            state.isLoading = false
            state.error = true
        },
        getNextPage(state) {
            state.offset += 60
        }
    }
})

export async function getGenUrls (){
    const url= `https://pokeapi.co/api/v2/pokemon/?limit=151`
    
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    
    let monList = []
    for(let i =0; i < json.results.length; i++){
       let mons = await fetch(json.results[i].url)
       let monsJson = await mons.json()
       monList.push(monsJson)

    }
    return monList
    
}

export const fetchGenUrls = () => async (dispatch) => {
    try{
        dispatch(startGetGen())
        let urls = await getGenUrls()
        dispatch(getGenSuccess(urls))
        dispatch(getNextPage())
    } catch(error) {
        dispatch(getGenFailed())
    }
}

export const {
    startGetGen,
    getGenSuccess,
    getGenFailed,
    setGenState,
    getNextPage
} = genSlice.actions

export const selectGenState = (state) => state.gen.genUrl
export const selectOffset = (state) => state.gen.offset

export default genSlice.reducer