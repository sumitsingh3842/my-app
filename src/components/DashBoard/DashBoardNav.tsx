import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ToggleOff, ToggleOn } from '@mui/icons-material';

import '../../styles/components/DashBoard/DashBoardNav.css'
const pages = ['File', 'Edit', 'View','Arrange','Help'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const regions=[{ "regionName": "US East (N. Virginia)", "regionCode": "us-east-1" },
{ "regionName": "US East (Ohio)", "regionCode": "us-east-2" },
{ "regionName": "US West (N. California)", "regionCode": "us-west-1" },
{ "regionName": "US West (Oregon)", "regionCode": "us-west-2" },
{ "regionName": "Africa (Cape Town)", "regionCode": "af-south-1" },
{ "regionName": "Asia Pacific (Hong Kong)", "regionCode": "ap-east-1" },
{ "regionName": "Asia Pacific (Mumbai)", "regionCode": "ap-south-1" },
{ "regionName": "Asia Pacific (Osaka-Local)", "regionCode": "ap-northeast-3" },
{ "regionName": "Asia Pacific (Seoul)", "regionCode": "ap-northeast-2" },
{ "regionName": "Asia Pacific (Singapore)", "regionCode": "ap-southeast-1" },
{ "regionName": "Asia Pacific (Sydney)", "regionCode": "ap-southeast-2" },
{ "regionName": "Asia Pacific (Tokyo)", "regionCode": "ap-northeast-1" },
{ "regionName": "Canada (Central)", "regionCode": "ca-central-1" },
{ "regionName": "China (Beijing)", "regionCode": "cn-north-1" },
{ "regionName": "China (Ningxia)", "regionCode": "cn-northwest-1" },
{ "regionName": "EU (Frankfurt)", "regionCode": "eu-central-1" },
{ "regionName": "EU (Ireland)", "regionCode": "eu-west-1" },
{ "regionName": "EU (London)", "regionCode": "eu-west-2" },
{ "regionName": "EU (Milan)", "regionCode": "eu-south-1" },
{ "regionName": "EU (Paris)", "regionCode": "eu-west-3" },
{ "regionName": "EU (Stockholm)", "regionCode": "eu-north-1" },
{ "regionName": "Middle East (Bahrain)", "regionCode": "me-south-1" },
{ "regionName": "South America (Sao Paulo)", "regionCode": "sa-east-1" },
{ "regionName": "AWS GovCloud (US-East)", "regionCode": "us-gov-east-1" },
{ "regionName": "AWS GovCloud (US-West)", "regionCode": "us-gov-west-1" }]
const services=
[
  {
    "name": "Amazon Web Services (AWS)",
    "abbreviation": "AWS"
  },
  {
    "name": "Microsoft Azure",
    "abbreviation": "Azure"
  },
  {
    "name": "Google Cloud",
    "abbreviation": "GCP"
  },
  {
    "name": "IBM Cloud",
    "abbreviation": "IBM"
  },
  {
    "name": "Firebase",
    "abbreviation": "Firebase"
  },
  {
    "name": "Vercel",
    "abbreviation": "Vercel"
  },
  {
    "name": "Netlify",
    "abbreviation": "Netlify"
  },
  {
    "name": "Alibaba Cloud",
    "abbreviation": "Alibaba Cloud"
  },
  {
    "name": "Tencent Cloud",
    "abbreviation": "Tencent Cloud"
  }
]

interface DashBoardNavProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}
interface Region {
  regionName: string;
  regionCode: string;
}
interface Service {
  name: string;
  abbreviation: string;
}
const DashBoardNav: React.FC<DashBoardNavProps> = ({ isDarkMode, toggleDarkMode }) => {
    const [selectedRegion,setSelectedRegion]=useState(regions[0].regionCode)
    const [selectedService,setSelectedService]=useState(services[0].abbreviation)
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElRegion, setAnchorElRegion] = React.useState<null | HTMLElement>(null);
    const [anchorElService, setAnchorElService] = React.useState<null | HTMLElement>(null);
    const [darkMode, setDarkMode] = useState(false);
    const {
      user,
      isAuthenticated,
      loginWithRedirect,
      logout,
    } = useAuth0();
    const navigate = useNavigate();
    const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleOpenRegionMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElRegion(event.currentTarget);
    };
    const handleCloseRegionMenu = (region:Region) => {
      setAnchorElRegion(null);
      if(region.regionCode)
      setSelectedRegion(region.regionCode)
    };
    const handleOpenServiceMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElService(event.currentTarget);
    };
    const handleCloseServiceMenu = (service:Service) => {
      setAnchorElService(null);
      if(service.abbreviation)
      setSelectedService(service.abbreviation)
    };

    return (
      <AppBar position="static">
        <Container maxWidth={false} >
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block',margin:'0px' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Button onClick={handleOpenServiceMenu} endIcon={<KeyboardArrowDownIcon />} sx={{color:'white'}}>
                  {selectedService}
                </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElService}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElService)}
                onClose={handleCloseServiceMenu}
              >
                {services.map((service) => (
                  <MenuItem key={service.name} onClick={()=>handleCloseServiceMenu(service)}>
                    <Typography textAlign="center">{service.name},{service.abbreviation}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box>
                <Button onClick={handleOpenRegionMenu}  endIcon={<KeyboardArrowDownIcon />} sx={{color:'white',textTransform:'lowercase'}}>
                  {selectedRegion}
                </Button>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElRegion}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElRegion)}
                onClose={handleCloseRegionMenu}
              >
                {regions.map((region) => (
                  <MenuItem key={region.regionCode} onClick={()=>handleCloseRegionMenu(region)}>
                    <Typography textAlign="center">{region.regionName},{region.regionCode}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 0,margin:'0 5px' }}>
            {/* <Button
            variant="text"
            onClick={toggleDarkMode}
            startIcon={isDarkMode ? <ToggleOn /> : <ToggleOff />}
          >
             </Button> */}
             {isDarkMode?
             <IconButton aria-label="toggleon"  onClick={toggleDarkMode} size="large">
             <ToggleOn fontSize="inherit" />
           </IconButton> :
           <IconButton aria-label="toggleoff"  onClick={toggleDarkMode} size="large">
           <ToggleOff fontSize="inherit" />
         </IconButton>
             }
             
            </Box>
            {isAuthenticated && user && (
                <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Sumit Singh" src={user.picture} />
                </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                  <MenuItem onClick={()=>navigate('/profile')}>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => logoutWithRedirect()}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>

              </Menu>
            </Box>
              )}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

export default DashBoardNav