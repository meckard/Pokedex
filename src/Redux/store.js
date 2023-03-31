import { configureStore} from "@reduxjs/toolkit";
import { podSlice } from "./podSlice";
import { dexSlice } from "./dexSlice";
import { genSlice } from "./genSlice";
import { pokemonSlice } from "./pokemonSlice";
import { typeSlice } from "./typeSlice";



const makeStore = () => {
return configureStore ({
    reducer: {
        [podSlice.name]: podSlice.reducer,
        [dexSlice.name]: dexSlice.reducer,
        [genSlice.name]: genSlice.reducer,
        [typeSlice.name]: typeSlice.reducer,
        [pokemonSlice.name]: pokemonSlice.reducer
    },
    devtools: true
})
}

export default makeStore()