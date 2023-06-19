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
import MenuIcon from '@mui/icons-material/Menu'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import { selectOpenState, setOpenState } from '@/store/openSlice'
import { useDispatch, useSelector } from 'react-redux'

const TopBar = ({ title, component: Component }) => {
  const openState = useSelector(selectOpenState)
  const dispatch = useDispatch()

  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
      <Container>
        <Toolbar
          sx={{
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
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={() => dispatch(setOpenState(!openState))}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
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
