import {
  // Action,
  Container,
  HeaderItem,
  Items,
  OutlinedAction,
  Logo,
  IconsWrapper
} from './Header.styles.js';
import styles from '../../styles/Home.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from 'react';
import { AiFillCalculator, AiOutlineWhatsApp } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header() {
  const [isScroll, setIsScroll] = useState('');
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScroll('fixed');
    } else {
      setIsScroll('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <>
      <Container className={`${isScroll}`}>
        <a href="https://espacocananeia.com">
          <Logo src="images/logo.png" alt="espaço cananéia"></Logo>
        </a>
        <Items className={styles.hiddeOnMobile}>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={200}
              to="espaco"
              smooth
              offset={-120}
            >
              <span>O espaço</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="benefits"
              smooth
            >
              <span>Serviços | Galeria</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="data"
              smooth
            >
              <span>Decoração</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="clients"
              smooth
            >
              <span>Serviços de Buffet</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="cardapio"
              smooth
              offset={-80}
            >
              <span>Cardápios</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="location"
              smooth
            >
              <span>Localização</span>
            </Link>
          </HeaderItem>
          <HeaderItem className={styles.headerMenuItem}>
            <a 
              href="https://wa.me/5511998992034"
              target="_blank"
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
            >
              <span style={{marginRight: '5px'}}>(11) 99899-2034 <AiOutlineWhatsApp /></span>
            </a>
          </HeaderItem>
        </Items>
        <Items>
          <OutlinedAction className={styles.headerAction, styles.hiddeOnMobile}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              to="contact"
              smooth
              duration={300}
              offset={-260}
            >
              Fale com a gente
            </Link>
          </OutlinedAction>
        </Items>
        <Items className={styles.hiddenOnDesktop}>
        <IconsWrapper>
          <AiFillCalculator 
              size={30}
              style={
                {
                  border: '1px solid',
                  borderColor: '#E0B246',
                }
              }
            />
            <AiOutlineMenu
              size={30}
              style={
                {
                  border: '1px solid',
                  borderColor: '#E0B246',
                }
              }
            />
        </IconsWrapper>
        </Items>
      </Container>
    </>
  );
}