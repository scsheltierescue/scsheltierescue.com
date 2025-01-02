import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

// Plugins
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface ImageGalleryProps {
  thumbnail: string;
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ thumbnail, images }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Transform images into Lightbox-compatible format
  const slides = images.map((src) => ({ src }));

  return (
    <div className="flex justify-center items-center m-2 sm:mx-6 md:mx-16 md:my-4 lg:mx-32">
      {/* Thumbnail Image */}
      <img
        className='cursor-pointer rounded-lg shadow-lg duration-300 hover:opacity-85'
        src={thumbnail}
        onClick={() => setIsOpen(true)}
      />

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          slides={slides}
          open={isOpen}
          close={() => setIsOpen(false)}
          plugins={[Counter, Thumbnails, Zoom]}
        />
      )}
    </div>
  );
};

export default ImageGallery;