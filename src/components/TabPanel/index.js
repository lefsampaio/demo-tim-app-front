import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const TabPanel = (props) => {
    const selectedTab = useSelector((state) => state.tab.selected);
    const { children, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={selectedTab !== selectedTab}
            id={`vertical-tabpanel-${selectedTab}`}
            aria-labelledby={`vertical-tab-${selectedTab}`}
            {...other}
        >
            {selectedTab && (
                <Box sx={{ p: 3 }}>
                    <Typography>{selectedTab}</Typography>
                </Box>
            )}
        </div>
    );
}
export default TabPanel