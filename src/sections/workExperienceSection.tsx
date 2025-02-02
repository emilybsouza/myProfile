import { Box, Card, CardContent, Grid2, Grow, Typography } from "@mui/material";

export default function WorkExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: "SENAI MS",
      role: "Estagiária de Desenvolvimento Web Full-Stack",
      period: "Janeiro de 2023 - até o momento",
      description: "Desenvolvimento de aplicações web com React e Node.js.",
    },
    {
      id: 2,
      company: "Instituto Federal de Mato Grosso do Sul",
      role: "Estagiária de Desenvolvimento Web Full-Stack",
      period: "Agosto de 2022 - Dezembro de 2022",
      description:
        "Auxílio na manutenção de sistemas legados e desenvolvimento de novas funcionalidades.",
    },
    {
      id: 3,
      company: "Tahto",
      role: "Jovem Aprendiz",
      period: "Fevereiro de 2023 - Novembro de 2023",
      description:
        "Auxílio na manutenção de sistemas legados e desenvolvimento de novas funcionalidades.",
    },
  ];

  return (
    <Box sx={{ marginBottom: "40px" }}>
      <Typography variant="h3" component="h2" gutterBottom>
        Experiência Profissional
      </Typography>
      <Grid2 container spacing={2}>
        {experiences.map((exp) => (
          <Grid2 key={exp.id} size={{ xs: 12, sm: 4, md: 4 }}>
            <Grow in={true} timeout={exp.id * 500}>
              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {exp.role} - {exp.company}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="secondary">
                    {exp.period}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}
