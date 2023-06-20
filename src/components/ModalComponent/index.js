import { Box, Button, Modal, Typography } from '@mui/material'
import Image from 'next/image'

const ModalComponent = ({ open, onClose, onClick }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '567px',
    height: '463px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const handleClose = () => {
    onClose()
  }

  const handleButtonClick = () => {
    onClick()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      {/* Conteúdo do modal */}
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Atenção!
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, fontSize: '14px' }}
        >
          Esta é uma versão de demonstração, por este motivo todos os parâmetros
          estão pré-definidos pelo sistema. Sendo assim, neste momento os itens
          de parametrização estarão bloqueados para suas respectivas
          personalizações.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: '40px' }}>
          <Image src="/images/disabled.png" alt="" width={248} height={104} />
        </Box>
        <Button
          onClick={handleButtonClick}
          sx={{
            border: '1px solid',
            borderColor: 'customBlue.main',
            textTransform: 'none',
            fontSize: '16px',
            width: '100%',
            height: '56px',
            borderRadius: '8px',
            backgroundColor: 'customBlue.main',
            color: '#fff',
            mb: '40px',
            '&:hover': {
              backgroundColor: '#fff',
              color: 'customBlue.main',
            },
          }}
          variant="contained"
        >
          ok, entendi
        </Button>
      </Box>
    </Modal>
  )
}
export default ModalComponent
