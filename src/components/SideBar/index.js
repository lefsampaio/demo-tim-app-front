import React from 'react'
import { Box, Drawer, IconButton, List, Toolbar, useTheme } from '@mui/material'
import { styled } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenState, setOpenState } from '@/store/openSlice'
import SideMenuList from '../SideMenuList'

import Profile from '../Profile'
import Image from 'next/image'

const DrawerPaper = styled('div')`
  //   background-image: url(/images/MENU-VERTICAL.png);
  //   background-repeat: no-repeat;
  //   background-size: cover;
  display: grid;
  grid-template-rows: 0fr 6fr 0fr;
`
const drawerWidth = 240
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerCustom = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))
const Sidebar = () => {
  const dispatch = useDispatch()
  const openState = useSelector(selectOpenState)
  const theme = useTheme()

  return (
    <Box>
      <DrawerCustom
        variant="permanent"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        open={openState}
      >
        <DrawerPaper>
          <Toolbar sx={{ mt: 4, mx: 5 }}>
            <Image
              src="/images/logo-tim.png"
              width={121}
              height={32}
              alt="logo da TIM"
            />
            <div>
              <IconButton onClick={() => dispatch(setOpenState(!openState))}>
                {theme.direction === 'rtl' ? '>' : '<'}
              </IconButton>
            </div>
          </Toolbar>
          <List sx={{ mt: 15 }} component="nav">
            <SideMenuList />
          </List>
          <Profile />
        </DrawerPaper>
      </DrawerCustom>
    </Box>
  )
}

export default Sidebar
