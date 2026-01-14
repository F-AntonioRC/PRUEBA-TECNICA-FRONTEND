import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

function CardPokemon({ pokemonData }) {
  if (!pokemonData) {
    return <Typography>Cargando pokemon...</Typography>
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        image={pokemonData.sprites.front_default}
        alt={pokemonData.name}
      />
      <CardContent>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          Tipo: {pokemonData.types.map(t => t.type.name).join(", ")}
        </Typography>
        <Typography variant="h5" component="div">
          Nombre: {pokemonData.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardPokemon
