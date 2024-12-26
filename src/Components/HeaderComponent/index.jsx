import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@mui/material';
import { slide as Menu } from 'react-burger-menu';
import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import Logo from '../../Assets/Images/logo.png';
import Laptop from '../../Assets/Images/laptop.png';
import Hammer from 'hammerjs';
import './Header.css';


export const HeaderComponent = () => {
  
  const [animationCompleted, setAnimationCompleted] = useState(false);  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  };

  useEffect(() => {
    const menuContainer = document.querySelector('.header');
    const hammer = new Hammer(menuContainer);
    hammer.on('swipeleft', () => {
      setIsMenuOpen(true); 
    });
    hammer.on('swiperight', () => {
      setIsMenuOpen(false); 
    });
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
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      const timeline = anime.timeline({ loop: false })  
      .add({
        targets: '.ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 1800,  
      })
      .add({
        targets: '.ml14 .letter',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 1200,  
        offset: '-=800',
        delay: (el, i) => 300 + 40 * i,  
      })
      .add({
        targets: '.ml14',
        opacity: 1,  
        duration: 1000,  
        easing: "easeOutExpo",
        complete: () => {
          setAnimationCompleted(true);
        },
      });

    return () => {
      timeline.pause();
    };
  }, []); 
  return (
    <div className="header" id='top'>
     <div className={`header_container ${isMenuOpen ? 'dark-container' : ''}`}>
      <div className={`logo ${isMenuOpen ? 'hidden-logo' : ''}`}>
  <ScrollLink to="top" smooth={true} duration={500} offset={-80}>
    <img src={Logo} alt="logo" className="responsive-logo" width={120} height={82} />
  </ScrollLink>
</div>
        <div className="Burger">
          <Menu
            right
            width="50%"
            styles={{
              bmMenu: {
                boxShadow: '10px 30px 120px rgba(0, 0, 0, 0.3)',
                zIndex: 1000, 
              },
            }}
            isOpen={isMenuOpen}
            onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
          >
             <ScrollLink className="bm-item" to="obo_mnie_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="text"
                color="black"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    borderColor: '#D9B1CB',
                    color: '#D9B1CB',
                    transform: 'scale(1.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#D9B1CB',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                OBO MNIE
              </Button>
           </ScrollLink>
           <ScrollLink className="bm-item" to="portfolio_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="text"
                color="black"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    borderColor: '#D9B1CB',
                    color: '#D9B1CB',
                    transform: 'scale(1.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#D9B1CB',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                PORTFOLIO
              </Button>
        </ScrollLink>
        <ScrollLink className="bm-item" to="oferta_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="text"
                color="black"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    borderColor: '#D9B1CB',
                    color: '#D9B1CB',
                    transform: 'scale(1.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#D9B1CB',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                OFERTA
              </Button>
            </ScrollLink>
            <ScrollLink className="bm-item" to="klienci_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="text"
                color="black"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '15px',
                  position: 'relative',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    borderColor: '#D9B1CB',
                    color: '#D9B1CB',
                    transform: 'scale(1.1)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#D9B1CB',
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom right',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::after': {
                    transform: 'scaleX(1)',
                    transformOrigin: 'bottom left',
                  },
                }}
              >
                KLIENCI
              </Button>
            </ScrollLink>
            <ScrollLink className="bm-item" to="kontakt_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outlined"
                color="black"
                sx={{
                  borderWidth: '2px',
                  borderImage: 'linear-gradient(to right, #6C2D9C, #feb47b) 1',
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
          </Menu>
        </div>
        <div className="header_navigation">
        <ScrollLink className="bm-item" to="obo_mnie_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
          <Button variant="text" color="black" sx={{
            fontWeight: "bold",
            fontSize: "15px",
            transition: "transform 0.3s ease",
            '&:hover': {
              borderColor: '#D9B1CB',
              color: "#D9B1CB",
              transform: "scale(1.1)",
            },
          }}>OBO MNIE</Button>
          </ScrollLink>
          <ScrollLink className="bm-item" to="portfolio_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
          <Button variant="text" color="black" sx={{
            fontWeight: "bold",
            fontSize: "15px",
            transition: "transform 0.3s ease",
            '&:hover': {
              borderColor: '#D9B1CB',
              color: "#D9B1CB",
              transform: "scale(1.1)",
            },
          }}>PORTFOLIO</Button>
          </ScrollLink>
          <ScrollLink className="bm-item" to="oferta_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
          <Button variant="text" color="black" sx={{
            fontWeight: "bold",
            fontSize: "15px",
            transition: "transform 0.3s ease",
            '&:hover': {
              borderColor: '#D9B1CB',
              color: "#D9B1CB",
              transform: "scale(1.1)",
            },
          }}>OFERTA</Button>
          </ScrollLink>
          <ScrollLink className="bm-item" to="klienci_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
          <Button variant="text" color="black" sx={{
            fontWeight: "bold",
            fontSize: "15px",
            transition: "transform 0.3s ease",
            '&:hover': {
              borderColor: '#D9B1CB',
              color: "#D9B1CB",
              transform: "scale(1.1)",
            },
          }}>KLIENCI</Button>
          </ScrollLink>
        </div>
        <div className="header_navigation2">
        <ScrollLink className="bm-item" to="kontakt_scroll" smooth={true} duration={500}  onClick={() => setIsMenuOpen(false)}>
          <Button variant="outlined" color="black"
            sx={{
              borderWidth: '2px',
              fontSize: "15px",
              padding: '15px 24px',
              fontWeight: 'bold',
              '&:hover': {
                color: "#D9B1CB",
                transform: "scale(1.1)",
              },
            }}>KONTAKT</Button>
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
            <img src={Laptop} alt="laptop" className="responsive-image" height={387} width={562} />
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
