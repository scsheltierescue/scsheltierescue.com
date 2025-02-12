import 'src/styles/global.css';

import LoadingSpinner from '@components/LoadingSpinner';
import ImageGallery from '@components/ImageGallery';

import React, { useState, useEffect } from 'react';

interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

interface Video {
  embed: string;
}

interface SCSRAnimal {
  id: number;
  organization_id: 'SC92';
  organization_animal_id: null;
  url: string;
  type: 'Dog';
  species: 'Dog';
  breeds: Record<string, unknown>;
  colors: Record<'primary' | 'secondary' | 'tertiary', string | null>;
  age: string;
  gender: string;
  size: string;
  coat: string;
  name: string;
  description: string;
  photos: Photo[];
  primary_photo_cropped: Photo;
  videos: Video[];
  status: string;
  status_changed_at: string;
  attributes: Record<'spayed_neutered' | 'house_trained' | 'declawed' | 'special_needs' | 'shots_current', boolean | null>;
  environment: Record<'children' | 'dogs' | 'cats', boolean | null>;
  tags: string[];
  contact: Record<'address' | 'email' | 'phone', unknown>;
  published_at: string;
  distance: number | null;
  _links: Record<string, unknown>;
}

interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: Record<string, unknown>;
}

interface SCSRAnimals {
  animals: SCSRAnimal[];
  pagination: Pagination;
}

interface PetUIContextOption {
  text: string;
  icon?: boolean;
  order: number;
}

interface PetUIContext {
  tags: string[];
  options: PetUIContextOption[];
  photos: string[];
  id: number;
  name: string;
  sex: string;
  petfinderUrl: string;
}

const formatPet = (pet: SCSRAnimal): PetUIContext => {
  const { id, name, gender, url, photos, attributes, environment } = pet;
  const options: PetUIContextOption[] = [];

  Object.entries(attributes).forEach(([key, value]) => {
    const option = formatOptionListItem(key as keyof SCSRAnimal['attributes'], value, gender);

    if (option) {
      options.push(option);
    }
  });

  Object.entries(environment).forEach(([key, value]) => {
    if (value === false) {
      const option = formatOptionListItem(key as keyof SCSRAnimal['environment'], true, gender);

      if (option) {
        options.push(option);
      }
    }
  });

  options.sort((a, b) => a.order - b.order);

  return {
    id,
    name,
    sex: gender,
    petfinderUrl: url,
    tags: pet.tags.filter((str) => str.trim() !== ''),
    options,
    photos: photos.map((photo) => photo.large),
  };
};

/* eslint-disable camelcase */
const formatOptionListItem = (
  option: keyof SCSRAnimal['attributes'] | keyof SCSRAnimal['environment'],
  value: boolean | null,
  gender: SCSRAnimal['gender'],
): PetUIContextOption | null => {
  const optionMapping: Record<string, { text: string; icon?: boolean; order: number }> = {
    spayed_neutered: {
      text: gender === 'Male' ? 'Neutered' : gender === 'Female' ? 'Spayed' : 'Spayed/Neutered',
      icon: true,
      order: 2,
    },
    shots_current: { text: 'Shots Current', icon: true, order: 3 },
    house_trained: { text: 'Housetrained', icon: true, order: 4 },
    special_needs: { text: 'Special Needs', order: 1 },
    children: { text: 'No Kids', order: 5 },
    cats: { text: 'No Cats', order: 6 },
    dogs: { text: 'No Dogs', order: 7 },
  };
  const config = optionMapping[option];

  return value && config ? { ...config, text: config.icon ? `${config.text}: ` : config.text } : null;
};
/* eslint-enable camelcase */

const TagList = ({ tags }: { tags: string[] }) => (
  tags.map((tag, i) => (
    <span
      key={i}
      className="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-indigo-50 text-indigo-700 ring-indigo-700/10"
    >
      {tag}
    </span>
  ))
);

const OptionsList = ({ options }: { options: PetUIContextOption[] }) => (
  options.map((option, i) => {
    if (option.icon) {
      return (
        <li key={i} className="sm:inline sm:after:content-['|'] sm:after:mx-1 sm:last:after:content-none">
          <span>{option.text}</span>
          {/*
            `astro-icon` doesn't work in framework components. Manually injecting SVG instead.
            SEE: https://www.astroicon.dev/guides/components/#usage-with-framework-components
          */}
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline">
            <path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"/>
          </svg>
        </li>
      );
    }

    return (
      <li key={i} className="sm:inline sm:after:content-['|'] sm:after:mx-1 sm:last:after:content-none">
        <strong>{option.text}</strong>
      </li>
    );
  })
);

const AdoptableDogs: React.FC = () => {
  const [pets, setPets] = useState<PetUIContext[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  useEffect(() => {
    const loadPets = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`/api/petfinder?page=${page}`);

        console.log('get animals response ', response);

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json() as SCSRAnimals;
        const formattedPets = data.animals.map((pet) => formatPet(pet));

        setPets((prevPets) => [...prevPets, ...formattedPets]);
        setErrorMsg('');

        console.log('DATA PAGINATION: ', data.pagination);

        if (data.pagination?.current_page < data.pagination?.total_pages) {
          setShowLoadMoreBtn(true);
        } else {
          setShowLoadMoreBtn(false);
        }
      } catch (error) {
        console.error('Error making data request:', error);
        setErrorMsg(`Error making data request: ${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadPets();
  }, [page]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  return (
    <div className="main-section">
      {pets.map((pet, i) => (
        <div className="p-1 mx-0 mt-0 mb-5 border border-solid border-stone-300 bg-neutral-200 text-zinc-800" key={i}>
          <div className="pet-header">
            <h2 className="pet-name w-full flex justify-center items-center text-center uppercase"><span className="max-w-full inline-block text-3xl sm:text-4xl md:text-5xl font-normal leading-none mb-auto relative text-center text-ellipsis no-underline overflow-hidden whitespace-nowrap px-2 py-1 bg-primary-c text-zinc-100 shadow-md">{pet.name}</span></h2>
            <div className="flex flex-wrap justify-center items-center mx-0 mt-0 mb-2 space-x-1 sm:space-x-2">
              <TagList
                tags={pet.tags}
              />
            </div>
            <ul className="options list-none mx-0 mt-0 mb-2.5 text-xs md:text-base text-center">
              <OptionsList
                options={pet.options}
              />
            </ul>
          </div>
          <div className="pet-body">
            <ImageGallery
              thumbnail={pet.photos[0]}
              images={pet.photos}
            />
            <div className="text-center mx-0 my-2.5">
              {/*
                `astro-icon` doesn't work in framework components. Manually injecting SVG instead.
                SEE: https://www.astroicon.dev/guides/components/#usage-with-framework-components
              */}
              <a href={pet.petfinderUrl} target="_blank" rel="noopener noreferrer">
                {pet.name}&apos;s Petfinder page
                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline align-text-top">
                  <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}

      {!isLoading && !pets.length && !errorMsg && (
        <div className="border border-solid block font-normal mb-5 p-3 relative bg-primary-c border-primary-c-darker text-zinc-100">
          <p className="mb-0">There are currently no available dogs</p>
        </div>
      )}

      {isLoading && <LoadingSpinner />}

      {errorMsg && (
        <div className="border border-solid block font-normal mb-5 p-3 relative bg-error-c border-error-c-darker text-zinc-100">
          <p className="mb-0">Oops, something went wrong! Please try again later or go directly to our <a className="text-purple-950 hover:text-purple-950 focus:text-purple-950" href="https://www.petfinder.com/pet-search?shelterid=SC92">Petfinder site</a>.</p>
        </div>
      )}

      {showLoadMoreBtn && (
        <input
          onClick={loadMore}
          type="button"
          className={`text-base p-4 w-full appearance-none rounded-none border-solid border-0 cursor-pointer font-normal leading-5 mb-5 relative text-center no-underline inline-block bg-primary-c hover:bg-primary-c-darker focus:bg-primary-c-darker text-zinc-100 transition-colors ${errorMsg ? 'invisible' : ''}`}
          value={isLoading ? 'Loading...' : 'View More'}
        />
      )}
    </div>
  );
};

export default AdoptableDogs;
