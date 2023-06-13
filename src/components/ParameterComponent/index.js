import React from 'react';
import { Tab, Tabs, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelect } from '@/store/selectTabSlice';
import { addCampaign, inputState } from '@/store/campaignSlice';

const arr = [
    {
        field: 'toneVoice',
        title: 'Tom de voz',
        value: 'Formal'
    },
    {
        field: 'creativityTemperature',
        title: 'Temperatura de Criatividade',
        value: 5
    },
    {
        field: 'characterLimit',
        title: 'Comprimento de Texto',
        value: 116
    },
];

const ParameterComponent = () => {
    const selectedTab = useSelector((state) => state.tab.selected);
    const dispatch = useDispatch();
    const inputValues = useSelector(inputState);

    const handleTabChange = (event, newTab) => {
        dispatch(setSelect(newTab));
    };

    const handleItemClick = (key, value) => {
        dispatch(addCampaign({ [key]: value }));
        console.log(inputValues)
    };

    return (
        <>
            <Typography component='h1' color='neutral.main' gutterBottom mt={10} sx={{ fontSize: '18px', fontWeight: '700' }}>Parametrização</Typography>
            <Typography color='lighter.main' sx={{ mr: 8, mb: 8 }}>
                Configure os parâmetros de acordo com a sua necessidade.
            </Typography>
            <Tabs
                sx={{
                    '& .MuiTabs-flexContainer': {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '20px',
                    },
                    '& .MuiTabs-indicator': {
                        display: 'none',
                    },
                }}
                value={selectedTab}
                onChange={handleTabChange}
                aria-label='selectable buttons'
            >
                {arr.map((button, index) => (
                    <Tab
                        onClick={() => handleItemClick(button.field, button.value)}
                        key={index}
                        label={button.title}
                        sx={{
                            borderRadius: '16px',
                            height: '72px',
                            textTransform: 'none',
                            width: '248px',
                            color: 'neutral.main',
                            border: '1px solid #D8D8D8',
                            backgroundColor: selectedTab === index ? '#fff' : 'initial',
                            borderColor:
                                selectedTab === index ? 'customBlue.main' : '#D8D8D8',
                            boxShadow:
                                selectedTab === index ? '0px -5px 10px rgba(0, 0, 0, 0.2)' : 'none',
                            '&:hover': {
                                backgroundColor: selectedTab === index ? '#fff' : 'initial',
                                borderColor: selectedTab === index ? 'customBlue.main' : '#D8D8D8',
                            },
                        }}
                    />
                ))}
            </Tabs>
        </>
    );
};

export default ParameterComponent;