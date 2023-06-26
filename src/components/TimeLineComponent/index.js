import { Timeline } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import renderTimelineItem from './renderTimelineItem'

const TimelineComponent = () => {
  const isSaved = useSelector((state) => state.campaigns.isSaved)
  const timelineData = useSelector((state) => state.campaigns.timelineData)

  return (
    <>
      {isSaved && (
        <>
          <Typography
            variant="h2"
            sx={{ fontSize: '18px', fontWeight: '700', color: 'neutral.main' }}
          >
            Resumo de parâmetros personalizados
          </Typography>
          <Box sx={{ overflow: 'auto', maxHeight: '45vh' }}>
            <Timeline sx={{ display: 'grid' }}>
              {timelineData.campaignChannel &&
                renderTimelineItem(
                  'Canal',
                  timelineData.campaignChannel === 'EMKT'
                    ? 'Email Marketing'
                    : timelineData.campaignChannel,
                )}
              {timelineData.toneVoice &&
                renderTimelineItem('Tom de Voz', timelineData.toneVoice)}
              {timelineData.creativityTemperature !== undefined &&
                renderTimelineItem(
                  'Temperatura de Criatividade',
                  `${timelineData.creativityTemperature.toString()} º`,
                )}
              {(timelineData.characterLimit !== undefined ||
                timelineData.paragraphs !== undefined) &&
                renderTimelineItem(
                  'Comprimento de texto',
                  `Caracteres: ${
                    timelineData.characterLimit || ''
                  }/Parágrafos: ${timelineData.paragraphs || ''}`,
                )}
              {timelineData.playground &&
                renderTimelineItem('Playground', timelineData.playground)}
              {timelineData.targetAudience &&
                renderTimelineItem('Público-alvo', timelineData.targetAudience)}
              {timelineData.keyWords &&
                renderTimelineItem('Palavras-chave', timelineData.keyWords)}
              {timelineData.mentalTriggers?.length > 0 &&
                renderTimelineItem(
                  'Gatilhos Mentais',
                  timelineData.mentalTriggers?.map((trigger, index) => (
                    <Typography sx={{ fontSize: '14px' }} key={index}>
                      {trigger};
                    </Typography>
                  )),
                )}
              {timelineData.link &&
                renderTimelineItem(
                  'Link',
                  <a
                    style={{ color: 'neutral.main' }}
                    href={timelineData.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {timelineData.link}
                  </a>,
                )}
              {renderTimelineItem(
                'Utilizar Emojis',
                timelineData.useEmojis === null
                  ? ''
                  : timelineData.useEmojis
                  ? 'Sim, utilizar emojis'
                  : 'Não, sem emojis',
              )}
              {timelineData.hashtag &&
                renderTimelineItem('Hashtags', timelineData.hashtag)}
            </Timeline>
          </Box>
        </>
      )}
    </>
  )
}

export default TimelineComponent
