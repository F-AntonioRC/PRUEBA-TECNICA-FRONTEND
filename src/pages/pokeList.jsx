import { AppBar, Box, Button, Divider, Typography, Toolbar, Grid, TextField, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardPokemon from '../components/CardPokemon'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'

function PokeList() {
  const [pokemonData, setPokemonData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10'

  const fetchPokemons = async () => {
    setLoading(true)
    try {
      const response = await fetch(BASE_URL)
      const data = await response.json()

      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url)
          return await res.json()
        })
      )

      setPokemonData(detailedData)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  // Buscar directamente en la API
  const searchPokemon = async () => {
    if (!searchTerm){
      // Mostrar los 10 primeros pokemons si el campo de busqueda esta vacio 
      // Se necesita presionar el boton de busqueda para esto
      fetchPokemons()
      setError("")
      return }
      setLoading(true)
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
      if (!response.ok) throw new Error("Pokémon no encontrado") 
      const data = await response.json()
      setPokemonData([data])   
      setError("")
    } catch (err) {
      setError(err.message)
      setPokemonData([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ p: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lista de Pokemones
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          placeholder="Introduzca un nombre"
          focused
          variant="outlined"
          sx={{ backgroundColor: '#f0f0f0' }}
          value={searchTerm}
          color='success'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={searchPokemon}>
          Buscar
        </Button>
      </Box>
          <Button color="inherit" component={Link} to="/" startIcon={<ArrowBackIcon />}>
            Inicio
          </Button>
        </Toolbar>
      </AppBar>

      <Divider sx={{ my: 2 }} />


      {error && <Typography color="error">{error}</Typography>}

      {/* Grid para ordenar las cards */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={2}>
          {pokemonData.map((pokemon) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.id}>
              <CardPokemon pokemonData={pokemon} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default PokeList
