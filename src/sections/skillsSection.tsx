import { Box, Chip, Stack, Typography } from "@mui/material";

export default function SkillsSection() {
  const hardSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "npm",
    "HTML",
    "CSS",
    "Material-UI",
    "Quarkus",
    "Java",
    "SQL",
    "Git",
    "Docker",
    "Postman",
    "Scrum",
    "Kanban",
  ];
  const softSkills = [
    "Comunicação clara e objetiva",
    "Pensamento crítico e resolução de problemas",
    "Capacidade de colaboração em equipes multidisciplinares",
    "Criatividade e inovação",
    "Organização e priorização de tarefas em projetos",
  ];
  return (
    <Box
      sx={{
        marginBottom: "40px",
        backgroundColor: "#333333",
        padding: 4,
        borderRadius: 4,
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Hard skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {hardSkills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            color="error"
            sx={{ marginBottom: "8px" }}
          />
        ))}
      </Stack>
      <Typography variant="h4" component="h2" gutterBottom>
        Soft Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {softSkills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            variant="outlined"
            color="secondary"
            sx={{ marginBottom: "8px" }}
          />
        ))}
      </Stack>
    </Box>
  );
}
