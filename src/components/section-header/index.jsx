import propTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SeactionHeader = memo((props) => {
    const {title,subtitle} = props
  return (
    <HeaderWrapper>
        <h2 className="title">{title}</h2>
        {subtitle && <div className="subtitle">{subtitle}</div>}
      
    </HeaderWrapper>
  )
})

SeactionHeader.propTypes = {
    title:propTypes.string,
    subtitle:propTypes.string
}


export default SeactionHeader