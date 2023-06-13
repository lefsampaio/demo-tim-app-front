import { Container, Box, Typography, Paper, Button, IconButton, Pagination, TextField, InputAdornment } from "@mui/material"
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { selectDialogState, setDialogState } from '@/store/dialogSlice'
import { useDispatch, useSelector } from "react-redux";
import DialogCampaign from "@/components/DialogCampaign";
import { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import { deleteCampaign, getCampaigns } from '@/api/services/services';
import { selectListState } from "@/store/campaignSlice";
import { editedDate, formatDate } from "@/utils/formatDate";

const DashBoard = () => {
  const itemsPerPage = 4;
  const openDialog = useSelector(selectDialogState);
  const dispatch = useDispatch();

  const { campaigns, isLoading } = useSelector(selectListState);

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);

  const [page, setPage] = useState(1);
  const totalItems = campaigns.content?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleOpen = () => {
    dispatch(setDialogState(!openDialog));
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;
  const displayedData = campaigns.content?.slice(startIndex, endIndex);

  const handleDelete = async (id) => {
    await deleteCampaign(id)
    dispatch(getCampaigns());
  };

  return (
    <>
      <TopBar title='Painel' />
      <Container sx={{ mt: 12 }}>
        <Typography component='h1' mb={10} sx={{ fontSize: '32px', fontWeight: '700', textAlignLast: 'left', color: 'neutral.main' }}>Boas vindas, Fulano!</Typography>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' }
        }} >
          <Box>
            <Typography component='h2' mb={3} sx={{ fontSize: '18px', fontWeight: '700', textAlignLast: 'left', color: 'neutral.main' }}>Projetos recentes</Typography>
            <Typography mb={5} sx={{ color: '#565656', fontSize: '16px', textAlignLast: 'left', }}>   Para editar alguma campanha já criada, basta clicar sobre o respectivo card.</Typography>
          </Box>
          <TextField
            sx={{ width: { md: '352px', xs: '100%' } }}
            autoFocus
            margin="dense"
            id="campaign"
            label="Buscar projeto"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchOutlinedIcon /></InputAdornment>,
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr' },
            gap: 2,

          }}
        >
          {displayedData?.map((item) => (
            <Paper sx={{ height: '80px', p: '18px 0 0 28px' }} key={item.id} elevation={1}>
              <Box sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '7fr 2fr 2fr 2fr 1fr' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'neutral.main' }}>{item.name}
                  <Typography variant='body' sx={{ color: '#565656', fontSize: '14px', fontWeight: '400' }}>{item.dateModified && editedDate(item.dateModified)}</Typography>
                </Typography>
                <Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: '700', color: 'neutral.main' }}>Canal</Typography>
                  <Typography variant='body' sx={{ color: '#565656', fontSize: '16px', fontWeight: '400' }}>{item.campaignChannel}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: '700', color: 'neutral.main' }}>Criado em</Typography>
                  <Typography variant='body' sx={{ color: '#565656', fontSize: '16px', fontWeight: '400' }}>{formatDate(item.dateCreated)}</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '14px', fontWeight: '700', color: 'neutral.main' }}>Autor</Typography>
                  <Typography variant='body' sx={{ color: '#565656', fontSize: '16px', fontWeight: '400' }}>{item.author}</Typography>
                </Box>
                <Box>
                  <IconButton onClick={() => handleDelete(item.id)} aria-label="delete" size="large">
                    <DeleteOutlinedIcon sx={{ color: '#004691' }} />
                  </IconButton>
                </Box>
              </Box>
            </Paper>

          ))}

        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: { md: 'space-between', xs: 'center' },
          flexDirection: { md: 'row', xs: 'column' },
          mt: 8,
          alignItems: 'center'
        }} >
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
          />
          <Button onClick={handleOpen} startIcon={<NoteAddOutlinedIcon />} sx={{
            backgroundColor: '#004691', textTransform: 'none', fontSize: '16px', width: '256px',
            height: '56px', borderRadius: '8px'
          }} variant="contained">nova campanha</Button>
          <DialogCampaign />
        </Box>
      </Container>


    </>

  )



}
export default DashBoard