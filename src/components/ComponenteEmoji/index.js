import { addCampaign } from '@/store/campaignSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ComponenteEmoji = () => {
  const [useEmojis, setUseEmojis] = useState(false)
  const dispatch = useDispatch()

  const handleItemClick = (event) => {
    const selectedOption = event.target.value
    const shouldUseEmojis = selectedOption === 'Sim, utilizar emojis'
    setUseEmojis(shouldUseEmojis)
    dispatch(addCampaign({ useEmojis: shouldUseEmojis }))
  }

  return (
    <>
      <RadioGroup
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          width: '35vw',
          gap: 2,
        }}
        value={useEmojis ? 'Sim, utilizar emojis' : 'Não, sem emojis'}
        onChange={handleItemClick}
      >
        <FormControlLabel
          value="Sim, utilizar emojis"
          control={<Radio />}
          label="Sim, utilizar emojis"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Não, sem emojis"
          control={<Radio />}
          label="Não, sem emojis"
          labelPlacement="end"
        />
      </RadioGroup>
    </>
  )
}

export default ComponenteEmoji
