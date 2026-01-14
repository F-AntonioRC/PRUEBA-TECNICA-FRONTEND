import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link, Route, Router, Routes } from "react-router-dom"
import pokeList from "./pokeList"

function HomePage() {
  return (
    <Box
        sx={{
        width: '100%',
        height: '100vh',  
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',              
      }}
    >
    <Card variant="outlined" sx={{ maxWidth: 600 }}>
        <CardContent>
<Typography variant="h3" component={"div"}> {"MENU PRINCIPAL"} </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>

            <Button component={Link} variant="contained" to="/PokeList">{"Poke Api"}</Button>
            <Button component={Link} variant="contained" to="/Palindromo">{"Palindromo"}</Button>

        </CardActions>
    </Card>
    </Box>


  )
}

export default HomePage