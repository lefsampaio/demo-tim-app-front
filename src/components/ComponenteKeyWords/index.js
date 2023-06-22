import { addCampaign } from '@/store/campaignSlice'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

const ComponenteKeyWords = () => {
  const dispatch = useDispatch()

  const handleTextChange = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
  }

  return (
    <TextField
      onChange={(event) => handleTextChange('keyWords', event.target.value)}
      rows={3}
      multiline
      sx={{ width: '35vw' }}
      placeholder="Digite aqui a(s) palavra(s)-chave. Se houver mais de uma, separe-as por “;”. Exemplo: Plano; Promoção; Tim"
    />
  )
}
export default ComponenteKeyWords
