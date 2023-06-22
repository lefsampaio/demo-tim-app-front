import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Container,
} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import { selectOpenState } from '@/store/openSlice'
import { useSelector } from 'react-redux'

const TopBar = ({ title, component: Component }) => {
  const openState = useSelector(selectOpenState)

  return (
    <AppBar open={openState} position="fixed" sx={{ backgroundColor: '#fff' }}>
      <Container>
        <Toolbar
          sx={{
            padding: '0px !important',
            display: Component && 'grid',
            gridTemplateColumns: Component && '2fr 2fr 0fr 0fr 0fr',
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="customBlue"
            noWrap
            sx={{ flexGrow: 1, color: '#2F2F2F' }}
          >
            {title}
          </Typography>
          {Component && <Component />}
          <IconButton color="customBlue">
            <Badge color="secondary">
              <SmsOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton color="customBlue">
            <Badge color="secondary">
              <SearchOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton color="customBlue">
            <Badge badgeContent={4} color="error">
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default TopBar
