import { Box, Button, Divider, Input, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

function Palindromo() {
  const [texto, setTexto] = useState("")

  const verificar = (text) => {
    // Limpiar la entrada del texto
    const entrada = text.toLowerCase().replace(/[^a-z0-9]/g, '')
    if(!entrada) return false
    // Comparar los valores ingresados
    const invertido = entrada.split('').reverse().join('')
    return entrada === invertido
  }

  const resultado = verificar(texto)

  return (
    <Box>
      <Button color="inherit" component={Link} to="/" startIcon={<ArrowBackIcon />}>
            Inicio
      </Button>
      <Divider/>
      <Typography variant='h2'>Verificador de palindromos</Typography>
      <Input
      type='text'
      value={texto} onChange={(e) => {
        setTexto(e.target.value);
      }}
      placeholder='Escribe una palabra'
      />
    <Typography variant='p'>
      Resultado: {texto && (verificar(texto) ? "Es Palindromo" : "No es Palindromo")}
    </Typography>
    </Box>
  )
}

export default Palindromo