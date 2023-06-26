import { addCampaign } from '@/store/campaignSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ComponenteEmoji = () => {
  const [useEmojis, setUseEmojis] = useState(null)
  const dispatch = useDispatch()

  const handleItemClick = (event) => {
    const selectedOption = event.target.value
    setUseEmojis(selectedOption === 'true')
    dispatch(addCampaign({ useEmojis: selectedOption === 'true' }))
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
        value={useEmojis === null ? '' : String(useEmojis)}
        onChange={handleItemClick}
      >
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="Sim, utilizar emojis"
          labelPlacement="end"
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="Não, sem emojis"
          labelPlacement="end"
        />
      </RadioGroup>
    </>
  )
}

export default ComponenteEmoji
