import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import IconClose from "@/assets/svg/icon-close";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { BrowserWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group"

const PictureBrower = memo((props) => {
  const { pictureUrls, closeClick } = props;
  const [currentIndex, setCurrentIndex] = useState(0)

  // 当图片浏览器展示出来时, 滚动的功能消失
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });
  /** 事件监听的逻辑 */
  function closeBtnClickHandle() {
    if (closeClick) closeClick();
  }
  function controlClickHandle(isNext = true){
   let newIndex = isNext ? currentIndex + 1: currentIndex - 1
   if (newIndex < 0) newIndex = pictureUrls.length - 1
   if (newIndex > pictureUrls.length - 1) newIndex = 0
   setCurrentIndex(newIndex)
  }
  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width="77" height="77" />
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width="77" height="77" />
          </div>
        </div>
        <div className="picture">
         <img src={pictureUrls[currentIndex]} alt="" />
        </div>
      </div>
      <div className="preview"></div>
    </BrowserWrapper>
  );
});

PictureBrower.propTypes = {};

export default PictureBrower;
