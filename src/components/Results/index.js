import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../Loading'
import {
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material'
import { generatedList, toggleCheckbox } from '@/store/itemsSlice'
import { formatDateTime } from '@/utils/formatDate'

const Results = () => {
  const { loading, isChecked } = useSelector(generatedList)
  const items = useSelector(generatedList)
  const dispatch = useDispatch()

  const handleCheckboxToggle = (itemId) => {
    dispatch(toggleCheckbox(itemId))
  }

  // const handleDelete = (itemId) => {
  //     dispatch(deleteItem(itemId));
  // };
  return (
    <>
      <Typography
        component="h1"
        color="neutral.main"
        gutterBottom
        sx={{ fontSize: '18px', fontWeight: '700' }}
      >
        Conteúdos gerados pela IA
      </Typography>
      {loading ? (
        <LoadingScreen />
      ) : (
        <List>
          {items.generatedContent.generatedContent?.map((item) => (
            <Box key={item?.id}>
              <ListItem pl={0} alignItems="flex-start">
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Checkbox
                    checked={isChecked}
                    onChange={() => handleCheckboxToggle(item?.id)}
                  />
                  <ListItemText
                    primary={
                      <>
                        <Typography
                          component="span"
                          sx={{ fontSize: '14px', fontWeight: '700' }}
                          variant="subtitle1"
                        >
                          {`${item?.title} -`}{' '}
                          <Typography
                            component="span"
                            sx={{ fontSize: '14px' }}
                            variant="subtitle1"
                          >{` ${formatDateTime(
                            item?.dateRegistration,
                          )}`}</Typography>
                        </Typography>
                        {/* <IconButton edge="end" sx={{ color: 'customBlue.main' }} aria-label="delete" onClick={() => handleDelete(item?.id)}>
                                                        <DeleteIcon />
                                                    </IconButton> */}
                      </>
                    }
                    secondary={item?.content}
                  />
                </Box>
                <Rating
                  sx={{
                    color: 'customBlue.main',
                    '& .MuiRating-iconEmpty': {
                      color: 'customBlue.main',
                    },
                  }}
                  readOnly
                  name={`rating-${item?.id}`}
                  value={item?.ratingStars}
                  max={5}
                />
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      )}
    </>
  )
}
export default Results
