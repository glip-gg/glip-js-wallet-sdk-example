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
import ERC721TransferShowComponent from './components/code_feature_components/ERC721TransferShowComponent';
import ERC20TransferShowComponent from './components/code_feature_components/ERC20TransferShowComponent';

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
  },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: drawerWidth
    }
}));

function App() {
    const [wallet, setWallet] = useState(undefined as any);
    const [drawerOpen, setDrawerOpen] = useState(true);
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
            <AppBarComponent
                toggleDrawer={()=> setDrawerOpen(!drawerOpen)}
            />
          </Box>
          <DrawerComponent drawerOpen={drawerOpen} setDrawerOpen={(newDrawerOpen:boolean)=> setDrawerOpen(newDrawerOpen)} />
          <div className={clsx(classes.content, {
              [classes.contentShift]: drawerOpen,
          })}>
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
                <Route path="show-hide-wallet" element={<ShowWalletShowComponent />} />
                <Route path="sign-transaction" element={<SignTransactionShowComponent />} />
                <Route path="show-721-transfer" element={<ERC721TransferShowComponent />} />
                <Route path="show-20-transfer" element={<ERC20TransferShowComponent />} /> 

              </Routes>
            </div>
          </div>
        </div>
    );
}

export default App;
