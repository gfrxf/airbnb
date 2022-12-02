import React, { memo, useEffect, useState } from "react";
import hyRequest from "@/serviews";
import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SeactionHeader from "@/components/section-header";

const home = memo(() => {
  /** 从redux中获取数据 */
  const {goodPriceInfo} = useSelector ((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual)


  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect( () => {
    dispatch(fetchHomeDataAction())
  },[dispatch])
  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
      <div className="good-price">
        <SeactionHeader title={goodPriceInfo.title}/>
      </div>
      </div>
    </HomeWrapper>
  );
});

export default home;
