import { Typography } from "@mui/material";

export default function Header() {
  const about =
    "Welcome to MewDex! Here there is a Pokédex section has a wealth of information on all the Pokémon creatures from the entire game series. Click a Pokémon's name to see a detailed page with Pokédex data, descriptions, moves, and more!";
  
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        color="text.primary"
        fontWeight="500"
        gutterBottom
      >
        MewDex
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        {about}
      </Typography>
    </>
  );
}
