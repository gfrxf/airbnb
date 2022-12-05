import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ViewWrapper } from './style'

const  ScrollView = memo((props) => {

  return (
   <ViewWrapper>
    <div className="scroll-content">
    {props.children}
    </div>
   </ViewWrapper>
  )
})

 ScrollView.propTypes = {}

export default  ScrollView