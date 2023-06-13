import { useSelector } from 'react-redux';

import { tabs } from '@/utils/tabs';
import { Box, Button, Typography } from '@mui/material';
import RadioButtonList from '../RadioButtonList';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import TimelineComponent from '../TimeLineComponent';

const TabPanel = () => {
    const selectedButton = useSelector((state) => state.tabPanel.selectedButton);

    // const componentMap = {
    //   'Tom de voz': ComponenteTomDeVoz,
    //   'Temperatura de Criatividade': ComponenteTemperaturaDeCriatividade,
    //   'Comprimento de Texto': ComponenteComprimentoDeTexto,
    //   'Playground': ComponentePlayground,
    //   'Público alvo': ComponentePublicoAlvo,
    //   'Palavras-chave': ComponentePalavrasChave,
    //   'Gatilhos mentais': ComponenteGatilhosMentais,
    //   'Link': ComponenteLink,
    //   'Emoji': ComponenteEmoji,
    //   'Hashtags': ComponenteHashtags,
    // };
  
    // const Component = componentMap[selectedButton];
    return (
        <Box>
            {tabs.map((item, index) => (
                <Box key={index}>
                    {selectedButton == item.title && (
                        <Box>
                            <Typography variant='h2' gutterBottom mt={3} sx={{ fontSize: '18px', fontWeight: '700', color: 'neutral.main' }}> {item.title}</Typography>
                            <Typography sx={{ fontSize: '16px', color: 'lighter.main', mr: 8, mb: 8 }}> {item.description}</Typography>
                            <RadioButtonList />
                            <Button startIcon={<NoteAddOutlinedIcon />} sx={{
                                backgroundColor: '#004691', textTransform: 'none', fontSize: '16px', width: '256px',
                                height: '56px', borderRadius: '8px'
                            }} variant="contained">salvar parâmetro</Button>
                        </Box>
                    )}
                    <TimelineComponent/>
                </Box>
            ))}
        </Box>
    );
};

export default TabPanel;