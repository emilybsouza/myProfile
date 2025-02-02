import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

export default function FormationSection() {
  return (
    <Box sx={{ marginBottom: "40px" }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Formação Acadêmica
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Bacharelado em Ciência da Computação"
            secondary="Universidade Federal de Mato Grosso do Sul, Conclusão: 2026 (em andamento)"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Técnico em Informática"
            secondary="Instituto Federal de Mato Grosso do Sul, Conclusão: 2022"
          />
        </ListItem>
      </List>
    </Box>
  );
}
