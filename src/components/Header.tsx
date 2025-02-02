// components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link"; // Usando o Link do Next.js

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Emily Bizerra Souza
        </Typography>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            color="inherit"
            sx={{ textTransform: "none", color: "text.primary" }}
          >
            Início
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", color: "text.primary" }}
          >
            Sobre
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", color: "text.primary" }}
          >
            Portfólio
          </Button>
          <Button
            color="inherit"
            sx={{ textTransform: "none", color: "text.primary" }}
          >
            Contato
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
