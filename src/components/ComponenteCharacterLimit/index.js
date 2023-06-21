import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
// import { addCampaign } from '@/store/campaignSlice'
// import { useDispatch } from 'react-redux'

const ComponenteCharacterLimit = () => {
  //   const [temperature, setTemperature] = useState(8.5)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  //   const dispatch = useDispatch()
  const handleIncrement1 = () => {
    if (count1 < 150) {
      setCount1(count1 + 1)
    }
  }

  const handleDecrement1 = () => {
    if (count1 > 0) {
      setCount1(count1 - 1)
    }
  }

  const handleIncrement2 = () => {
    if (count2 < 3) {
      setCount2(count2 + 1)
    }
  }

  const handleDecrement2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1)
    }
  }

  //   const handleTemperatureChange = (key, value) => {
  //     dispatch(addCampaign({ [key]: value }))
  //     setTemperature(value)
  //   }

  return (
    <Box width="35vw">
      <Button variant="contained" onClick={handleIncrement1}>
        +
      </Button>
      <Button variant="contained" onClick={handleDecrement1}>
        -
      </Button>
      <span>{count1}</span>
      <br />
      <Button variant="contained" onClick={handleIncrement2}>
        +
      </Button>
      <Button variant="contained" onClick={handleDecrement2}>
        -
      </Button>
      <span>{count2}</span>
    </Box>
  )
}

export default ComponenteCharacterLimit
