import type { Metadata } from 'next'
import { inter } from '@/app/ui/fonts';
import './globals.css'
import Image from 'next/image';
import {Search, AccountCircleOutlined, ShoppingCartOutlined} from '@mui/icons-material';
import MobileHamburgerMenu from './ui/MobileHamburgerMenu';
import { Box, Typography } from '@mui/material';
import { Footer } from './ui/Footer';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-full`} style={{border:'0px solid blue', minHeight:'100vh'}}>

        <AppBar/>

        <div className='flex-grow'>
          {children}
        </div>

        <Footer/>
        
      </body>
    </html>
  )
}


function AppBar(){


  return (
    <header className='flex justify-between items-center m-1 sm:m-4'>
      <div className='flex space-x-5 items-center'>
        <MobileHamburgerMenu/>
        <div className='flex flex-col items-center' style={{color:'red', border:'0px solid red'}}>
          <Box className='' sx={{width:{xs: 80, sm:90}, height:{xs:47, sm:53}}}>
            <Image src={'/hat.png'} width={90} height={53} style={{objectFit:'contain'}} alt='logo'/>
          </Box>
          <Typography className='text-center' sx={{color:'#00ADB5', fontSize:{xs:'15px', sm:'20px'}}}>Spark Shop</Typography>
        </div>
      </div>
      <nav className='space-x-6 hidden lg:flex'>
        <a href="">Men</a>
        <a href="">Women</a>
        <a href="">All categories</a>
        <a href="">Contact Us</a>
      </nav>
      <div className='flex space-x-2 sm:space-x-4 lg:space-x-5'>
        <Search/>             
        <AccountCircleOutlined/>           
        <ShoppingCartOutlined/>           
      </div>
    </header>
  );
}

