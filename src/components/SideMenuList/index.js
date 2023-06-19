import React, { useState } from 'react'
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'
import GridViewIcon from '@mui/icons-material/GridView'
import { styled } from '@mui/system'
import Link from 'next/link'

const StyledListItemButton = styled(ListItemButton)`
  &.Mui-selected {
    background-color: rgba(0, 33, 152, 0.1);
    color: #004691;
  }
`

const SideMenuList = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  return (
    <>
      <StyledListItemButton
        selected={selectedItem === 'painel'}
        onClick={() => handleItemClick('painel')}
        component={Link}
        href="/painel"
      >
        <ListItemIcon>
          <GridViewIcon sx={{ color: '#004691' }} />
        </ListItemIcon>
        <ListItemText primary="Painel" />
      </StyledListItemButton>
      <StyledListItemButton
        disabled
        selected={selectedItem === 'dados'}
        onClick={() => handleItemClick('dados')}
        component={Link}
        to="/dados"
      >
        <ListItemIcon>
          <FactCheckOutlinedIcon sx={{ color: '#004691' }} />
        </ListItemIcon>
        <ListItemText primary="Base de Dados" />
      </StyledListItemButton>
      <Divider />
      <StyledListItemButton disabled>
        <ListItemIcon>
          <LogoutIcon sx={{ color: '#004691' }} />
        </ListItemIcon>
        <ListItemText primary="Sair" />
      </StyledListItemButton>
    </>
  )
}

export default SideMenuList
