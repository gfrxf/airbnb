import { getEntireRooomList } from "@/serviews/moudle/entire"
// import { type } from "@testing-library/user-event/dist/type"
import * as actionTypes from "./constants"

export const changeCurrentPageAction = (currentPage) =>(
    {
        type:actionTypes.CHANGE_CURRENT_PAGE,
        currentPage
    }
)

export const changeRoomListAction = (roomList) =>(
    {
        type:actionTypes.CHANGE_ROOM_LIST,
        roomList
    }
)

export const changeTotalCountAction = (totalCount) =>(
    {
        type:actionTypes.CHANGE_TOTAL_COUNT,
        totalCount
    }
)
export const changeIsloadingAction = (isloading) =>(
    {
       type:actionTypes.CHANGE_IsLoading,
       isloading 
    }
)

export const fetchRoomListAction = (page) =>{
    return async(dispatch,getState) =>{
        // 修改currentpage
        dispatch(changeCurrentPageAction(page))

        // 获取最新的数据
        const currentPage = getState().entire.currentPage
        dispatch(changeIsloadingAction(true))

        const res = await getEntireRooomList(currentPage *20)
        dispatch(changeIsloadingAction(false))
        // console.log(res);
        // 获取到最新的数据，保存到store中
        const roomList =res.list
        const totalCount = res.totalCount
        dispatch(changeRoomListAction(roomList))
        dispatch(changeTotalCountAction(totalCount))
    }
}