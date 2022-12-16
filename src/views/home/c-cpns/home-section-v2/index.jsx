import SectionFooter from '@/components/seaction-footer'
import SeactionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import propTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'
import { SectionV2Wrapper } from './style'

const HomeSectionV2 = memo((props) => {
      /** 从props获取数据 */
    const {infoData} = props

     /** 定义内部的state */
  const initialName = Object.keys(infoData.dest_list)[0]
  const [name,setNames] = useState(initialName)
  const tabNames = infoData.dest_address?.map(item => item.name)

   /** 事件处理函数 */
  const tabClickHandle = useCallback(function (index,item) {
    console.log(item);
    setNames(item)
  },[])
  return (
   <SectionV2Wrapper>
    <SeactionHeader title={infoData.title} subtitle={infoData.subtitle}/>
    <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
    <SectionRooms roomList={infoData.dest_list?.[name] } itemWidth = "33.3333%"/>
    
    <SectionFooter name={name}/>
   </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
    infoData:propTypes.object
}

export default HomeSectionV2