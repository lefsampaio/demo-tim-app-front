// import { useSelector } from 'react-redux'

// import { tabs } from '@/utils/tabs'
import { Box } from '@mui/material'
// import MuiAlert from '@mui/material/Alert'
// import RadioButtonList from '../RadioButtonList'
// import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import TimelineComponent from '../TimeLineComponent'
// import { useState } from 'react'

const TabPanel = () => {
  //   const selectedButton = useSelector((state) => state.tabPanel.selectedButton)
  //   const [open, setOpen] = useState(false)

  //   const handleClick = () => {
  //     setOpen(true)
  //   }
  //   const handleClose = (event, reason) => {
  //     if (reason === 'clickaway') {
  //       return
  //     }

  //     setOpen(false)
  //   }
  // const componentMap = {
  //   'Tom de voz': ComponenteTomDeVoz,
  //   'Temperatura de Criatividade': ComponenteTemperaturaDeCriatividade,
  //   'Comprimento de Texto': ComponenteComprimentoDeTexto,
  //   'Playground': ComponentePlayground,
  //   'Público alvo': ComponentePublicoAlvo,
  //   'Palavras-chave': ComponentePalavrasChave,
  //   'Gatilhos mentais': ComponenteGatilhosMentais,
  //   'Link': ComponenteLink,
  //   'Emoji': ComponenteEmoji,
  //   'Hashtags': ComponenteHashtags,
  // };

  // const Component = componentMap[selectedButton];
  return (
    <Box>
      {/* {tabs.map((item, index) => (
                <Box sx={{ mb: '70px' }} key={index}>
                    {selectedButton == item.title && (
                        <Box sx={{ maxHeight: '90vh' }}>
                            <Typography variant='h2' gutterBottom mt={3} sx={{ fontSize: '18px', fontWeight: '700', color: 'neutral.main' }}> {item.title}</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'lighter.main', mr: 8, mb: 8 }}> {item.description}</Typography>
                            <RadioButtonList />
                        </Box>
                    )}
                </Box>
            ))}
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Parâmetro salvo
                </MuiAlert>
            </Snackbar>
            <Button onClick={handleClick} startIcon={<NoteAddOutlinedIcon />} sx={{
                backgroundColor: '#fff', color: 'customBlue.main', border: '1px solid',
                borderColor: 'customBlue.main', textTransform: 'none', fontSize: '16px', width: '100%',
                height: '56px', borderRadius: '8px',
                mb: '40px', '&:hover': {
                    backgroundColor: 'customBlue.main',
                    color: '#fff',
                },
            }} variant="contained">salvar parâmetro</Button>
            <Divider /> */}
      <TimelineComponent />
    </Box>
  )
}

export default TabPanel
