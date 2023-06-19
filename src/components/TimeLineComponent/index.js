import { inputState } from '@/store/campaignSlice'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab'
import { Link, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const TimelineComponent = () => {
  const inputs = useSelector(inputState)

  const timelineData = {
    name: inputs.name,
    description: 'Descrição da campanha',
    campaignChannel: inputs.campaignChannel,
    toneVoice: 'Divertido',
    creativityTemperature: 8.5,
    characterLimit: 250,
    paragraphs: 1,
    playground:
      'Texto divertido e próximo do consumidor, sem uso de palavras complicadas e termos técnicos, voltado para jovens universitários que gostam de música e gostariam de ir ao Rock in Rio',
    targetAudience: 'Clientes TIM Pré.',
    keyWords: 'Plano; Promoção; Tim; Streaming; Dados; Tim Controle',
    mentalTriggers: ['Escassez;', 'Confiança'],
    link: 'https://bit.ly/45pjiVs',
    useEmojis: true,
    hashtag: '#Tim; #RockinRio; #TimControle; #FestivaldeMúsica',
    author: 'Leticia Sampaio',
  }

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: '18px', fontWeight: '700', color: 'neutral.main' }}
      >
        Resumo de parâmetros personalizados
      </Typography>
      {/* <Box sx={{ overflow: 'auto', maxHeight: '35vh' }}> */}
      <Timeline sx={{ display: 'grid' }}>
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
              Canal:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {timelineData.campaignChannel === 'EMKT'
                ? 'Email Marketing'
                : timelineData.campaignChannel}
            </Typography>
          </TimelineContent>
        </TimelineItem>

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
              Tom de Voz:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {timelineData.toneVoice}
            </Typography>
          </TimelineContent>
        </TimelineItem>

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
              Temperatura de criatividade:
            </Typography>
            <Typography
              sx={{ fontSize: '14px' }}
            >{`${timelineData.creativityTemperature}º`}</Typography>
          </TimelineContent>
        </TimelineItem>

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
              Comprimento de texto:{' '}
            </Typography>
            <Typography
              sx={{ fontSize: '14px' }}
            >{`Caracteres: ${timelineData.characterLimit}/Parágrafos: ${timelineData.paragraphs}`}</Typography>
          </TimelineContent>
        </TimelineItem>

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
              Playground:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {' '}
              {timelineData.playground}
            </Typography>
          </TimelineContent>
        </TimelineItem>

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
              Público-alvo:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {' '}
              {timelineData.targetAudience}
            </Typography>
          </TimelineContent>
        </TimelineItem>

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
              Palavras-chave:{' '}
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {timelineData.keyWords}
            </Typography>
          </TimelineContent>
        </TimelineItem>

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
              sx={{ fontSize: '14px', fontWeight: '700', mr: 1 }}
            >
              Gatilhos Mentais:
            </Typography>
            {timelineData.mentalTriggers.map((trigger, index) => (
              <Typography sx={{ fontSize: '14px' }} key={index}>
                {trigger}
              </Typography>
            ))}
          </TimelineContent>
        </TimelineItem>

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
              Link:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {' '}
              <Link href={timelineData.link} target="_blank">
                {timelineData.link}
              </Link>
            </Typography>
          </TimelineContent>
        </TimelineItem>
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
              Emoji
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {timelineData.useEmojis ? 'Sim, gostaria de usar emojis' : 'No'}
            </Typography>
          </TimelineContent>
        </TimelineItem>
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
              Hashtags:
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              {timelineData.hashtag}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      {/* </Box> */}
    </>
  )
}

export default TimelineComponent
