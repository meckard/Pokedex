import { configureStore} from "@reduxjs/toolkit";
import { podSlice } from "./podSlice";
import { dexSlice } from "./dexSlice";



const makeStore = () => {
return configureStore ({
    reducer: {
        [podSlice.name]: podSlice.reducer,
        [dexSlice.name]: dexSlice.reducer
    },
    devtools: true
})
}

export default makeStore()