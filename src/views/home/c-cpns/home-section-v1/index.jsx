import SeactionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import propTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props
  return (
   <SectionV1Wrapper>
    <SeactionHeader title={infoData.title} subtitle={infoData.subtitle} />
    <SectionRooms roomList={infoData.list}/>
   </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
    infoData:propTypes.object
}

export default HomeSectionV1