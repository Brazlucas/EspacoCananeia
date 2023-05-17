import ImageGallery from 'react-image-gallery';
import itemData from './photosData';
import "react-image-gallery/styles/scss/image-gallery.scss";
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Carousel } from './Carousel.styles';
import { useMediaQuery } from 'react-responsive';

export default function ModalCarousel() {
  const items = itemData();
  const [showFullscreenButton, setShowFullscreenButton] = useState(false);
  const imageGalleryRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleFullScreen = () => {
    return imageGalleryRef.current.fullScreen();
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (document.fullscreenElement) {
        setShowFullscreenButton(true);
      } else {
        setShowFullscreenButton(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  return (
    <>
      <Carousel id="carrossel" style={{ marginTop: '50px' }}>
        <ImageGallery
          ref={imageGalleryRef}
          onClick={toggleFullScreen}
          tHeight={items.thumbnailHeight}
          infinite={true}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={showFullscreenButton}
          slideDuration={800}
          slideInterval={5000}
          items={ isMobile ? items.itemMobileHeight : items.itemDesktopHeight }
          showThumbnails={ isMobile ? false : true }
          originalHeight={5}
        />
      </Carousel>
    </>
  );
}