import { addCampaign } from '@/store/campaignSlice'
import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'

const ComponenteLink = () => {
  const dispatch = useDispatch()

  const handleTextChange = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
  }

  return (
    <TextField
      onChange={(event) => handleTextChange('link', event.target.value)}
      rows={3}
      multiline
      sx={{ width: '35vw' }}
      placeholder="Digite aqui o link original"
    />
  )
}
export default ComponenteLink
