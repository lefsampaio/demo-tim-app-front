import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useState } from 'react'

const RadioButtonList = () => {
  const options = [
    'Formal',
    'Amigável',
    'Divertido',
    'Informal',
    'Profissional',
    'Natural',
  ]
  const [radio, setRadio] = useState('Formal')

  const handleTabChange = (event) => {
    setRadio(event.target.value)
  }

  return (
    <>
      <RadioGroup
        sx={{ justifyContent: 'space-between' }}
        row
        value={radio}
        onChange={handleTabChange}
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
