import React, { memo,  useEffect } from "react";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

import HomeSectionV1 from "./c-cpns/home-section-v1";
// import SeactionHeader from "@/components/section-header";
// import SectionRooms from "@/components/section-rooms";
// import SectionTabs from "@/components/section-tabs";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import {isEmpty} from '@/utils'
import HomeLangfor from "./c-cpns/home-langfor";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import { changeHeaderConfigAction } from "@/store/modules/main";



const home = memo(() => {



  /** 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo} = useSelector ((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)




  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: true }))
  },[dispatch])
  return (
    <HomeWrapper>
     
      <HomeBanner/>
      <div className="content">
       {/* 折扣数据 */}
       {/* <div className="discount">
        <SeactionHeader title = {discountInfo.title} subtitle = {discountInfo.subtitle}/>
        <SectionTabs tabNames = {tabNames} tabClick = {tabClickHandle}/>
        <SectionRooms roomList = {discountInfo.dest_list?.[name]} itemWidth = "33.3333%"/>
       </div> */}
       { isEmpty(discountInfo) && <HomeSectionV2 infoData = {discountInfo}/> }
       {isEmpty(recommendInfo) && <HomeSectionV2 infoData = {recommendInfo}/>}


       {isEmpty(longforInfo) && <HomeLangfor infoData = {longforInfo}/>}
      
       {isEmpty(goodPriceInfo) && <HomeSectionV1 infoData = {goodPriceInfo}/>} 
       {isEmpty(highScoreInfo) &&   <HomeSectionV1 infoData = {highScoreInfo}/>}
       {isEmpty(plusInfo) && <HomeSectionV3 infoData = {plusInfo}/>}
      
      
      </div>
      
    </HomeWrapper>
    
  );
});

export default home;
