import React from 'react'
import { Grid, Tab, Tabs, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedButton } from '@/store/tabPanelSlice'
import { tabs } from '@/utils/tabs'

const ParameterComponent = () => {
  const selectedButton = useSelector((state) => state.tabPanel.selectedButton)

  const dispatch = useDispatch()

  const handleTabChange = (event, newValue) => {
    dispatch(setSelectedButton(newValue))
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
      <Typography color="lighter.main" sx={{ mr: 8, mb: 5 }}>
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
        {tabs.map((item) => (
          <Tab
            key={item.title}
            label={
              <Grid container alignItems="center" spacing={1}>
                <Grid item>{item.icon}</Grid>
                <Grid item>{item.title}</Grid>
              </Grid>
            }
            value={item.title}
            sx={{
              borderRadius: '16px',
              height: '72px',
              textTransform: 'none',
              maxWidth: '250px',
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
      </Tabs>
    </>
  )
}

export default ParameterComponent
