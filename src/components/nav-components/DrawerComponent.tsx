//This is custom styled react component for the Drawer
import {useState} from 'react';

import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import List from '@mui/material/List';

const drawerWidth = 240;

const data = [
    {"name": "Authentication Methods",
     "children":[
         { name: "Show Modal", icon: <></>, link: "" },
         { name: "Login", icon: <></>, link: "login" },
         { name: "Logout", icon: <></>, link: "logout" },
     ]
    },
    {
        "name": "Wallet UI Methods",
        "children":[
            { name: "Show Wallet", icon: <></>, link: "show-wallet" },
            { name: "Hide Wallet", icon: <></>, link: "hide-wallet",}
        ]
    },
    {"name": "Web3 Transaction Methods",
     "children":[
         { name: "Sign Transaction", icon: <></>, link: "sign-transaction" },
    ]}
];

// rendernested data in collapsable list
const SubList = (props:any)=>{
    const {name, children} = props.item;
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={name} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {children.map((item:any) => (
                  <Link className="link" to={item.link}>
                    <ListItem button>
                      <ListItemIcon>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  </Link>
              ))}
            </List>
          </Collapse>
        </>
    )
}

const getNestedList = (data:any)=>{
    return data.map((item:any)=>{
        return <SubList item={item}/>
    })
}


const useStyles = makeStyles((theme) => ({
  drawer: {
      width: drawerWidth,
      flexShrink: 0,
      background: 'transparent'
  },
    drawerPaper: {
        width: drawerWidth,
        background: 'transparent'
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
        marginBottom: '26px'
    },
}));

const useStylesListItem = makeStyles({
    root: {
        '&$selected': {
            backgroundColor: 'red',
            '&:hover': {
                backgroundColor: 'yellow',
            },
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    listItemRoot: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {},
});


export default function DrawerContent(props:any) {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    
    return (
        <Drawer
            className={classes.drawer}
          
            open={true}
            anchor={"left"}
            classes={{
                paper: classes.drawerPaper
            }}
            variant={"persistent"}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                container:document.getElementById("App"),
                style: { position: "relative" }
            }}
            sx={{
                display: { xs: 'block', sm: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: 'transparent', position: "absolute" },
            }}
            onClose={() => setOpen(false)}>
          <div className={classes.drawerHeader}></div>
          {getNestedList(data)}
        </Drawer>
    );
}
