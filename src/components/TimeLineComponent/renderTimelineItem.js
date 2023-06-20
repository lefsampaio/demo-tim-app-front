import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Typography } from '@mui/material'

const renderTimelineItem = (title, value) => {
  return (
    <>
      {value ? (
        <TimelineItem
          sx={{ '&:before': { content: 'none' }, minHeight: '50px' }}
        >
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: 'red', borderWidth: '0px' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            sx={{ display: 'flex', alignItems: 'flex-start', width: '718px' }}
          >
            <Typography
              variant="h3"
              mr={1}
              sx={{ fontSize: '14px', fontWeight: '700' }}
            >
              {title}:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>{value}</Typography>
          </TimelineContent>
        </TimelineItem>
      ) : null}
    </>
  )
}
export default renderTimelineItem
