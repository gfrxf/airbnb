import React, { memo, useEffect } from "react";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "@/store/modules/home";
import SeactionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
import { Rate } from 'antd';
import Rating from '@mui/material/Rating';


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
      <ul className="room-list">
        {
          goodPriceInfo.list?.slice(0,8)?.map(item => {
            return <RoomItem itemData={item} key={item.id}/>
          })
        }
      </ul>
        </div>

      </div>
      
    </HomeWrapper>
    
  );
});

export default home;
