import React from 'react';
import 'src/styles/PetImageCard.css';

import type { PetUIContextPhoto } from '@components/AdoptableDogs';

interface PetImageCardProps {
  photos: PetUIContextPhoto[];
  onImageClick: (image: string) => void;
}

const PetImageCard: React.FC<PetImageCardProps> = ({ photos, onImageClick }) => {
  const numPhotos = photos.length;

  return (
    <div className="petfinder-photos px-5">
      <ul className="petfinder-photo-ul m-0">
        {
          photos.map((photo, idx) =>
            <li key={idx} className="petfinder-photo-li">
              <img
                onClick={() => onImageClick(photo.src)}
                data-pet-img
                className={`petfinder-photo-img p-2 rounded-lg cursor-pointer duration-300 hover:opacity-70 ${((numPhotos === 3) && (idx + 1 === numPhotos)) ? 'object-contain' : 'object-cover'}`}
                src={photo.src}
                alt={photo.alt}
              />
            </li>
          )
        }
      </ul>
    </div>
  );
};

export default PetImageCard;