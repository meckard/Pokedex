import { createSlice } from "@reduxjs/toolkit";

const randomPokemon = Math.floor(Math.random() * (1008 - 1 + 1) + 1)

export const podSlice = createSlice({
    name: 'pod',
    initialState: {
        pod: [],
        error: false,
        isLoading: false,
        selectedMon: randomPokemon,
    },
    reducers: {
        setPodState(state, action) {
            state.pod = action.payload
        },
        startGetPod(state) {
          state.isLoading = true
          state.error = false
        },
        getPodSuccess(state, action) {
          state.isLoading = false
          state.pod = action.payload
        },
        getPodFailed(state) {
          state.isLoading = false
          state.error = true
        }
    }
})

export async function dailyPokemon (num) {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}/`

  const response = await fetch(url)
  const json = await response.json()

  return json
}

export const fetchPod = (num) => async (dispatch) => {
  try{
    dispatch(startGetPod())
    let pod = await dailyPokemon(num)
    dispatch(getPodSuccess(pod))
  } catch(error) {
    dispatch(getPodFailed())
  }
}

export const { 
  setPodState,
  startGetPod,
  getPodFailed,
  getPodSuccess } = podSlice.actions

export const selectPodState = (state) => state.pod.pod
export const selectMon = (state) => state.pod.selectedMon

export default podSlice.reducer