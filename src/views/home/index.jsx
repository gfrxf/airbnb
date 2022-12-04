import React, { memo, useEffect } from "react";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";

import HomeSectionV1 from "./c-cpns/home-section-v1";
import SeactionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";


const home = memo(() => {
  /** 从redux中获取数据 */
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector ((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo
  }),shallowEqual)

  const tabNames = discountInfo.dest_address?.map(item => item.name)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchHomeDataAction())
  },[dispatch])
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
       {/* 折扣数据 */}
       <div className="discount">
        <SeactionHeader title = {discountInfo.title} subtitle = {discountInfo.subtitle}/>
        <SectionTabs tabNames = {tabNames}/>
        <SectionRooms roomList = {discountInfo.dest_list?.["成都"]} itemWidth = "33.3333%"/>
       </div>
        <HomeSectionV1 infoData = {goodPriceInfo}/>
        <HomeSectionV1 infoData = {highScoreInfo}/>
      
      </div>
      
    </HomeWrapper>
    
  );
});

export default home;
