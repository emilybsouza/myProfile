import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#C3B1E1", // Lilás Suave
      contrastText: "#333333", // Cinza Escuro (texto sobre o Lilás)
    },
    secondary: {
      main: "#B2C8A0", // Verde Sage
      contrastText: "#333333", // Cinza Escuro (texto sobre o Verde)
    },
    error: {
      main: "#FFA07A", // Coral Claro (pode ser usado para erros ou destaques)
    },
    background: {
      default: "#FAFAFA", // Branco Gelado (fundo da página)
      paper: "#FFFFFF", // Branco puro para cards e superfícies
    },
    text: {
      primary: "#333333", // Cinza Escuro (texto principal)
      secondary: "#555555", // Cinza médio para texto secundário
    },
  },
  typography: {
    fontFamily: '"Poppins", "Arial", sans-serif', // Fonte moderna
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: "#333333", // Cinza Escuro
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#333333", // Cinza Escuro
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#C3B1E1", // Cinza Escuro
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#FAFAFA", // Cinza Escuro
    },
    button: {
      textTransform: "none", // Remove uppercase padrão dos botões
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Bordas arredondadas
          padding: "10px 20px", // Espaçamento interno
        },
        containedPrimary: {
          backgroundColor: "#C3B1E1", // Lilás Suave para botões primários
          "&:hover": {
            backgroundColor: "#A899C7", // Lilás mais escuro no hover
          },
        },
        containedSecondary: {
          backgroundColor: "#B2C8A0", // Verde Sage para botões secundários
          "&:hover": {
            backgroundColor: "#9AB28A", // Verde mais escuro no hover
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#C3B1E1", // Lilás Suave para o AppBar
          color: "#333333", // Cinza Escuro para o texto
        },
      },
    },
  },
});
