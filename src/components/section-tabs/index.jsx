import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import propTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
    const {tabNames = [],tabClick} = props
    const [currentIndex,setCurrentIndex] = useState(0)

   function itemClickHandle(index,item){
        setCurrentIndex(index)
        tabClick(index,item)
    }

  return (
    <TabsWrapper>
        <ScrollView>
        {
            tabNames.map((item ,index) => {
                return(
                    <div  key={index}
                    onClick = {e => itemClickHandle(index,item)}
                    className = {classNames("item",{active:index === currentIndex})}
                    >
                        {item}
                    </div>
                )
            })
        }
        </ScrollView>
   
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
    tabNames:propTypes.array
}

export default SectionTabs