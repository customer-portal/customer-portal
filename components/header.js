import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import styles from "./header.module.css";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Payment, Receipt } from "@material-ui/icons";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "17px",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [session, loading] = useSession();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const [openOrg, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {session && (
          <ListItem button key={session.user.name}>
            <ListItemIcon>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={session.user.name} />
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        {/* {session && (session.user.role === 0 ? signout() : null)} */}

        <ListItem button key={"Organizations"}>
          <ListItemIcon>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            />
          </ListItemIcon>
          <Button onClick={handleDrawerOpen}>
            <ListItemText primary={"Organizations"} />
          </Button>
        </ListItem>

        <ListItem button key={"Payments"}>
          <ListItemIcon>
            <Payment />
          </ListItemIcon>
          <Link href={`/payments`}>
            <ListItemText primary={"Payments"} />
          </Link>
        </ListItem>
        <ListItem button key={"Transactions"}>
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <Link href={`/transactions`}>
            <ListItemText primary={"Transactions"} />
          </Link>
        </ListItem>
        <ListItem button key={"Profile"}>
          <ListItemIcon>
            <AccountCircle/>
          </ListItemIcon>
          <Link href={`/profile`}>
            <ListItemText primary={"Profile"} />
          </Link>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          {!session && (
            <>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign in
              </Button>
            </>
          )}
          {session && (
            <>
              {/* <span className={styles.signedInText}>
                <strong>{session.user.email || session.user.name}</strong>
              </span> */}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign out
              </Button>
            </>
          )}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar color="primary" position="static">
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
          color="blue"
        >
          {list("left")}
        </SwipeableDrawer>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={openOrg}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Deskera", "Google", "Microsoft", "Facebook"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {["Google", "Microsoft", "Facebook"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Customer Portal
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
