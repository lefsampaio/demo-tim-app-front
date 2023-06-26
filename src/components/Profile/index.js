import { Avatar, Box, Typography } from '@mui/material'

const Profile = ({ expanded }) => {
  if (expanded) {
    return (
      <>
        <Box sx={{ textAlign: '-webkit-center', alignSelf: 'flex-end' }}>
          <Avatar
            sx={{ placeSelf: 'center' }}
            alt="Profile Image"
            src="/images/profile-pic.png"
          />
        </Box>
        <Box
          sx={{ color: '#fff', textAlign: 'center', alignSelf: { lg: 'end' } }}
        >
          <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
            Fulano da Silva
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>Designer TIM</Typography>
        </Box>
      </>
    )
  }
  return (
    <Box ml="9px">
      <Avatar
        sx={{ placeSelf: 'end' }}
        alt="Profile Image"
        src="/images/profile-pic.png"
      />
    </Box>
  )
}
export default Profile
