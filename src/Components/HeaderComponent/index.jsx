import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import anime from 'animejs';
import Hammer from 'hammerjs';
import Logo from '../../Assets/Images/logo.png';
import Laptop from '../../Assets/Images/laptop.png';
import aboutIcon from "../../Assets/Images/about.png";
import klienciIcon from "../../Assets/Images/klienci.png";
import portfolioIcon from "../../Assets/Images/portfolio.png";
import ofertaIcon from "../../Assets/Images/oferta.png";
import kontaktIcon from "../../Assets/Images/kontakt.png";
import './Header.css';

export const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
      const body = document.body;
      const hammer = new Hammer(body);
  
      // Добавляем обработчики свайпов
      hammer.on('swipeleft', () => setIsMenuOpen(true));
      hammer.on('swiperight', () => setIsMenuOpen(false));
      return () => {
        hammer.off('swipeleft');
        hammer.off('swiperight');
      };
    }, []);
  
    useEffect(() => {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = ''; 
      }
  
      return () => {
        document.body.style.overflow = ''; 
      };
    }, [isMenuOpen]);
  
  useEffect(() => {
    const textWrapper = document.querySelector('.ml14 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: false })
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeInOutExpo',
        duration: 1800,
      })
      .add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        offset: '-=800',
        delay: (el, i) => 300 + 40 * i,
      })
      .add({
        targets: '.ml14',
        opacity: 1,
        duration: 1000,
        easing: 'easeOutExpo',
        complete: () => setAnimationCompleted(true),
      });
  }, []);

  const createNavButton = (to, label, iconSrc = null, variant = 'text') => (
    <ScrollLink
      className="bm-item"
      to={to}
      smooth={true}
      duration={500}
      onClick={() => setIsMenuOpen(false)}
    >
      <Button
        variant={variant}
        color="black"
        startIcon={iconSrc && <img src={iconSrc} alt={`${label} icon`} style={{ width: '35px', height: '35px', marginRight: '8px' }} />}
        sx={{
          fontWeight: 'bold',
          fontSize: '15px',
          position: 'relative',
          transition: 'transform 0.3s ease, color 0.3s ease',
          '&:hover': {
            color: '#D9B1CB',
            transform: 'scale(1.1)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: '#D9B1CB',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        {label}
      </Button>
    </ScrollLink>
  );

  return (
    <div className="header" id="top">
      <div className={`header_container ${isMenuOpen ? 'dark-container' : ''}`}>
        <div className={`logo ${isMenuOpen ? 'hidden-logo' : ''}`}>
          <ScrollLink to="top" smooth={true} duration={500} offset={-80}>
            <img
              src={Logo}
              alt="logo"
              className="responsive-logo"
              width={120}
              height={82}
            />
          </ScrollLink>
        </div>
        <div className="Burger">
          <Menu
            right
            width="65%"
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
            styles={{
              bmMenu: {
                boxShadow: '10px 30px 120px rgba(0, 0, 0, 0.3)',
                zIndex: 1000,
              },
            }}
          >
            {createNavButton('obo_mnie_scroll', 'OBO MNIE', aboutIcon)}
            {createNavButton('portfolio_scroll', 'PORTFOLIO', portfolioIcon)}
            {createNavButton('oferta_scroll', 'OFERTA', ofertaIcon)}
            {createNavButton('klienci_scroll', 'KLIENCI', klienciIcon)}
            {createNavButton('kontakt_scroll', 'KONTAKT', kontaktIcon)}
          </Menu>
        </div>
        <div className="header_navigation">
          {createNavButton('obo_mnie_scroll', 'OBO MNIE')}
          {createNavButton('portfolio_scroll', 'PORTFOLIO')}
          {createNavButton('oferta_scroll', 'OFERTA')}
          {createNavButton('klienci_scroll', 'KLIENCI')}
        </div>
        <div className="header_navigation2">
          <ScrollLink
            className="bm-item"
            to="kontakt_scroll"
            smooth={true}
            duration={500}
            onClick={() => setIsMenuOpen(false)}
          >
            <Button
              variant="outlined"
              color="black"
              sx={{
                borderWidth: '2px',
                fontSize: '15px',
                padding: '15px 24px',
                fontWeight: 'bold',
                '&:hover': {
                  color: '#D9B1CB',
                  transform: 'scale(1.1)',
                },
              }}
            >
              KONTAKT
            </Button>
          </ScrollLink>
        </div>
      </div>
      <div className="elegance_container">
        <div className="elegance">
          <div className="elegance_text">
            <h1 className="ml14">
              <span className="text-wrapper">
                <span className="letters">ELEGANCE IN EVERY PIXEL</span>
                <span className="line"></span>
              </span>
            </h1>
          </div>
          <div
            className={`overlay ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="laptop">
            <img
              src={Laptop}
              alt="laptop"
              className="responsive-image"
              height={387}
              width={562}
            />
          </div>
        </div>
        <div className="arrow-container">
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
