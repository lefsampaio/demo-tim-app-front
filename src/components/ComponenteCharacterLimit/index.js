import React, { useState } from 'react'
import { Box, Button, Card, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCampaign } from '@/store/campaignSlice'

const CustomCard = styled(Card)(({ theme, selected }) => ({
  width: '252px',
  border: `1px solid ${theme.palette.customBlue.main}`,
  minHeight: '88px',
  padding: '8px 8px 0 8px',
  marginBottom: '24px',
  borderRadius: '16px',
  textTransform: 'none',
  textAlign: 'left',
  boxShadow:
    ' 0px 2px 4px - 1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'transparent',
  color: 'inherit',
}))

const ComponenteCharacterLimit = () => {
  const [character, setCharacter] = useState(0)
  const [paragraph, setParagraph] = useState(0)
  const dispatch = useDispatch()
  const incrementCharacter = () => {
    if (character < 150) {
      setCharacter(character + 1)
    }
  }

  const decrementCharacter = () => {
    if (character > 0) {
      setCharacter(character - 1)
    }
  }

  const incrementParagraph = () => {
    if (paragraph < 3) {
      setParagraph(paragraph + 1)
    }
  }

  const decrementParagraph = (key, value) => {
    if (paragraph > 0) {
      setParagraph(paragraph - 1)
      dispatch(addCampaign({ [key]: value }))
    }
  }

  // const handleTemperatureChange = (key, value) => {
  //   dispatch(addCampaign({ [key]: value }))
  //   setTemperature(value)
  // }

  return (
    <Box width="35vw">
      <CustomCard>
        <Button variant="contained" onClick={incrementCharacter}>
          +
        </Button>
        <span>{character}</span>
        <Button variant="contained" onClick={decrementCharacter}>
          -
        </Button>
      </CustomCard>
      <br />
      <CustomCard>
        <Button variant="contained" onClick={incrementParagraph}>
          +
        </Button>
        <span>{paragraph}</span>
        <Button variant="contained" onClick={decrementParagraph}>
          -
        </Button>
      </CustomCard>
    </Box>
  )
}

export default ComponenteCharacterLimit
