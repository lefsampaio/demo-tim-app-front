import React, { useState } from 'react';
import { Box, Button, Grid, IconButton, Modal, Tab, Tabs, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedButton } from '@/store/tabPanelSlice';
import { addCampaign } from '@/store/campaignSlice';
import { tabs } from '@/utils/tabs';
import LockIcon from '@mui/icons-material/Lock';
import Image from 'next/image';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '567px',
    height: '463px',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ParameterComponent = () => {
    const selectedButton = useSelector((state) => state.tabPanel.selectedButton);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLockClick = () => {
        setIsModalOpen(true);
    };
    const dispatch = useDispatch();

    const handleTabChange = (event, newValue) => {
        dispatch(setSelectedButton(newValue));
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
                value={selectedButton} onChange={handleTabChange}
                aria-label='selectable buttons'
            >
                {tabs.map((item, index) => (
                    <Tab
                        // disabled
                        onClick={handleLockClick}
                        key={item.title}
                        label={
                            <Grid container alignItems="center" spacing={1}>
                                <Grid item>
                                    <LockIcon />
                                </Grid>
                                <Grid item>
                                    {item.title}
                                </Grid>
                            </Grid>
                        }
                        value={item.title}
                        sx={{
                            borderRadius: '16px',
                            height: '72px',
                            textTransform: 'none',
                            width: '290px',
                            color: 'neutral.main',
                            border: '1px solid #D8D8D8',
                            backgroundColor: selectedButton === item.title ? '#fff' : 'initial',
                            // borderColor: selectedButton === item.title ? 'customBlue.main' : '#D8D8D8',
                            // boxShadow: selectedButton === item.title ? '0px -5px 10px rgba(0, 0, 0, 0.2)' : 'none',
                            '&:hover': {
                                backgroundColor: selectedButton === item.title ? '#fff' : 'initial',
                                borderColor: selectedButton === item.title ? 'customBlue.main' : '#D8D8D8',
                            },
                        }}
                    />
                ))}
                <Modal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                >
                    {/* Conteúdo do modal */}
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Atenção!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, fontSize: '14px' }}>
                            Esta é uma versão de demonstração, por este motivo todos os parâmetros estão pré-definidos pelo sistema. Sendo assim,
                            neste momento os itens de parametrização estarão bloqueados para suas respectivas personalizações.
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: '40px' }}>
                            <Image src='/images/disabled.png' alt='' width={248} height={104} />
                        </Box>
                        <Button
                            onClick={() => setIsModalOpen(false)} sx={{
                                border: '1px solid',
                                borderColor: 'customBlue.main', textTransform: 'none', fontSize: '16px', width: '100%',
                                height: '56px', borderRadius: '8px',
                                backgroundColor: 'customBlue.main',
                                color: '#fff',
                                mb: '40px',
                                '&:hover': {
                                    backgroundColor: '#fff', color: 'customBlue.main',
                                    backgroundColor: 'customBlue.main',
                                    color: '#fff',
                                },
                            }} variant="contained">ok, entendi</Button>
                    </Box>
                </Modal>
            </Tabs>
        </>
    );
};

export default ParameterComponent;