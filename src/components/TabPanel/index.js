import { tabs } from '@/utils/tabs'
import { Box, Button, Divider, Snackbar, Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import TimelineComponent from '../TimeLineComponent'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ComponenteToneVoice from '../ComponenteToneVoice'
import ComponenteCreativityTemperature from '../ComponenteCreativityTemperature'
import ComponenteCharacterLimit from '../ComponenteCharacterLimit'
import ComponentePlayground from '../ComponentePlayground'
import ComponenteTargetAudience from '../ComponenteTargetAudience'
import ComponenteKeyWords from '../ComponenteKeyWords'
import ComponenteMentalTriggers from '../ComponenteMentalTriggers'
import ComponenteLink from '../ComponenteLink'
import ComponenteEmoji from '../ComponenteEmoji'
import ComponenteHashtags from '../ComponenteHashtags'
import { saveParameters } from '@/store/campaignSlice'

const TabPanel = () => {
  const selectedButton = useSelector((state) => state.tabPanel.selectedButton)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    setOpen(true)
    dispatch(saveParameters())
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  const componentMap = {
    'Tom de voz': ComponenteToneVoice,
    'Temperatura de Criatividade': ComponenteCreativityTemperature,
    'Comprimento de Texto': ComponenteCharacterLimit,
    Playground: ComponentePlayground,
    'Público alvo': ComponenteTargetAudience,
    'Palavras-chave': ComponenteKeyWords,
    'Gatilhos mentais': ComponenteMentalTriggers,
    Link: ComponenteLink,
    Emoji: ComponenteEmoji,
    Hashtags: ComponenteHashtags,
  }
  const Component = componentMap[selectedButton]
  return (
    <Box minHeight="110vh" width="35vw">
      {tabs.map((item, index) => (
        <Box key={index}>
          {selectedButton === item.title && (
            <Box>
              <Typography
                variant="h2"
                gutterBottom
                mt={3}
                sx={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'neutral.main',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  maxWidth: '550px',
                  color: 'lighter.main',
                  mb: 3,
                }}
              >
                {item.description}
              </Typography>
              <Component />
            </Box>
          )}
        </Box>
      ))}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          Parâmetro salvo
        </MuiAlert>
      </Snackbar>
      <Button
        onClick={handleClick}
        startIcon={<NoteAddOutlinedIcon />}
        sx={{
          backgroundColor: '#fff',
          color: 'customBlue.main',
          border: '1px solid',
          borderColor: 'customBlue.main',
          textTransform: 'none',
          fontSize: '16px',
          width: '35vw',
          height: '56px',
          mt: '15px',
          borderRadius: '8px',
          mb: 2,
          '&:hover': {
            backgroundColor: 'customBlue.main',
            color: '#fff',
          },
        }}
        variant="contained"
      >
        salvar parâmetro
      </Button>
      <Divider sx={{ width: '35vw', mb: 2 }} />
      <TimelineComponent />
    </Box>
  )
}

export default TabPanel
