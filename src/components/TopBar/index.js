import React from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Box,
} from '@mui/material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import { selectOpenState } from '@/store/openSlice'
import { useSelector } from 'react-redux'

const TopBar = ({ title, component: Component }) => {
  const openState = useSelector(selectOpenState)
  return (
    <AppBar
      open={openState}
      position="relative"
      sx={{ backgroundColor: '#fff' }}
    >
      <Box>
        <Toolbar
          sx={{
            mx: '80px',
            display: Component && 'grid',
            gridTemplateColumns: Component && '2fr 4fr 0fr 0fr 0fr',
            marginLeft: openState ? '230px' : '80px',
            transition: 'margin-left 0.3s ease',
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
      </Box>
    </AppBar>
  )
}

export default TopBar
