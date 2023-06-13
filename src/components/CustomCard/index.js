import React, { useState } from "react";
import {
    Card,
    Button,
    CardContent,
    Typography,
    Box,
    Icon,
} from "@mui/material";
import { styled } from "@mui/system";
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { addCampaign } from "@/store/campaignSlice";
import { useDispatch } from "react-redux";

const CustomCard = styled(Button)(({ theme, selected }) => ({
    width: "687px",
    border: `1px solid ${theme.palette.customBlue.main}`,
    minHeight: "144px",
    padding: "8px 8px 0 8px",
    marginBottom: "24px",
    borderRadius: "16px",
    textTransform: "none",
    textAlign: "left",
    boxShadow: ' 0px 2px 4px - 1px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.1)',
    backgroundColor: selected ? "rgba(0, 33, 152, 0.1)" : "transparent",
    color: selected ? "#004691" : "inherit",
    "&:hover": {
        backgroundColor: "rgba(0, 33, 152, 0.1)",
    },
}));

const cardsData = [
    {
        icon: <PhoneIphoneIcon fontSize="large" />,
        title: "SMS",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        icon: <DraftsIcon fontSize="large" />,
        title: "Email Marketing",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
        icon: <WhatsAppIcon fontSize="large" />,
        title: "WhatsApp",
        subtitle:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
];

const CardList = () => {
    const [selectedItem, setSelectedItem] = useState();
    const dispatch = useDispatch();

    const handleItemClick = (key, value) => {
        dispatch(addCampaign({ [key]: value }))
        setSelectedItem(value);
    };
    
    return (
        <Box display="flex" justifyContent="center">
            <Box maxWidth="600px" width="100%">
                {cardsData.map((card) => (
                    <CustomCard
                        key={card.title}
                        variant="outlined"
                        onClick={() => handleItemClick('campaignChannel', card.title)}
                        selected={selectedItem === card.title}
                    >
                        <CardContent>
                            <Box display="flex" alignItems="center" marginBottom="8px">
                                <Icon
                                    sx={{
                                        marginRight: "8px", width: '40px',
                                        height: '48px', color: "customBlue.main"
                                    }}
                                >
                                    {card.icon}
                                </Icon>
                                <Box>
                                    <Typography variant="h2" sx={{ fontSize: '24px' }} fontWeight={700} color="neutral.main">
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: '14px' }} color="lighter.main">
                                        {card.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </CustomCard>
                ))}
            </Box>
        </Box>
    );
};

export default CardList;