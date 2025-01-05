import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material"; 
import ChangePasswordDialog from "../components/changePasswordDialog";

const drawerWidth = 240;

const AdminPage = () => {
  const navigate = useNavigate();
  const [openTasks, setOpenTasks] = useState({});
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false); 

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!userInfo || (!userInfo.isSuperUser && !userInfo.isBlogUser && !userInfo.isTnTUser)) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const handleToggle = (task) => {
    setOpenTasks((prevState) => ({
      ...prevState,
      [task]: !prevState[task],
    }));
  };

  const handlePasswordChange = () => {
    setOpenPasswordDialog(true); 
  };

  const getTasksForUser = () => {
    if (userInfo.isSuperUser) {
      return [
        { task: "Manage Blogs", subtasks: ["Add Blog", "Update Blog", "Delete Blog", "View Blog"] },
        { task: "Manage Tours", subtasks: ["Add Tour", "Update Tour", "Delete Tour", "View Tour"] },
        { task: "Manage Users", subtasks: ["Add User", "Update User", "Delete User", "View User"] },
      ];
    } else if (userInfo.isBlogUser) {
      return [
        { task: "Manage Blogs", subtasks: ["Add Blog", "Update Blog", "Delete Blog", "View Blog"] },
      ];
    } else if (userInfo.isTnTUser) {
      return [
        { task: "Manage Tours", subtasks: ["Add Tour", "Update Tour", "Delete Tour", "View Tour"] },
      ];
    }
    return [];
  };

  const tasks = getTasksForUser();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
  {/* Navbar */}
  <AppBar position="relative" className="text-center">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Admin Dashboard
      </Typography>
    </Toolbar>
  </AppBar>

  <Box sx={{ display: "flex", flexGrow: 1, mt: 8  }}>
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "grey",
          position: "relative",
        },
      }}
    >
      <Box sx={{ p: 2 }} >
        <Typography variant="h6" gutterBottom >
          Admin Operations
        </Typography>
        <Divider />
        <List>
          {tasks.map(({ task, subtasks }) => (
            <React.Fragment key={task}>
              <ListItemButton onClick={() => handleToggle(task)}>
                <ListItemText primary={task} />
                {openTasks[task] ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTasks[task]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {subtasks.map((subtask) => (
                    <ListItemButton
                      key={subtask}
                      sx={{ pl: 4 }}
                      onClick={() => console.log(`Executing ${subtask} for ${task}`)}
                    >
                      <ListItemText primary={subtask} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ))}
          <ListItemButton onClick={handlePasswordChange}>
            <ListItemText primary="Change Password" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>

    <Box
      sx={{
        flexGrow: 1,
        p: 4,
        ml: `${drawerWidth}px`, 
        mt: 0, 
        overflow: "auto",
      }}
    >
      <Typography variant="h6" color="textSecondary">
        Select a task from the sidebar to begin.
      </Typography>
    </Box>
  </Box>

  <ChangePasswordDialog
    open={openPasswordDialog}
    onClose={() => setOpenPasswordDialog(false)}
  />
</Box>

  );
};

export default AdminPage;
