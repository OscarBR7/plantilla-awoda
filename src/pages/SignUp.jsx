import React from "react";
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,
  Link, Grid, Box, Typography, Container, createTheme, ThemeProvider
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const theme = createTheme({ palette: { mode: 'dark' } });

export default function SignUp() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{
          marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear cuenta
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField required fullWidth label="Nombre completo" name="fullName" autoComplete="name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth label="Correo electrónico" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Contraseña" type="password" autoComplete="new-password" />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox value="updates" color="primary" />} label="Quiero recibir noticias por correo." />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  ¿Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
