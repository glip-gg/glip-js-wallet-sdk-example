//This is custom styled react component for the AppBar
import AppBar from '@mui/material/AppBar';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
  appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
      })
  },
    appBarShift: {
        // marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },    
}));

export default function AppBarComponent(props:any) {
    const classes = useStyles();
    return(
        <AppBar component="nav" position="static"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: true
                })}
                sx={{ bgcolor: "#8B008B" }}
        >
          <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Glip Wallet Example App
            </Typography>
          </Toolbar>
        </AppBar>
    )
}
