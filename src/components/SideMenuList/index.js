import React, { useState } from 'react'
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import Link from 'next/link'
import PainelIcon from '../../../public/images/icons/painel.svg'
import DatabaseIcon from '../../../public/images/icons/Database.svg'
import SairIcon from '../../../public/images/icons/sair.svg'

const StyledListItemButton = styled(ListItemButton)`
  &.Mui-selected {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
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
          <PainelIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: '#fff' }} primary="Painel" />
      </StyledListItemButton>
      <StyledListItemButton
        selected={selectedItem === 'database'}
        onClick={() => handleItemClick('database')}
        component={Link}
        to="/database"
      >
        <ListItemIcon>
          <DatabaseIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: '#fff' }} primary="Base de Dados" />
      </StyledListItemButton>
      <Divider sx={{ borderColor: '#fff' }} />
      <StyledListItemButton disabled>
        <ListItemIcon>
          <SairIcon />
        </ListItemIcon>
        <ListItemText sx={{ color: '#fff' }} primary="Sair" />
      </StyledListItemButton>
    </>
  )
}

export default SideMenuList
