"use client";
import Header from "@/components/Header";
import { theme } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
