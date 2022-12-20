import { changeHeaderConfigAction } from '@/store/modules/main'
import { useSelect } from '@mui/base'
import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DetailInfo from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const detail = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({
      isFixed: false, topAlpha: false
    }))
  },[dispatch])
  const {detailInfo} = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }))
  return (
   <DetailWrapper>
    <DetailPictures/>
    <DetailInfo/>
   </DetailWrapper>
  )
})

export default detail