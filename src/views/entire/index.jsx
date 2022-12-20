import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { changeHeaderConfigAction } from '@/store/modules/main'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'



const entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchRoomListAction())
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  },[dispatch])
  return (
    <EntireWrapper>
  
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>

    </EntireWrapper>
  )
})

export default entire