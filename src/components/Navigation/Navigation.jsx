import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import littleLemonLogo from './../../assets/little-lemon-logo.png';
import { Anchor } from '../../design-system/Anchor';


export function Navigation({ testId = 'navigation-component' }) {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav data-testid={testId} className="lg:w-full z-1000 rounded relative px-4 py-2  bg-primaryBackground m-auto" >
      <div className='max-w-7xl flex justify-between items-center mx-auto'>
      <Anchor className="hidden lg:block" testId="navigation-little-lemon-logo" onClick={() => navigate('/')}>
        <img src={littleLemonLogo} alt="little-lemon" className='w-44' />
      </Anchor>
      <div className="lg:hidden">
        <button data-testid="navigation-burger-menu" className="navbar-burger flex items-center text-primaryText p-3" onClick={toggleMobileMenu}>
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <div className="hidden lg:block">
        <Anchor fontSize='a5' testId="navigation-home" hoverType="underline" onClick={() => navigate('/')} highlight={window.location.pathname === '/'}>Home</Anchor>
        <Anchor fontSize='a5' testId="navigation-best-seller" hoverType="underline" onClick={() => navigate('/')} href="#best-sellers" >Best Sellers</Anchor>
        <Anchor fontSize='a5' testId="navigation-about-us" hoverType="underline" onClick={() => navigate('/')} href="#about" >About Us</Anchor>
        <Anchor fontSize='a5' testId="navigation-reserve-a-table" hoverType="background" onClick={() => { navigate('/book') }} highlight={window.location.pathname === '/book'} hover>Reserve a Table</Anchor>
      </div>

      {mobileMenuOpen && <div className="grid lg:hidden absolute top-20 p-4 bg-primaryBackground left-0 w-full">
        <Anchor fontSize='a5' testId="navigation-mobile-home" hoverType="underline" onClick={() => { navigate('/'); setMobileMenuOpen(false)}} highlight={window.location.pathname === '/'}>Home</Anchor>
        <Anchor fontSize='a5' testId="navigation-mobile-best-seller" hoverType="underline" onClick={() => { navigate('/'); setMobileMenuOpen(false)}}  href="#best-sellers" >Best Sellers</Anchor>
        <Anchor fontSize='a5' testId="navigation-mobile-about-us" hoverType="underline" onClick={() => { navigate('/'); setMobileMenuOpen(false)}}  href="#about" >About Us</Anchor>
        <Anchor fontSize='a5' testId="navigation-mobile-reserve-a-table" hoverType="background" onClick={() => { navigate('/book'); setMobileMenuOpen(false)}}  highlight={window.location.pathname === '/book'} hover>Reserve a Table</Anchor>
      </div>}
      </div>
      
    </nav>
  );
}
