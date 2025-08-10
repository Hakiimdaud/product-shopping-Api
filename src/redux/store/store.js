import { configureStore } from "@reduxjs/toolkit";
import Couterslice from "../reducer/count"


const configure = configureStore({
    reducer:{
        newCounter:Couterslice
    }
})
export default configure