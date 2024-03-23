'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton, Menu, MenuItem} from '@mui/material';
import { useState } from 'react';

export default function MobileHamburgerMenu(){
  
    const [anchorEl, setAnchorEl] = useState(null);
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const handleMenuOpen = (event:any) => {
      setAnchorEl(event.currentTarget);
      setMobileMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      setMobileMenuOpen(false); 
    };
  
    return (
        <div className='lg:hidden'>
          <IconButton onClick={handleMenuOpen}>
            <MenuIcon/>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={mobileMenuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={handleMenuClose}>Men</MenuItem>
            <MenuItem onClick={handleMenuClose}>Women</MenuItem>
            <MenuItem onClick={handleMenuClose}>All categories</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
          </Menu> 
        </div>
    );
  
  }