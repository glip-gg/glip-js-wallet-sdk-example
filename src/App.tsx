import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import './App.css';
import getGlipWallet from './wallet';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import DrawerComponent from './components/nav-components/DrawerComponent';
import AppBarComponent from './components/nav-components/AppBarComponent';

import ConnectModalShowComponent from './components/code_feature_components/ConnectModalShowComponent';
import LoginShowComponent from './components/code_feature_components/LoginShowComponent';
import LogoutShowComponent from './components/code_feature_components/LogoutShowComponent';
import ShowWalletShowComponent from './components/code_feature_components/ShowWalletShowComponent';
import HideWalletShowComponent from './components/code_feature_components/HideWalletShowComponent';


import { Routes, Route, Link } from "react-router-dom";
import SignTransactionShowComponent from './components/code_feature_components/SignTransactionShowComponent';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

function App() {
    const [wallet, setWallet] = useState(undefined as any);
    const classes = useStyles();
    
    useEffect(() => {
        const initWallet = async () => {
        const wallet:any = await getGlipWallet();
        setWallet(wallet);
        console.log('userinfo', await wallet.getUserInfo());
        console.log('www');
    };
        initWallet();
  }, []);
    
    return (
        <div id="App" className="App">
          <Box sx={{ display: 'flex' }}>
            <AppBarComponent/>
          </Box>
          <Box component="nav">
            <DrawerComponent/>
          </Box>
          <div style={{marginLeft:drawerWidth,}}>
            <div style={{
                display:'flex',
                marginLeft:20,
                flexDirection:'column',
                maxWidth:'800px',
                marginTop:40,
            }}>
              <Routes>
                <Route path="/" element={<ConnectModalShowComponent />} />
                <Route path="login" element={<LoginShowComponent />} />
                <Route path="logout" element={<LogoutShowComponent />} />
                <Route path="sign-transaction" element={<SignTransactionShowComponent />} />
                <Route path="show-wallet" element={<ShowWalletShowComponent />} />
                <Route path="hide-wallet" element={<HideWalletShowComponent />} />
              </Routes>
            </div>
            </div>
          </div>
    );
}

export default App;
