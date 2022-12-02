import { getHomeGoodPriceData } from '@/serviews/moudle/home'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchHomeDataAction = createAsyncThunk("fetchdata",async (payload) => {
    const res =  await getHomeGoodPriceData()
    return res
} )

const homeSlice = createSlice({
    name:"home",
    initialState:{
       goodPriceInfo:{}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        }
    },
    extraReducers:{
     [fetchHomeDataAction.fulfilled] (state,{payload}){
        state.goodPriceInfo = payload
        console.log(payload);
     }
    }
})
export default homeSlice.reducer