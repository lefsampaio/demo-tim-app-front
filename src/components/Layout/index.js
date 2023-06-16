import { Box, Container } from "@mui/material";
import Sidebar from "../SideBar";

const Layout = ({ children }) => {
    return (
        <Box >
            <Sidebar />
            {children}
        </Box>
    )

}
export default Layout