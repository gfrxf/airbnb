import { useSelect } from '@mui/base'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DetailInfo from './c-cpns/detail-infos'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const detail = memo(() => {
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