import { inputState } from '@/store/campaignSlice'
import { Timeline } from '@mui/lab'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import renderTimelineItem from './renderTimelineItem'

const TimelineComponent = () => {
  const inputs = useSelector(inputState)
  console.log(inputs.useEmojis)
  const timelineData = {
    name: inputs.name,
    description: 'Descrição da campanha',
    campaignChannel: inputs.campaignChannel,
    toneVoice: inputs.toneVoice,
    creativityTemperature: inputs.creativityTemperature,
    characterLimit: inputs.characterLimit,
    paragraphs: inputs.paragraphs,
    playground: inputs.playground,
    targetAudience: inputs.targetAudience,
    keyWords: inputs.keyWords,
    mentalTriggers: inputs.mentalTriggers,
    link: inputs.link,
    useEmojis: inputs.useEmojis,
    // hashtag: '#Tim; #RockinRio; #TimControle; #FestivaldeMúsica',
    // author: 'Leticia Sampaio',
  }

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: '18px', fontWeight: '700', color: 'neutral.main' }}
      >
        Resumo de parâmetros personalizados
      </Typography>
      <Box sx={{ overflow: 'auto', maxHeight: '45vh' }}>
        <Timeline sx={{ display: 'grid' }}>
          {renderTimelineItem(
            'Canal',
            timelineData.campaignChannel === 'EMKT'
              ? 'Email Marketing'
              : timelineData.campaignChannel,
          )}
          {renderTimelineItem('Tom de Voz', timelineData.toneVoice)}
          {renderTimelineItem(
            'Temperatura de Criatividade',
            timelineData.creativityTemperature !== undefined
              ? `${timelineData.creativityTemperature.toString()} º`
              : undefined,
          )}
          {renderTimelineItem(
            'Comprimento de texto',
            timelineData.characterLimit !== undefined ||
              timelineData.paragraphs !== undefined
              ? `Caracteres: ${timelineData.characterLimit}/Parágrafos: ${timelineData.paragraphs}`
              : undefined,
          )}
          {renderTimelineItem('Playground', timelineData.playground)}
          {renderTimelineItem('Público-alvo', timelineData.targetAudience)}
          {renderTimelineItem('Palavras-chave', timelineData.keyWords)}
          {renderTimelineItem(
            'Gatilhos Mentais',
            timelineData.mentalTriggers?.map((trigger, index) => (
              <Typography sx={{ fontSize: '14px' }} key={index}>
                {trigger};
              </Typography>
            )),
          )}
          {renderTimelineItem(
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
            timelineData.useEmojis ? 'Sim, utilizar emojis' : 'Não, sem emojis',
          )}
          {renderTimelineItem('Hashtags', timelineData.hashtag)}
        </Timeline>
      </Box>
    </>
  )
}

export default TimelineComponent
