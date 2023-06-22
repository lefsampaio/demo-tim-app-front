import { addCampaign } from '@/store/campaignSlice'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const RadioButtonList = () => {
  const options = [
    'Formal',
    'Amigável',
    'Divertido',
    'Informal',
    'Profissional',
    'Natural',
  ]
  const [radio, setRadio] = useState('')
  const dispatch = useDispatch()

  const handleItemClick = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
    setRadio(value)
  }

  return (
    <>
      <RadioGroup
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '35vw',
        }}
        value={radio}
        onChange={(event) => handleItemClick('toneVoice', event.target.value)}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
            labelPlacement="end"
          />
        ))}
      </RadioGroup>
    </>
  )
}

export default RadioButtonList
