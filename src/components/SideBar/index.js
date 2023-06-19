import React from 'react'
import { Box, Drawer, List, Toolbar } from '@mui/material'
import { styled } from '@mui/system'
import { useSelector } from 'react-redux'
import { selectOpenState } from '@/store/openSlice'
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

const Sidebar = () => {
  const openState = useSelector(selectOpenState)

  return (
    <Box>
      <Drawer
        variant="persistent"
        anchor="left"
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
          </Toolbar>
          <List sx={{ mt: 15, p: 3 }} component="nav">
            <SideMenuList />
          </List>
          <Profile />
        </DrawerPaper>
      </Drawer>
    </Box>
  )
}

export default Sidebar
