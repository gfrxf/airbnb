import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PaginationWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useSelect } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo((props) => {
  const {totalCount,currentPage,roomList} = useSelector((state)=>(
    {
      totalCount:state.entire.totalCount,
      currentPage:state.entire.currentPage,
      roomList:state.entire.roomList,

    }
  ))
  const startCount = currentPage * 20 + 1 
  const endCount = (currentPage +1 ) * 20
  const totalPage = Math.ceil(totalCount / 20) 
const dispatch = useDispatch()
  function pageChangeHandle(e,pageCount){
    // console.log(pageCount);
    // 更新页码
    // dispatch(changeCurrentPageAction(pageCount - 1))
    dispatch(fetchRoomListAction(pageCount - 1))
    window.scrollTo(0,0)
  }
  return (
   <PaginationWrapper>
    { !!roomList.length && (
         <div className="info">
         <Pagination count={totalPage} onChange={pageChangeHandle} />
           <div className="desc">
         第{startCount}-{endCount}个房源，共超过{totalCount}个
           </div>
         </div>
    )}
 
 
   </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination