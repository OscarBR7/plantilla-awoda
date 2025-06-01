// HistorialPage.jsx
import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/isologo-awoda.png";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const historialData = [
  {
    fecha: "25-04-2025 10:54",
    colonia: "Lindavista I",
    reportes: 35,
    consumo: 750,
    poblacion: 1500,
    perCapita: 18,
    viviendas: 800,
    distribucion: "1) Hospitales 2) Escuelas 3) Casas 4) Clínicas Part 5) Comercios",
  },
  {
    fecha: "24-04-2025 10:50",
    colonia: "Magdalena de las S",
    reportes: 50,
    consumo: 1400,
    poblacion: 2300,
    perCapita: 22,
    viviendas: 1600,
    distribucion: "1) Escuelas 2) Clínicas Part 3) Comercios 4) Centros Go 5) Casas",
  },
  {
    fecha: "23-04-2025 09:32",
    colonia: "Tepeyac Insurgente",
    reportes: 20,
    consumo: 600,
    poblacion: 1200,
    perCapita: 16,
    viviendas: 700,
    distribucion: "1) Hospitales 2) Escuelas 3) Casas 4) Comercios 5) Centros Go",
  },
];

export default function HistorialPage() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

      {/* AppBar superior */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#1b2635",
          color: "#ffffff",
          height: 80,
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit" edge="start">
              <MenuIcon />
            </IconButton>
            <Avatar src={logo} alt="AWODA Logo" sx={{ width: 40, height: 40 }} />
            <Typography variant="h6" noWrap component="div">
              AWODA
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", gap: 4, justifyContent: "center", flex: 1 }}>
            <Button color="inherit" onClick={() => navigate("/dashboard")}>PRINCIPAL</Button>
            <Button color="inherit" onClick={() => navigate("/graficas")}>GRÁFICAS</Button>
            <Button color="inherit" onClick={() => navigate("/historial")}>HISTORIAL</Button>
            <Button color="inherit">ENTRENAMIENTO</Button> {/* puedes enlazarlo más tarde */}
          </Box>

          <Box sx={{ width: 80 }}></Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Aside izquierdo */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#233044",
              color: "white",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ p: 3 }}>
            <Typography variant="body2" gutterBottom>
              Colonias disponibles:
            </Typography>
            <List>
              {["Magdalena de las Salinas", "Lindavista II", "Lindavista I", "Tepeyac Insurgentes"].map((colonia, index) => (
                <ListItem button key={index}>
                  <ListItemText
                    primary={`${index + 1}. ${colonia}`}
                    primaryTypographyProps={{ color: "white" }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ borderColor: "white", my: 2 }} />
            <Typography variant="body2">
              La priorización de suministro está delimitada a un conjunto de colonias previamente seleccionadas.
            </Typography>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: "#f9fcfe" }}>
          <Toolbar />
          <Typography variant="h5" sx={{ mb: 2 }}>
            Historial de Recomendaciones
          </Typography>

          {/* Tabla */}
          <Paper sx={{ p: 2 }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha de Consulta</TableCell>
                    <TableCell>Colonia</TableCell>
                    <TableCell>Núm. Reportes</TableCell>
                    <TableCell>Consumo de Agua (m³)</TableCell>
                    <TableCell>Población Estimada</TableCell>
                    <TableCell>Consumo Prom. por Persona</TableCell>
                    <TableCell>Número de Viviendas</TableCell>
                    <TableCell>Distribución Sugerida</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {historialData.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.fecha}</TableCell>
                      <TableCell>{row.colonia}</TableCell>
                      <TableCell>{row.reportes}</TableCell>
                      <TableCell>{row.consumo}</TableCell>
                      <TableCell>{row.poblacion}</TableCell>
                      <TableCell>{row.perCapita}</TableCell>
                      <TableCell>{row.viviendas}</TableCell>
                      <TableCell>{row.distribucion}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button variant="contained" color="primary">
                Exportar en PDF
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#1b2635",
          color: "#ffffff",
          py: 2,
          px: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">© 2025 AWODA. Todos los derechos reservados.</Typography>
      </Box>
    </Box>
  );
}
