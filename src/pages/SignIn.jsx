// src/pages/SignIn.jsx
import React from "react";
import awodaLogo from "../assets/isologo-awoda.png";
import {
  Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox,
  Link, Paper, Box, Grid, Typography, createTheme, ThemeProvider
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center'  }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} sx={{ backgroundColor: '#0a0f1b' }} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#111827' }}>
          <Box
            sx={{
              my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={awodaLogo} alt="AWODA logo" style={{ width: 60, height: 60 }} />
            </Box>
            <Typography component="h1" variant="h5">
              Inicio de Sesión
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField margin="normal" required fullWidth id="num_empleado" label="Número de Empleado" name="num_empleado" autoComplete="num_empleado" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" />
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Iniciar Sesión
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
