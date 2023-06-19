import { Container, Box, Typography, Button } from '@mui/material'
import TopBar from '@/components/TopBar'
import FileDropzone from '@/components/FileDropZone'
import DialogCampaign from '@/components/DialogCampaign'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import { selectDialogState, setDialogState } from '@/store/dialogSlice'
import { useDispatch, useSelector } from 'react-redux'

const DataBaseComponent = () => {
  const openDialog = useSelector(selectDialogState)
  const dispatch = useDispatch()

  const handleOpen = () => {
    openDialog
      ? dispatch(setDialogState(false))
      : dispatch(setDialogState(true))
  }

  return (
    <>
      <TopBar title="Base de Dados" />
      <Container sx={{ mt: 12 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box>
            <Typography
              component="h2"
              mb={3}
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                textAlignLast: 'left',
                color: '#2F2F2F',
              }}
            >
              Upload de arquivos de texto
            </Typography>
            <Typography
              mb={5}
              sx={{ color: '#565656', fontSize: '16px', textAlignLast: 'left' }}
            >
              Utilize este espaço para fornecer informações ao sistema, a
              respeito da sua marca ou produto.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr' },
            gap: 2,
          }}
        >
          <FileDropzone />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={9}>
          <Button
            sx={{
              backgroundColor: '#0026D9',
              textTransform: 'none',
              fontSize: '16px',
              width: '256px',
              height: '56px',
              borderRadius: '8px',
            }}
            href="/painel"
            variant="contained"
          >
            voltar
          </Button>
          <Button
            onClick={handleOpen}
            startIcon={<NoteAddOutlinedIcon />}
            sx={{
              backgroundColor: '#0026D9',
              textTransform: 'none',
              fontSize: '16px',
              width: '256px',
              height: '56px',
              borderRadius: '8px',
            }}
            variant="contained"
          >
            nova campanha
          </Button>
        </Box>
        <DialogCampaign />
      </Container>
    </>
  )
}
export default DataBaseComponent
