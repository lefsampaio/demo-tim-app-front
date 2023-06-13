import { Box } from "@mui/material";
import Sidebar from "../SideBar";

const Layout = ({ children }) => {
    return (
        <Box >
            <Sidebar />
            <Box>
                {children}
            </Box>
        </Box>
    )

}
export default Layout