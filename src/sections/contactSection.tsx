import { Box, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function ContactSection() {
  return (
    <Box sx={{ marginBottom: "40px" }}>
      <Typography variant="h2" component="h2" gutterBottom>
        Contato
      </Typography>
      <Stack direction={"row"} spacing={1}>
        <EmailOutlinedIcon />
        <Typography variant="body1">emilyb.souza03@gmail.com</Typography>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Box
          component="img"
          src="/images/LI-In-Bug.png"
          alt="linkedin logo"
          sx={{
            width: 24,
            height: 24,
            objectFit: "cover",
          }}
        />
        <Typography variant="body1">linkedin.com/in/emily-souza-dev</Typography>
      </Stack>
      <Stack direction={"row"} spacing={1}>
        <Box
          component="img"
          src="/images/github-mark.png"
          alt="github logo"
          sx={{
            width: 24,
            height: 24,
            objectFit: "cover",
          }}
        />
        <Typography variant="body1">github.com/emilybsouza</Typography>
      </Stack>
    </Box>
  );
}
