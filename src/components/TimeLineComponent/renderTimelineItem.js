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
          <TimelineContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Typography
              variant="h3"
              mr={1}
              sx={{
                fontSize: '14px',
                fontWeight: '700',
                color: 'neutral.main',
              }}
            >
              {title}:
            </Typography>
            <Typography sx={{ color: 'neutral.main', fontSize: '14px' }}>
              {value}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      ) : null}
    </>
  )
}
export default renderTimelineItem
