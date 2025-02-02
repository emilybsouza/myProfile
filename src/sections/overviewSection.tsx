import { Box, Grid2, Stack, Typography } from "@mui/material";
import ContactSection from "./contactSection";

export default function OverviewSection() {
  return (
    <Box
      sx={{
        minHeight: "50vh",
        height: "auto",
        backgroundColor: "primary.light",
      }}
    >
      <Grid2 container padding={5} spacing={2}>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 4, md: 4 }}
        >
          <Box
            component="img"
            src="/images/Emily.jpg"
            alt="Imagem redonda"
            sx={{
              borderRadius: "50%",
              width: 300,
              height: 300,
              objectFit: "cover",
            }}
          />
        </Grid2>
        <Grid2 container alignItems="center" size={{ xs: 12, sm: 8, md: 8 }}>
          <Stack>
            <Typography variant="h1" component="h2" gutterBottom>
              Emily Bizerra Souza
            </Typography>

            <Typography variant="body1">
              Desenvolvedora Web Full-Stack Júnior, em busca de oportunidades
              desafiadoras que me permitam crescer profissionalmente, aplicar e
              expandir meus conhecimentos, enquanto colaboro em equipes
              dinâmicas e contribuo para o sucesso de projetos.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          size={{ xs: 12, sm: 4, md: 4 }}
        >
          <ContactSection />
        </Grid2>
      </Grid2>
    </Box>
  );
}
