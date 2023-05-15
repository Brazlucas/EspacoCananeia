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
import AlertDialogSlide from '../Dialog/index.js';

export default function Header() {
  const [isScroll, setIsScroll] = useState('');
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScroll('fixed');
    } else {
      setIsScroll('');
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <>
    <AlertDialogSlide
      open={open} handleClose={handleCloseModal}
    />
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
              to="carrossel"
              smooth
            >
              <span>Decoração</span>
            </Link>
          </HeaderItem>
          {/* <HeaderItem className={styles.headerMenuItem}>
            <Link
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
              duration={300}
              to="cardapio"
              smooth
              offset={-80}
            >
              <span>Cardápios</span>
            </Link>
          </HeaderItem> */}
          <HeaderItem className={styles.headerMenuItem}>
            <Link
              onClick={handleOpenModal}
              to='location'
              style={{color: '#fff', textDecoration: 'none', fontSize: '18px'}}
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
          <OutlinedAction
            className={styles.headerAction, styles.hiddeOnMobile}
          >
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
            <Link to='form'>
              <div style={{ background: '#E0B246', alignItems: 'center', padding: '5px', borderRadius: '2px', color: '#000'}}>
                <span>Orçamento</span>
              </div>
            </Link>
            <Link to=''>
              <AiOutlineMenu
                size={30}
                style={
                  {
                    border: '1px solid',
                    borderColor: '#E0B246',
                  }
                }
              />
            </Link>
          </IconsWrapper>
        </Items>
      </Container>
    </>
  );
}