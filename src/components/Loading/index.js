import React from 'react'
import { CircularProgress, styled } from '@mui/material'

const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '40vh',
})

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  )
}

export default LoadingScreen
