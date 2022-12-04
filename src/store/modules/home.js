import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData, getHomeHotRecommendData } from '@/serviews/moudle/home'
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload,{dispatch}) => {
getHomeGoodPriceData().then(res => {
dispatch(changeGoodPriceInfoAction(res))
})
getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
})

getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
})
 
// getHomeHotRecommendData().then(res => {
//     // dispatch()
// })
  
} )

const homeSlice = createSlice({
    name:"home",
    initialState:{
       goodPriceInfo:{},
       highScoreInfo: {},
       discountInfo: {},
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state,{payload}){
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state,{payload}){
            state.discountInfo = payload
        }
    },
    extraReducers:{
    //  [fetchHomeDataAction.fulfilled] (state,{payload}){
    //     state.goodPriceInfo = payload
    //     console.log(payload);
    //  }
    }
})
export const {
    changeGoodPriceInfoAction, 
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
} = homeSlice.actions
export default homeSlice.reducer