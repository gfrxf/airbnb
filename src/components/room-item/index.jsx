import propTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
const RoomItem = memo((props) => {
    const {itemData,itemWidth = "25%"} = props
    const slideRef = useRef()

    // 点击时间处理函数
    function controlClickHandle(isRight = true){
      isRight ? slideRef.current.next() : slideRef.current.prev()

    }
  return (
    <ItemWrapper itemWidth = {itemWidth} verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className="inner">
        {/* <div className="cover">
            <img src={itemData.picture_url} alt="" />
        </div> */}
        <div className="swiper">
          <div className="control">
            <div className="btn left" onClick={e => controlClickHandle(false)}>
          <IconArrowLeft width="30" heigt="30" />
            </div>
            <div className="btn right" onClick={e => controlClickHandle(true)}>
          <IconArrowRight width="30" heigt="30"/>
            </div>
          </div>
          <Carousel dots={false} autoplay={true} ref={slideRef}>
            {itemData?.picture_urls?.map(item => {
              return (
                <div className="cover" key={item}>
                    <img src={item} alt="" />
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="desc">
            {itemData.verify_info.messages.join(" . ")}
        </div>
        <div className="name">{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>


        <div className="bottom">
        <Rating value={itemData.star_rating ?? 5}
        precision = {0.1}
        readOnly
        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
        ></Rating>
        <span className="count" >{itemData.reviews_count}</span>
        {
            itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData:propTypes.object
}

export default RoomItem