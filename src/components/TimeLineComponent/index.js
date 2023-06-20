import { inputState } from '@/store/campaignSlice'
import { Timeline } from '@mui/lab'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import renderTimelineItem from './renderTimelineItem'

const TimelineComponent = () => {
  const inputs = useSelector(inputState)

  const timelineData = {
    name: inputs.name,
    description: 'Descrição da campanha',
    campaignChannel: inputs.campaignChannel,
    toneVoice: inputs.toneVoice,
    creativityTemperature: inputs.creativityTemperature,
    characterLimit: inputs.characterLimit,
    // paragraphs: 1,
    // playground:
    //   'Texto divertido e próximo do consumidor, sem uso de palavras complicadas e termos técnicos, voltado para jovens universitários que gostam de música e gostariam de ir ao Rock in Rio',
    // targetAudience: 'Clientes TIM Pré.',
    // keyWords: 'Plano; Promoção; Tim; Streaming; Dados; Tim Controle',
    // mentalTriggers: ['Escassez;', 'Confiança'],
    // link: 'https://bit.ly/45pjiVs',
    // useEmojis: true,
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
      <Box sx={{ overflow: 'auto', maxHeight: '35vh' }}>
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
              ? `Caracteres: ${timelineData.characterLimit.toString()}/Parágrafos: ${timelineData.paragraphs.toString()}`
              : undefined,
          )}
          {renderTimelineItem('Playground', timelineData.playground)}
          {renderTimelineItem('Público-alvo', timelineData.targetAudience)}
          {renderTimelineItem('Palavras-chave', timelineData.keyWords)}
          {renderTimelineItem(
            'Gatilhos Mentais',
            timelineData.mentalTriggers?.map((trigger, index) => (
              <Typography sx={{ fontSize: '14px' }} key={index}>
                {trigger}
              </Typography>
            )),
          )}
          {renderTimelineItem(
            'Link',
            timelineData.link,
            // <Link href={timelineData.link} target="_blank">

            // </Link>,
          )}
          {renderTimelineItem('Utilizar Emojis', timelineData.useEmojis)}
          {renderTimelineItem('Hashtags', timelineData.hashtag)}
        </Timeline>
      </Box>
    </>
  )
}

export default TimelineComponent
