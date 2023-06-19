import { Avatar, Box, Typography } from '@mui/material'

const Profile = () => {
  return (
    <>
      <Box sx={{ textAlign: '-webkit-center' }}>
        <Avatar
          sx={{ placeSelf: 'center' }}
          alt="Profile Image"
          src="/images/profile-pic.png"
        />
      </Box>
      <Box sx={{ textAlign: 'center', alignSelf: { lg: 'end' } }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
          Fulano da Silva
        </Typography>
        <Typography sx={{ fontSize: '14px' }}>Designer TIM</Typography>
      </Box>
    </>
  )
}
export default Profile
