// DashboardPage.jsx
import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
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
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/isologo-awoda.png";
import logoawoda from "../assets/isotipo-awoda.png";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

const initialData = [
  { colonia: "Lindavista I", reportes: 5, consumo: "220 m³", poblacion: 3500, perCapita: "63 L/día", viviendas: 1000 },
  { colonia: "Lindavista II", reportes: 3, consumo: "180 m³", poblacion: 2800, perCapita: "58 L/día", viviendas: 850 },
  { colonia: "Magdalena de las Salinas", reportes: 7, consumo: "300 m³", poblacion: 5900, perCapita: "72 L/día", viviendas: 1400 },
  { colonia: "Tepeyac Insurgentes", reportes: 2, consumo: "150 m³", poblacion: 2800, perCapita: "60 L/día", viviendas: 600 },
];

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const [selectedColonia, setSelectedColonia] = useState("Magdalena de las Salinas");
  const [data] = useState(initialData);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />

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
            <Button color="inherit">ENTRENAMIENTO</Button>
          </Box>

          <Box sx={{ width: 80 }}></Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#233044",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          }}
        >
          <Box>
            <Toolbar />
            <Box sx={{ p: 5 }}>
              <Typography variant="body2" gutterBottom>
                Colonias disponibles:
              </Typography>
              <List>
                {["Lindavista I", "Lindavista II", "Magdalena de las Salinas", "Tepeyac Insurgentes"].map((text, index) => {
                  const isSelected = selectedColonia === text;
                  return (
                    <ListItemButton
                      key={index}
                      selected={isSelected}
                      onClick={() => setSelectedColonia(text)}
                      sx={{
                        borderRadius: 1,
                        mb: 1,
                        bgcolor: isSelected ? "#4c6ef5" : "transparent",
                        "&:hover": {
                          bgcolor: isSelected ? "#3a5ddc" : "#2c3e50",
                        },
                      }}
                    >
                      <ArrowForwardIcon
                        sx={{
                          color: isSelected ? "#fb0a7f" : "#90caf9",
                          mr: 1,
                        }}
                      />
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{
                          color: "#ffffff",
                          fontWeight: isSelected ? "bold" : "normal",
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
              <Typography variant="body2" sx={{ mt: 2, color: "#ffffff" }}>
                La priorización de suministro está delimitada a un conjunto de colonias previamente seleccionadas. Las sugerencias generadas se basan en los datos disponibles de esta área y no deben extrapolarse a otras regiones sin el análisis correspondiente
              </Typography>
            </Box>
          </Box>

          <Box>
            <Divider sx={{ borderColor: "#ffffff" }} />
            <Button
              startIcon={<LogoutIcon />}
              sx={{ color: "#ffffff", justifyContent: "flex-start", px: 5, py: 2, textTransform: "none" }}
              onClick={() => navigate("/singin")}
            >
              Cerrar sesión
            </Button>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#f9fcfe", color: "#001f2f" }}>
          <Toolbar />

          <Box sx={{ display: "flex", gap: 2 }}>
            {/* Mapa */}
            <Box sx={{ flex: 1.5 }}>
              <Paper sx={{ height: 600, p: 2, bgcolor: "#f7f9fc" }}>
                <Typography variant="h6" sx={{ color: "#003249", mb: 2 }}>
                  Mapa de Prioridad
                </Typography>
                <Box
                  sx={{
                    height: "90%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#e6f4fa",
                    borderRadius: 2,
                  }}
                >
                  <img src="/mapa-awoda.png" alt="Mapa AWODA" style={{ maxHeight: "100%", maxWidth: "100%" }} />
                </Box>
              </Paper>
            </Box>

            {/* Aside derecho */}
            <Box sx={{ width: 300 }}>
              <Paper sx={{ height: 600, p: 2, bgcolor: "#ffffff" }}>
                <Typography variant="h6" sx={{ color: "#000000" }}>
                  Distribución Sugerida
                </Typography>
                <List>
                  {["Magdalena de las S.", "Lindavista II", "Lindavista I", "Tepeyac Insurgentes"].map((colonia, index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={`${index + 1}. ${colonia}`}
                        primaryTypographyProps={{ color: "#000000" }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body2" sx={{ mt: 2, color: "#000000" }}>
                  Esta propuesta de distribución fue generada por la IA de AWODA y está sujeta a validación de autoridades.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 8 }}
                  onClick={() => setOpen(true)}
                >
                  Ajustar parámetros
                </Button>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "#1b2635", color: "#ffffff", py: 2, px: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Avatar src={logoawoda} alt="AWODA Logo" sx={{ width: 24, height: 24, mr: 1 }} />
        <Typography variant="body2">© 2025 AWODA. Todos los derechos reservados.</Typography>
      </Box>

      {/* Modal Ajustar Parámetros */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth>
        <DialogTitle>COLONIAS</DialogTitle>
        <DialogContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Colonia</TableCell>
                  <TableCell>Núm. de Reportes</TableCell>
                  <TableCell>Consumo Total de Agua por Colonia</TableCell>
                  <TableCell>Población Promedio por Colonia</TableCell>
                  <TableCell>Núm. de Edificaciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.colonia}</TableCell>
                    <TableCell><TextField size="small" defaultValue={row.reportes} /></TableCell>
                    <TableCell><TextField size="small" defaultValue={row.consumo} /></TableCell>
                    <TableCell><TextField size="small" defaultValue={row.poblacion} /></TableCell>
                    <TableCell><TextField size="small" defaultValue={row.viviendas} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
