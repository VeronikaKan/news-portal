import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { getCategories, getWeather } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getNewsLikedByUser } from "../../redux/action";
// ui components import
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import FavoriteOutlined from "@mui/icons-material/FavoriteOutlined";
import ContactPhoneOutlined from "@mui/icons-material/ContactsOutlined";
import CategoryList from "../CategoryList/CategoryList";
import GradeIcon from "@mui/icons-material/Grade";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  // fuctions for data
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const adminToken = useSelector((state) => state.admin);
  const u = useSelector((state) => state.user);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    // dispatch(getWeather())
    dispatch(getCategories());
    dispatch({ type: "IS_ADMIN", payload: decoded?.is_admin });
  }, []);

  console.log(user, "user");

  console.log(u, "user from store");

  // ui component funtions
  const open = useSelector((state) => state.toggleSidebar);
  const decoded = jwtDecode(token);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Box className="sidebar__wrapper" sx={{ opacity: open ? 1 : 0 }}>
            <div className="sidebar__avatar">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png" />
            </div>
            <p className="sidebar__name">{user?.oneUser.full_name}</p>
          </Box>
          <IconButton
            onClick={() => dispatch({ type: "TOGGLE_SIDEBAR", payload: !open })}
          >
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink to="/">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <InboxIcon />
                </ListItemIcon>

                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Главная
                </ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  {" "}
                  <CategoryList open={open} />
                </ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <NavLink to="/favourites">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <FavoriteOutlined />
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  Избранное
                </ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ContactPhoneOutlined />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Контакты
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {adminToken ? (
            <ListItem disablePadding sx={{ display: "block" }}>
              <NavLink to="/admin">
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsSuggestIcon />
                  </ListItemIcon>
                  <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                    Панель управления
                  </ListItemText>
                </ListItemButton>
              </NavLink>
            </ListItem>
          ) : null}
          <Divider />
          <ListItem disablePadding sx={{ display: "block" }}></ListItem>
        </List>
      </Drawer>
    </Box>

    // <div className='sidebar'>
    //   <div className='sidebar__wrapper'>
    //     <div className='sidebar__avatar'>
    //       <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png' />
    //     </div>
    //     <p className='sidebar__name'>{user?.oneUser.full_name}</p>
    //   </div>
    //   <hr className='hr' />
    //   <div className='sidebar__wrapper'>
    //     <div className='sidebar__icon'>

    //     </div>
    //     <div className='sidebar__icon'>
    //       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z" /></svg>
    //     </div>
    // <NavLink to='/'>
    //   <p className='sidebar__subtitle'>
    //     Категории
    //   </p>
    // </NavLink>
    //   </div>
    //   <ul className='sidebar__list'>
    //     {categories.map((el) => (<Link to={`/${el.category_id}`}><li key={el.title} >{el.category_name}</li></Link>))}
    //   </ul>

    //   <div className='sidebar__wrapper'>
    //     <div className='sidebar__icon'>
    //       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
    //     </div>
    // <NavLink to='/favourites'>
    //   <p className='sidebar__subtitle'>
    //     Избранное
    //   </p>
    // </NavLink>
    //   </div>

    // </div>
  );
};

export default Sidebar;
