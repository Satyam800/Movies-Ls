
import { configureStore } from "@reduxjs/toolkit"
import favslice from "./CartSlice"
import counterslice from "./counterslice"
import movieslice from "./movieslice"
const store=  configureStore({
    reducer:{
        Favourite:favslice,
        counter:counterslice,
        movie:movieslice
    }

})

export default store