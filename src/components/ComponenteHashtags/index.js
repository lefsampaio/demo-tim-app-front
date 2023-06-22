import { addCampaign } from '@/store/campaignSlice'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

const ComponenteHashtags = () => {
  const dispatch = useDispatch()

  const handleTextChange = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
  }

  return (
    <TextField
      onChange={(event) => handleTextChange('hashtag', event.target.value)}
      rows={3}
      multiline
      sx={{ width: '35vw' }}
      placeholder="Digite aqui a(s) hashtag(s). Se houver mais de uma, separe-as por “;”. Exemplo: #Tim; #Vamosnessa."
    />
  )
}
export default ComponenteHashtags
