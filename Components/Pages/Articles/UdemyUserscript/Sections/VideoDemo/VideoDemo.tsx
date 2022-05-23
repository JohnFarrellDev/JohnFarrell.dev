import React from 'react'
import { VideoContainer } from '../../../../../Utilities/VideoContainer'
import { SectionTitle } from '../../../Utilities/SectionTitle'
import { SubSectionTitle } from '../../../Utilities/SubSectionTitle'

export const VideoDemo = () => {
  return (
    <>
      <SectionTitle id="video-demo">Video Demo</SectionTitle>

      <SubSectionTitle id="video-demo-copy-from-practice-test">
        Copy from Practice Test
      </SubSectionTitle>
      <VideoContainer>
        <iframe src="https://www.youtube.com/embed/iNQTm9M3rbE" />
      </VideoContainer>

      <SubSectionTitle id="video-demo-copy-from-end-of-section-quiz">
        Copy from End of Section Quiz
      </SubSectionTitle>
      <VideoContainer>
        <iframe src="https://www.youtube.com/embed/dTyebX77JPU" />
      </VideoContainer>

      <SubSectionTitle id="end-result-in-zorbi">
        End result in Zorbi
      </SubSectionTitle>
      <VideoContainer>
        <iframe src="https://www.youtube.com/embed/7WWEwf86RvE" />
      </VideoContainer>
    </>
  )
}
