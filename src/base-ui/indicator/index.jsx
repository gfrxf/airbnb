import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const {selectIndex = 0} = props
    const contentRef = useRef()
    useEffect(() =>{
        // console.log(selectIndex,"selectIndex");
        const selectItemEl =  contentRef.current.children[selectIndex]
        // console.log(selectItemEl);
        const itemLeft = selectItemEl.offsetLeft
        // console.log(itemLeft);
        const itemWidth = selectItemEl.clientWidth

        // content 的宽度
       const contenWidth = contentRef.current.clientWidth
       const contentScroll = contentRef
       .current.scrollWidth
    //    console.log(itemLeft,itemWidth,contenWidth);

        let distance =  itemLeft + itemWidth * 0.5 - contenWidth * 0.5
        if(distance < 0) distance = 0
        const totalDistance = contentScroll - contenWidth
        if(distance > totalDistance) distance = totalDistance
        // console.log(distance);
        contentRef.current.style.transform = `translate(${-distance}px)`
    },[selectIndex])
  return (
  <IndicatorWrapper>
    <div className="i-content" ref={contentRef}>
        {
            props.children
        }
    </div>

  </IndicatorWrapper>
  )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator