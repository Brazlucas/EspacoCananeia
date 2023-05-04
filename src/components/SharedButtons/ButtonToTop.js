import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowDropUp from '@mui/icons-material/ArrowDropUp';
import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default function ButtonToTop() {
  const [showButton, setShowButton] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[600],
      },
    },
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <>
      <Link
        duration={300}
        to="banner"
        smooth
        offset={-120}
      >
        <Box sx={{
          position: 'fixed',
          opacity: showButton ? 1 : 0,
          pointerEvents: showButton ? 'auto' : 'none',
          transition: 'opacity 0.6s ease-in-out',
          bottom: '100px',
          right: '35px',
          zIndex: 9999,
          '& > :not(style)': { m: 1 }
        }}>
          <Fab size="small" theme={theme} color="primary" aria-label="add">
            <ArrowDropUp />
          </Fab>
        </Box>
      </Link>
    </>
  )
}