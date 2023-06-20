import React, { useState } from 'react'
import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedButton } from '@/store/tabPanelSlice'
import { tabs } from '@/utils/tabs'
import LockIcon from '@mui/icons-material/Lock'
import ModalComponent from '../ModalComponent'

const ParameterComponent = () => {
  const selectedButton = useSelector((state) => state.tabPanel.selectedButton)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLockClick = () => {
    setIsModalOpen(true)
  }
  const dispatch = useDispatch()

  const handleTabChange = (event, newValue) => {
    dispatch(setSelectedButton(newValue))
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Typography
        component="h1"
        color="neutral.main"
        gutterBottom
        mt={10}
        sx={{ fontSize: '18px', fontWeight: '700' }}
      >
        Parametrização
      </Typography>
      <Typography color="lighter.main" sx={{ mr: 8, mb: 8 }}>
        Configure os parâmetros de acordo com a sua necessidade.
      </Typography>
      <Tabs
        sx={{
          '& .MuiTabs-flexContainer': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
        value={selectedButton}
        onChange={handleTabChange}
        aria-label="selectable buttons"
      >
        {tabs.map((item, index) => (
          <Tab
            onClick={index > 1 && handleLockClick}
            key={item.title}
            label={
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item>{item.title}</Grid>
              </Grid>
            }
            value={item.title}
            sx={{
              borderRadius: '16px',
              height: '72px',
              textTransform: 'none',
              width: '290px',
              color: 'neutral.main',
              border: '1px solid #D8D8D8',
              backgroundColor:
                selectedButton === item.title ? '#fff' : 'initial',
              borderColor:
                selectedButton === item.title ? 'customBlue.main' : '#D8D8D8',
              boxShadow:
                selectedButton === item.title
                  ? '0px -5px 10px rgba(0, 0, 0, 0.2)'
                  : 'none',
              '&:hover': {
                backgroundColor:
                  selectedButton === item.title ? '#fff' : 'initial',
                borderColor:
                  selectedButton === item.title ? 'customBlue.main' : '#D8D8D8',
              },
            }}
          />
        ))}
        <ModalComponent
          open={isModalOpen}
          onClose={handleCloseModal}
          onClick={handleCloseModal}
        />
      </Tabs>
    </>
  )
}

export default ParameterComponent
