import React, { useState } from 'react'
import {
  Box,
  Typography,
  Button,
  Link,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import prettyBytes from 'pretty-bytes'

const StyledDropzone = styled('div')`
  border: 2px dashed #aaa;
  border-radius: 4px;
  padding: 68px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.isDragging ? '#f0f0f0' : 'transparent'};
`

const FileDropzone = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState([])
  const [error, setError] = useState('')
  const handleDragEnter = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    handleFile(droppedFile)
  }

  const handleFile = (selectedFile) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'text/html']
    if (allowedTypes.includes(selectedFile.type)) {
      setFile([
        selectedFile,
        ...file, // Put old items at the end
      ])
      setError('')
    } else {
      setFile([])
      setError(
        'Tipo de arquivo inválido. Apenas PDF, Word ou HTML são suportados.',
      )
    }
  }

  const handleSelectFile = (e) => {
    const selectedFile = e.target.files[0]
    handleFile(selectedFile)
  }

  const handleUpload = () => {
    if (file) {
      // Aqui implementar a lógica para enviar o arquivo para o servidor
      console.log('Arquivo enviado:', file)
    }
  }

  return (
    <Box>
      <StyledDropzone
        isDragging={isDragging}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {file.length ? (
          <>
            {file.map((file, index) => (
              <Box key={index}>
                <Typography variant="body1">Arquivo carregado:</Typography>
                <Typography variant="body1">{file.name}</Typography>
                <Button variant="contained" onClick={handleUpload}>
                  Enviar arquivo
                </Button>
              </Box>
            ))}
          </>
        ) : (
          <>
            <Typography sx={{ color: '#BABABA' }} variant="body1">
              Arraste e solte os arquivos aqui ou{' '}
              <Link
                sx={{ cursor: 'pointer', color: '#737373' }}
                variant="contained"
                component="label"
              >
                escolha o arquivo
                <input type="file" hidden onChange={handleSelectFile} />
              </Link>
            </Typography>
          </>
        )}
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </StyledDropzone>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography sx={{ color: '#BABABA' }} variant="body1">
          Arquivos suportados: PDF, Word ou HTML.
        </Typography>
        <Typography sx={{ color: '#BABABA' }} variant="body1">
          Tamanho máximo: 5MB
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 5,
          display: 'grid',
          gridTemplateColumns: { md: '1fr' },
          gap: 2,
        }}
      >
        {file.length > 0 && (
          <Paper sx={{ border: '1px solid #D3D3D3 ' }} elevation={0}>
            <Box>
              <List sx={{ minHeight: '112px', display: 'flex' }}>
                {file.map((file, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CloudUploadIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <ListItemText primary={file.name} />
                      <ListItemText
                        primary={prettyBytes(file.size, {
                          maximumFractionDigits: 2,
                        })}
                      />
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  )
}

export default FileDropzone
