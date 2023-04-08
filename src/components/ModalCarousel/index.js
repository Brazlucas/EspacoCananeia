import ImageGallery from 'react-image-gallery';
import itemData from './photosData';
import "react-image-gallery/styles/scss/image-gallery.scss";
import React from 'react';
import { useRef, useState, useEffect } from 'react';

export default function ModalCarousel() {
  const items = itemData();
  const [showFullscreenButton, setShowFullscreenButton] = useState(false);
  const imageGalleryRef = useRef(null);

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
      <div style={{ marginTop: '60px'}}>
        <ImageGallery
          ref={imageGalleryRef}
          onClick={toggleFullScreen}
          style={{ width: '50%', height: '50%' }}
          tHeight={items.thumbnailHeight}
          showBullets={true}
          infinite={true}
          autoPlay={true}
          showPlayButton={false}
          showFullscreenButton={showFullscreenButton}
          slideDuration={800}
          slideInterval={5000}
          items={items}
          thumbnailPosition='left'
        />
      </div>
    </>
  );
}