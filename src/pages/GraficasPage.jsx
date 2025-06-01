// GraficasPage.jsx
import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/isologo-awoda.png";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function GraficasPage() {
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

      {/* Contenido principal */}
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
          <Box sx={{ p: 6 }}>
            <Typography variant="body2" gutterBottom>
              Colonias disponibles:
            </Typography>
            <List>
              {["Magdalena de las Salinas", "Lindavista II", "Lindavista I", "Tepeyac Insurgentes"].map(
                (colonia, index) => (
                  <ListItem button key={index}>
                    <ListItemText
                      primary={`${index + 1}. ${colonia}`}
                      primaryTypographyProps={{ color: "white" }}
                    />
                  </ListItem>
                )
              )}
            </List>
            <Divider sx={{ borderColor: "white", my: 2 }} />
            <Typography variant="body2">
              La priorización de suministro está delimitada a un conjunto de colonias previamente seleccionadas.
            </Typography>
          </Box>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 4, bgcolor: "#f9fcfe" }}>
          <Toolbar />
          <Typography variant="h5" sx={{ mb: 1 }}>
            Magdalena de las Salinas
          </Typography>

          <Paper sx={{ p: 4, bgcolor: "white", mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Historial de Consumo de Agua
            </Typography>
            <Box
              sx={{
                height: 450,
                bgcolor: "#e6f4fa",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#666",
                fontSize: 18,
              }}
            >
              <img src="/grafica-awoda.png" alt="grafica AWODA" style={{ width: "50%", height: "auto", objectFit: "contain" }} />
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
