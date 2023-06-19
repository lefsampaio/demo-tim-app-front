import React, { useState } from 'react'
import { Button, Typography, Box, Icon } from '@mui/material'
import { styled } from '@mui/system'
import DraftsIcon from '@mui/icons-material/Drafts'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { addCampaign } from '@/store/campaignSlice'
import { useDispatch } from 'react-redux'

const CustomCard = styled(Button)(({ theme, selected }) => ({
  width: '687px',
  border: `1px solid ${theme.palette.customBlue.main}`,
  minHeight: '144px',
  padding: '8px 8px 0 8px',
  marginBottom: '24px',
  borderRadius: '16px',
  textTransform: 'none',
  textAlign: 'left',
  boxShadow:
    ' 0px 2px 4px - 1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: selected ? 'rgba(0, 33, 152, 0.1)' : 'transparent',
  color: selected ? '#004691' : 'inherit',
  '&:hover': {
    backgroundColor: 'rgba(0, 33, 152, 0.1)',
  },
}))

const cardsData = [
  {
    icon: <PhoneIphoneIcon fontSize="large" />,
    title: 'SMS',
    value: 'SMS',
    subtitle: 'Os conteúdos têm um limite de até 116 caracteres.',
  },
  {
    icon: <DraftsIcon fontSize="large" />,
    title: 'Email Marketing',
    value: 'EMKT',
    subtitle:
      'Os conteúdos são compostos por: assunto (até 50 caracteres) e corpo do e-mail (entre 200 e 300 palavras).',
  },
  {
    icon: <WhatsAppIcon fontSize="large" />,
    title: 'WhatsApp',
    value: 'WHATSAPP',
    subtitle: 'Os conteúdos podem conter de 150 a 300 caracteres.',
  },
]

const CardList = () => {
  const [selectedItem, setSelectedItem] = useState()
  const dispatch = useDispatch()

  const handleItemClick = (key, value) => {
    dispatch(addCampaign({ [key]: value }))
    setSelectedItem(value)
  }

  return (
    <Box id="éaquitio" justifyContent="center">
      <Box maxWidth="600px">
        {cardsData.map((card) => (
          <CustomCard
            key={card.value}
            variant="outlined"
            onClick={() => handleItemClick('campaignChannel', card.value)}
            selected={selectedItem === card.value}
          >
            {/* <CardContent> */}
            <Box
              display="grid"
              sx={{ gridTemplateColumns: '0fr 11fr' }}
              alignItems="center"
              marginBottom="8px"
            >
              <Icon
                sx={{
                  marginRight: '8px',
                  width: '40px',
                  height: '48px',
                  color: 'customBlue.main',
                }}
              >
                {card.icon}
              </Icon>
              <Box ml="24px">
                <Typography
                  variant="h2"
                  sx={{ fontSize: '24px' }}
                  fontWeight={700}
                  color="neutral.main"
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{ fontSize: '14px', maxWidth: '450px' }}
                  color="lighter.main"
                >
                  {card.subtitle}
                </Typography>
              </Box>
            </Box>
            {/* </CardContent> */}
          </CustomCard>
        ))}
      </Box>
    </Box>
  )
}

export default CardList
