// function Header() {
//     return(
//     <div className="HeaderTop">
//         <header>
//             <a id = "Logo"><img src='./Picture/CPWlogo.png' width="358" height="75"/></a>
//         </header>
//         <nav>
        
//         </nav>
//     </div>
//         )
//     }

//     export default Header;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import CPWlogin02 from './Login/CPWlogin2';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button ,Grid, Modal } from '@mui/material';


const CPWTheme = createTheme({
    palette: {
      primary: {
        main: '#cb0470',
      },
    },
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
  };

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';


  const [auth, setAuth] = React.useState(true);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={CPWTheme}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <a id = "Logo"><img src='./Picture/CPWlogo.png' width="358" height="75"/></a>
          </Typography>
          <Grid container justifyContent={"right"} >
          <Button variant="outlined" color="inherit"  onClick={handleOpen} sx={{fontSize:10}} >Login</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
            <CPWlogin02 />
        </Box>
      </Modal>
          </Grid>
          

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
   
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            </IconButton>
            {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  Main Chat <Link to="/FAQcrud" />
                  </MenuItem>
                <MenuItem onClick={handleClose}>
                  Dashboard 
                    </MenuItem>
                <MenuItem onClick={handleClose}>
                  Setpermission 
                   </MenuItem>
                <MenuItem onClick={handleClose}>
                  FAQ
                  </MenuItem>
                <MenuItem onClick={handleClose}>
                  Profile
                   </MenuItem>
              </Menu>
            </div>
          )}
          </Box>



        </Toolbar>
      </AppBar>
      </ThemeProvider>
      <Box 
      sx={{height:"30%" ,p:1 , pl:30, color:"violet" , bgcolor:"#230085" , 
                width: "100"}}
                >
        {/* maxWidth: { xs: 320, sm: 480 , md: 800 , lg:1000 } */}
        {/* Chonpratanwittaya Shool */}
      </Box>
      
    </Box>
  );
}