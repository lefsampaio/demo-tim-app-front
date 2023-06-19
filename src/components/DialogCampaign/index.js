import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { selectDialogState, setDialogState } from '@/store/dialogSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import { addCampaign, inputState } from '@/store/campaignSlice'

const DialogCampaign = () => {
  const isOpen = useSelector(selectDialogState)
  const router = useRouter()
  const dispatch = useDispatch()
  const inputValue = useSelector(inputState)
  const handleClose = () => {
    dispatch(setDialogState(!isOpen))
  }

  const handleChange = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
  }

  const handleNext = () => {
    router.push('/steps')
    handleClose()
  }
  const isNameEmpty = !(inputValue.name?.trim() || '')

  return (
    <Dialog
      PaperProps={{
        sx: { borderRadius: '32px', minWidth: '733px' },
      }}
      sx={{
        textAlign: 'center',
      }}
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle
        sx={{
          fontSize: '32px',
          fontWeight: '700',
          textAlign: 'left',
          color: 'neutral.main',
          mt: 4,
          px: 6,
        }}
      >
        Informe os dados para cadastrar uma nova campanha.{' '}
      </DialogTitle>
      <DialogContent
        sx={{ px: 7, display: 'grid', flexDirection: 'column', gap: '20px' }}
      >
        <TextField
          onChange={(e) => handleChange('name', e.target.value)}
          autoFocus
          required
          margin="dense"
          id="name"
          label="Nome da campanha"
          type="text"
          fullWidth
          variant="outlined"
        />

        <InputLabel sx={{ textAlign: 'left' }} id="select-label">
          Base de Dados(opcional)
        </InputLabel>
        <Select
          sx={{ textAlign: 'left' }}
          defaultValue=""
          input={<OutlinedInput />}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
          labelId="select-label"
          required
          onChange={(e) => handleChange('data', e.target.value)}
          label="Selecione"
        >
          <MenuItem disabled value="">
            Selecione
          </MenuItem>
          <MenuItem value={10}>Sem base de dados</MenuItem>
          {/* <MenuItem value={20}>Todas as bases de dados</MenuItem>
          <MenuItem value={30}>Campanha Básico Natal.word</MenuItem> */}
        </Select>
      </DialogContent>
      <DialogActions sx={{ px: 7 }}>
        <Button
          disabled={isNameEmpty}
          onClick={handleNext}
          sx={{
            backgroundColor: '#004691',
            textTransform: 'none',
            fontSize: '16px',
            width: '100%',
            mb: 10,
            height: '56px',
            borderRadius: '8px',
          }}
          variant="contained"
        >
          continuar
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default DialogCampaign
