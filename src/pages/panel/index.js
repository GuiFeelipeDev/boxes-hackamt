import React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import AppBar from "@mui/material/AppBar"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { FaHome } from "react-icons/fa"
import { GrGroup } from "react-icons/gr"
import { Link, Outlet, useNavigate } from "react-router-dom"

const drawerWidth = 240

export default function AdminPanel() {
  let navigate = useNavigate()
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/panel/graficos")}
          >
            Painel - Ricardo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Link to="/">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FaHome className="icon-format" />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
          <Divider />
          <List>
            <Link to={process.env.PUBLIC_URL + "/panel/turmas"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <GrGroup className="icon-format" />
                  </ListItemIcon>
                  <ListItemText primary="Turmas" />
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}
