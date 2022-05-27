import React from 'react'
import { TableOfContents } from '../../Utilities/TableOfContents'

export const TableOfContentsUdemyUserScript = () => {
  return (
    <TableOfContents
      content={[
        { display: 'Goal', url: '#goal' },
        {
          display: 'Video demo',
          url: '#video-demo',
          nestedContent: [
            {
              display: 'Copy from practice test',
              url: '#video-demo-copy-from-practice-test',
            },
            {
              display: 'Copy from end of section quiz',
              url: '#video-demo-copy-from-end-of-section-quiz',
            },
            {
              display: 'End result in Zorbi',
              url: '#end-result-in-zorbi',
            },
          ],
        },
        {
          display: 'Code',
          url: '#code',
          nestedContent: [
            {
              display: 'Copy from practice test',
              url: '#copy-from-practice-test',
            },
            {
              display: 'Copy from end of section quiz',
              url: '#copy-from-end-of-section-quiz',
            },
          ],
        },
        {
          display: 'Lessons learned',
          url: '#lessons-learned',
        },
        {
          display: 'Potential problems',
          url: '#potential-problems',
        },
      ]}
    />
  )
}
