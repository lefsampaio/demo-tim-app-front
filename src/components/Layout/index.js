import { Container } from '@mui/material'
import Sidebar from '../SideBar'

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  )
}
export default Layout
