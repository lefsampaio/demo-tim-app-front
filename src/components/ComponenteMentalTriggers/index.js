import { addCampaign } from '@/store/campaignSlice'
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const ComponenteMentalTriggers = () => {
  const options = [
    'Urgência',
    'Escassez',
    'Exclusividade',
    'Social Proof',
    'Autoridade',
    'Reciprocidade',
    'Curiosidade',
    'Personalização',
    'Garantia',
  ]
  const [checkedItems, setCheckedItems] = useState([])

  const dispatch = useDispatch()

  const handleCheckboxChange = (key, value) => {
    const newCheckedItems = checkedItems.includes(value)
      ? checkedItems.filter((item) => item !== value)
      : [...checkedItems, value]

    setCheckedItems(newCheckedItems)
    dispatch(addCampaign({ [key]: newCheckedItems }))
  }

  return (
    <>
      <FormGroup
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '35vw',
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={checkedItems.includes(option)}
                onChange={() => handleCheckboxChange('mentalTriggers', option)}
              />
            }
            label={option}
            labelPlacement="end"
          />
        ))}
      </FormGroup>
    </>
  )
}

export default ComponenteMentalTriggers
