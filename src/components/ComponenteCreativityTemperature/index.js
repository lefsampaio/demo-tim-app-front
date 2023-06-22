import React, { useState } from 'react'
import { Box, Slider, Typography } from '@mui/material'
import { addCampaign } from '@/store/campaignSlice'
import { useDispatch } from 'react-redux'

const ComponenteCreativityTemperature = () => {
  const [temperature, setTemperature] = useState(0)

  const dispatch = useDispatch()

  const handleTemperatureChange = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
    setTemperature(value)
  }

  return (
    <Box width="35vw">
      <Slider
        value={temperature}
        onChange={(event) =>
          handleTemperatureChange('creativityTemperature', event.target.value)
        }
        min={0}
        max={10}
        step={0.1}
        marks
        valueLabelDisplay="auto"
      />
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" sx={{ fontSize: '14px' }}>
          Respostas fixas
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '14px' }}>
          Liberdade criativa
        </Typography>
      </Box>
    </Box>
  )
}

export default ComponenteCreativityTemperature
