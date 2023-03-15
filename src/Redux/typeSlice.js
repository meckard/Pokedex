import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
    name: 'type',
    initialState: {
        typeUrl: [],
        error: false,
        isLoading: false,
        offset: 0
    },
    reducers: {
        setTypeState(state, action) {
            state.typeUrl = action.payload
        },
        startGetType(state) {
            state.isLoading = true
            state.error = false
        },
        getTypeSuccess(state, action){
            state.isLoading = false
            state.typeUrl =  action.payload
        },
        getTypeFailed(state){
            state.isLoading = false
            state.error = true
        },
        getNextPage(state) {
            state.offset += 60
        },
        clearType(state) {
            state.typeUrl = []
        }
    }
})

export async function getTypeUrls (type){
    const url= `https://pokeapi.co/api/v2/type/` + type + '/'
    console.log(url)
    
    const response = await fetch(url)
    const json = await response.json()
    console.log(json.pokemon[1].pokemon)
    
    let monList = []
    for(let i =0; i < json.pokemon.length; i++){
       let mons = await fetch(json.pokemon[i].pokemon.url)
       let monsJson = await mons.json()
       monList.push(monsJson)

    }
    return monList
    
}

export const fetchTypeUrls = (type) => async (dispatch) => {
    try{
        dispatch(startGetType())
        let urls = await getTypeUrls(type)
        dispatch(getTypeSuccess(urls))
        dispatch(getNextPage())
    } catch(error) {
        dispatch(getTypeFailed())
    }
}

export const {
    startGetType,
    getTypeSuccess,
    getTypeFailed,
    setTypeState,
    getNextPage,
    clearType
} = typeSlice.actions

export const selectTypeState = (state) => state.type.typeUrl
export const selectOffset = (state) => state.type.offset

export default typeSlice.reducer