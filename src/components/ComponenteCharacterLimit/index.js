import React, { useState } from 'react'
import { Box, Button, Card, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCampaign } from '@/store/campaignSlice'

const CustomCard = styled(Card)(({ theme, selected }) => ({
  width: '252px',
  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  border: `1px solid ${theme.palette.customBlue.main}`,
  minHeight: '88px',
  padding: '24px',
  borderRadius: '16px',
  textTransform: 'none',
  textAlign: 'left',
  boxShadow:
    ' 0px 2px 4px - 1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'transparent',
  color: 'inherit',
}))
const StyledButton = styled(Button)({
  minWidth: '24px',
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  padding: '0',
  fontSize: '14px',
  lineHeight: '1',
})

const ComponenteCharacterLimit = () => {
  const [character, setCharacter] = useState(0)
  const [paragraph, setParagraph] = useState(0)
  const dispatch = useDispatch()

  const incrementCharacter = () => {
    if (character < 150) {
      setCharacter(character + 1)
      dispatch(addCampaign({ characterLimit: character + 1 }))
    }
  }

  const decrementCharacter = () => {
    if (character > 0) {
      setCharacter(character - 1)
      dispatch(addCampaign({ characterLimit: character - 1 }))
    }
  }

  const incrementParagraph = () => {
    if (paragraph < 3) {
      setParagraph(paragraph + 1)
      dispatch(addCampaign({ paragraphs: paragraph + 1 }))
    }
  }

  const decrementParagraph = () => {
    if (paragraph > 0) {
      setParagraph(paragraph - 1)
      dispatch(addCampaign({ paragraphs: paragraph - 1 }))
    }
  }

  return (
    <Box width="35vw" display="grid" gridTemplateColumns="1fr 0fr 1fr">
      <CustomCard>
        <Box>
          <Typography variant="h3" fontWeight="700" fontSize="14px">
            Caracteres
          </Typography>
          <Typography fontWeight="400" fontSize="20px">
            {character}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <StyledButton variant="contained" onClick={incrementCharacter}>
            +
          </StyledButton>
          <StyledButton variant="contained" onClick={decrementCharacter}>
            -
          </StyledButton>
        </Box>
      </CustomCard>
      <br />
      <CustomCard>
        <Box>
          <Typography variant="h3" fontWeight="700" fontSize="14px">
            Parágrafos
          </Typography>
          <Typography fontWeight="400" fontSize="20px">
            {paragraph}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          <StyledButton variant="contained" onClick={incrementParagraph}>
            +
          </StyledButton>
          <StyledButton variant="contained" onClick={decrementParagraph}>
            -
          </StyledButton>
        </Box>
      </CustomCard>
    </Box>
  )
}

export default ComponenteCharacterLimit
