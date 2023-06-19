import { Box, Typography } from '@mui/material'

const CanalLeftSide = ({ title, subtitle }) => {
  return (
    <>
      <Typography
        component="h1"
        color="neutral.main"
        gutterBottom
        mt={10}
        sx={{ fontSize: '18px', fontWeight: '700' }}
      >
        {title}
      </Typography>
      {subtitle.map((texto, key) => {
        return (
          <Box key={key}>
            <Typography color="lighter.main" sx={{ mr: 8 }}>
              {texto}
            </Typography>
            <br />
          </Box>
        )
      })}
    </>
  )
}
export default CanalLeftSide
