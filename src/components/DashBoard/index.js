import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  Pagination,
  TextField,
  InputAdornment,
} from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { selectDialogState, setDialogState } from '@/store/dialogSlice'
import { useDispatch, useSelector } from 'react-redux'
import DialogCampaign from '@/components/DialogCampaign'
import { useEffect, useState } from 'react'
import TopBar from '@/components/TopBar'
import { deleteCampaign, getCampaigns } from '@/api/services/services'
import { selectListState } from '@/store/campaignSlice'
import { editedDate, formatDate } from '@/utils/formatDate'
import LoadingScreen from '../Loading'
import { useRouter } from 'next/router'
import { selectOpenState } from '@/store/openSlice'
import TimIcon from '../../../public/images/icons/tim.svg'

const DashBoard = () => {
  const router = useRouter()
  const { campaigns, isLoading } = useSelector(selectListState)
  const itemsPerPage = 4
  const openDialog = useSelector(selectDialogState)
  const dispatch = useDispatch()

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    const teste = `/painel?page=${newPage}`
    router.push(teste)
  }

  useEffect(() => {
    dispatch(getCampaigns())
    const { query } = router
    const pageParam = query.page
    const currentPage = parseInt(pageParam) || 1
    setPage(currentPage)
  }, [dispatch, router])

  const [page, setPage] = useState(1)

  const handleOpen = () => {
    dispatch(setDialogState(!openDialog))
  }
  const totalItems = campaigns.content?.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = page * itemsPerPage

  const displayedData = campaigns.content?.slice(startIndex, endIndex)
  const isTopBarOpen = useSelector(selectOpenState)

  const handleDelete = async (id) => {
    await deleteCampaign(id)
    dispatch(getCampaigns())
  }

  return (
    <>
      <TopBar title="Painel" />
      <Box
        sx={{
          mt: '90px',
          ml: '100px',
          mr: '40px',
          marginLeft: isTopBarOpen ? '250px' : '100px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <Typography
          component="h1"
          mb={11}
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            textAlignLast: 'left',
            color: 'neutral.main',
          }}
        >
          Olá, Fulano!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box>
            <Typography
              component="h2"
              mb={2.4}
              sx={{
                fontSize: '18px',
                fontWeight: '700',
                textAlignLast: 'left',
                color: 'neutral.main',
              }}
            >
              Lista de projetos
            </Typography>
            <Typography
              mb={5.5}
              sx={{
                color: '#565656',
                fontSize: '16px',
                textAlignLast: 'left',
              }}
            >
              Confira as campanhas que foram realizadas anteriormente.
            </Typography>
          </Box>
          <TextField
            sx={{ maxWidth: '352px', width: '352px' }}
            autoFocus
            margin="dense"
            id="campaign"
            label="Buscar projeto"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { md: '1fr' },
              gap: 3,
            }}
          >
            {totalItems > 0 ? (
              <>
                {displayedData?.map((item) => (
                  <Paper
                    sx={{ height: '80px', p: '18px 0 0 28px' }}
                    key={item.id}
                    elevation={1}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        alignItems: 'center',
                        gridTemplateColumns: ' 1fr 6fr 2fr 2fr 2fr 1fr',
                      }}
                    >
                      <Box
                        sx={{
                          width: '37px',
                          height: '37px',
                          borderRadius: '50%',
                          textAlign: 'center',
                          backgroundColor: 'customBlue.main',
                          pt: 1,
                        }}
                      >
                        <TimIcon />
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'neutral.main',
                        }}
                      >
                        {item.name}
                        <Typography
                          variant="body"
                          sx={{
                            color: '#565656',
                            fontSize: '14px',
                            fontWeight: '400',
                          }}
                        >
                          {item.dateModified && editedDate(item.dateModified)}
                        </Typography>
                      </Typography>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'neutral.main',
                          }}
                        >
                          Canal
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{
                            color: '#565656',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          {item.campaignChannel === 'EMKT'
                            ? 'Email Marketing'
                            : item.campaignChannel}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'neutral.main',
                          }}
                        >
                          Criado em
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{
                            color: '#565656',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          {formatDate(item.dateCreated)}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '700',
                            color: 'neutral.main',
                          }}
                        >
                          Autor
                        </Typography>
                        <Typography
                          variant="body"
                          sx={{
                            color: '#565656',
                            fontSize: '16px',
                            fontWeight: '400',
                          }}
                        >
                          {item.author}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={() => handleDelete(item.id)}
                          aria-label="delete"
                          size="large"
                        >
                          <DeleteOutlinedIcon sx={{ color: '#004691' }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '40vh',
                }}
              >
                <Typography textAlign="center">vazio</Typography>
              </Box>
            )}
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: { md: 'space-between', xs: 'center' },
            flexDirection: { md: 'row', xs: 'column' },
            mt: 9,
            mb: 2,
            alignItems: 'center',
          }}
        >
          {totalItems > 0 && (
            <Pagination
              color="error"
              count={totalPages}
              page={page}
              onChange={handleChangePage}
            />
          )}

          <Button
            onClick={handleOpen}
            startIcon={<NoteAddOutlinedIcon />}
            sx={{
              backgroundColor: '#004691',
              textTransform: 'none',
              fontSize: '16px',
              width: '256px',
              height: '56px',
              borderRadius: '8px',
            }}
            variant="contained"
          >
            nova campanha
          </Button>
          <DialogCampaign />
        </Box>
      </Box>
    </>
  )
}
export default DashBoard
