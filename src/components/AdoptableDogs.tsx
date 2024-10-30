import PetImageCard from '@components/PetImageCard';
import PetImageModal from '@components/PetImageModal';

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
  breeds: Record<string, any>;
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
  contact: Record<'address' | 'email' | 'phone', any>;
  published_at: string;
  distance: number | null;
  _links: Record<string, any>;
}

interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: Record<string, any>;
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

export interface PetUIContextPhoto {
  first: boolean;
  src: string;
  alt: string;
}

// TODO: Add `tags` to display on the UI
interface PetUIContext {
  options: PetUIContextOption[];
  photos: PetUIContextPhoto[];
  id: number;
  name: string;
  sex: string;
  petfinderUrl: string;
}

interface PetsUIContext {
  pets: PetUIContext[];
}

/* <Layout
  title="Available Dogs"
  description="List of SC Sheltie Rescue dogs available for adoption."
>
  <div class="row">
    <div class="large-12 medium-12 small-12 columns">
      <main role="main" class="main-content">
        <h2 class="headline first">Available for Adoption</h2>
        <p>You can view our available dogs below or on our <a href="https://www.petfinder.com/pet-search?animal_type=&pet_breed=&pet_age=&pet_size=&specialNeeds=&declawedPets=&children=&status=&shelter_pet_id=&internal=&contact=&name=&shelter_id=SC92&sort=" target="_blank">Petfinder site</a>. If you are interested in adopting one of our rescue dogs, please complete and submit our <a href="https://docs.google.com/forms/d/e/1FAIpQLSeWT2ExXhpCpz-K5fELnkeUzhv5jFynlBzkv3eXl7bRnoFjVw/viewform" target="_blank">Adoption Application <Icon name="external-link" title="external link" size=10 class="inline align-text-top" /></a> form. If you have any questions feel free to <a href="mailto:adopt@scsheltierescue.com">email</a> us.</p>

        <div id="pets" class="clearfix">
          {
            (isGetAnimalsError) ?
              <div id="petfinder-api-error" data-alert class="alert-box alert">
                <p>
                  Oops, something went wrong! Please try again later or go directly to our <a href="http://www.petfinder.com/pet-search?shelterid=SC92">Petfinder site</a>.
                  <a href="#" class="close">&times;</a>
                </p>
              </div> :
              (context.pets && context.pets.length) ?
                context.pets.map((pet) => {
                  return (
                    <div class="pet-box clearfix panel">
                      <div class="clearfix pet-header">
                        <h2 class="pet-name"><span class="label">{pet.name}</span></h2>
                        <ul class="options">
                          {
                            pet.options.map((option) => (option.icon) ?
                              <li>
                                <span>{option.text} <Icon name="check-bold" title="bold check mark" size=24 class="inline" /></span>
                              </li> :
                              <li>
                                <strong>{option.text}</strong>
                              </li>
                            )
                          }
                        </ul>
                      </div>
                      <div class="clearfix pet-body">
                        <PetImageCard
                          photos={pet.photos}
                        />
                        <div class="petfinder-link">
                          <a href={pet.petfinderUrl} target="_blank">{pet.name}'s Petfinder page <Icon name="external-link" title="external link" size=10 class="inline align-text-top" /></a>
                        </div>
                      </div>
                    </div>
                  )
                }) :
                <div class="alert-box" data-alert>
                  <p>There are currently no available dogs</p>
                </div>
          }
        </div>
        <!-- <div id="spinner" class="loading_spinner">
          <svg class="circular">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
        </div> -->

        <!-- TODO: Get the View More logic working again -->
        {
          showLoadMoreBtn &&
          <AdoptableDogs client:only="react" />
        }
        <!-- {
          showLoadMoreBtn &&
          <LoadMoreBtn
            GET_ANIMALS={GET_ANIMALS}
            refreshAuthToken={refreshAuthToken}
          />
        } -->
        <!-- {
          showLoadMoreBtn &&
          <view-more-btn>
            <input id="btnMore" type="button" class="large button expand" value="Load More" />
          </view-more-btn>
        } -->
      </main>
    </div>
  </div>

  <PetImageModal />
</Layout> */

interface IComponentProps {
  token: string | undefined;
}

interface IState {
  pets: PetUIContext[];
  page: number;
  isLoading: boolean;
  errorMsg: string;
  isModalOpen: boolean;
  selectedImage: string | null;
  showLoadMoreBtn: boolean;
}

const formatPet = (pet: SCSRAnimal): PetUIContext => {
  const { id, name, gender, url, photos, attributes, environment } = pet;
  const options: PetUIContextOption[] = [];

  Object.entries(attributes).forEach(([key, value]) => {
    const option = formatOptionListItem(key as keyof SCSRAnimal['attributes'], value, gender);
    if (option) options.push(option);
  });

  Object.entries(environment).forEach(([key, value]) => {
    if (value === false) {
      const option = formatOptionListItem(key as keyof SCSRAnimal['environment'], true, gender);
      if (option) options.push(option);
    }
  });

  options.sort((a, b) => a.order - b.order);

  const petPhotos = photos.map((photo, idx) => ({
    first: idx === 0,
    src: photo.large,
    alt: `${name} ${idx + 1}`,
  }));

  return {
    id,
    name,
    sex: gender,
    petfinderUrl: url,
    options,
    photos: petPhotos,
  };
}

const formatOptionListItem = (
  option: keyof SCSRAnimal['attributes'] | keyof SCSRAnimal['environment'],
  value: boolean | null,
  gender: SCSRAnimal['gender']
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
}

const AdoptableDogs: React.FC<IComponentProps> = ({ token }) => {
  const [pets, setPets] = useState<PetUIContext[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);

  useEffect(() => {
    debugger;
 
    const loadPets = async () => {
      const shelterId = 'SC92';
      const status = 'adoptable';
      const limit = 10;
  
      setIsLoading(true);
  
      try {
        debugger;
  
        const headers = { Authorization: `Bearer ${token}` };
        const params = `?organization=${shelterId}&status=${status}&page=${page}&limit=${limit}`;
        const url = `https://api.petfinder.com/v2/animals${params}`;
  
        const response = await fetch(url, { method: 'GET', headers });
        console.log('get animals response ', response);
        debugger;
  
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
  
        const data = await response.json() as SCSRAnimals;

        // if (data.animals.length === 0) {
        //   setErrorMsg('There are currently no available dogs.');
        // }

        const formattedPets = data.animals.map((pet) => formatPet(pet));
  
        setPets(prevPets => [...prevPets, ...formattedPets]);
        setErrorMsg('');
  
        console.log('DATA PAGINATION: ', data.pagination);
        debugger;
        if (data.pagination?.current_page < data.pagination?.total_pages) {
          setShowLoadMoreBtn(true);
        } else {
          setShowLoadMoreBtn(false);
        }
      } catch (error) {
        debugger;
        console.error('Error making data request:', error);
        setErrorMsg(`Error making data request: ${error}`);
      } finally {
        debugger;
        setIsLoading(false);
      }
    };
    
    loadPets();
  }, [page]);

  const handleImageClick = (image: string) => {
    debugger;
    setIsModalOpen(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    debugger;
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const loadMore = () => setPage(prevPage => prevPage + 1);

  return (
    <div className="main-section">
      {pets.map((pet, i) => (
        <div className="pet-box clearfix panel" key={i}>
          <div className="clearfix pet-header">
            <h2 className="pet-name"><span className="label">{pet.name}</span></h2>
            <ul className="options">
              {pet.options.map((option, i) => ((option.icon) ?
                <li key={i}>
                  <span>{option.text}</span>
                  {/*
                    `astro-icon` doesn't work in framework components. Manually injecting SVG instead.
                    SEE: https://www.astroicon.dev/guides/components/#usage-with-framework-components
                  */}
                  <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline">
                    <path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"/>
                  </svg>
                </li> :
                <li key={i}>
                  <strong>{option.text}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="clearfix pet-body">
            <PetImageCard
              photos={pet.photos}
              onImageClick={handleImageClick}
            />
            <div className="petfinder-link">
              {/*
                `astro-icon` doesn't work in framework components. Manually injecting SVG instead.
                SEE: https://www.astroicon.dev/guides/components/#usage-with-framework-components
              */}
              <a href={pet.petfinderUrl} target="_blank" rel="noopener noreferrer">
                {pet.name}'s Petfinder page
                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="inline align-text-top">
                  <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}

      {!isLoading && !pets.length && !errorMsg && (
        <div className="alert-box" data-alert>
          <p>There are currently no available dogs</p>
        </div>
      )}

      {isLoading && (
        <div id="spinner" className="loading_spinner">
          <svg className="circular">
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
        </div>
      )}

      {errorMsg && (
        <div id="petfinder-api-error" data-alert className="alert-box alert">
          <p>Oops, something went wrong! Please try again later or go directly to our <a href="https://www.petfinder.com/pet-search?shelterid=SC92">Petfinder site</a>.</p>
        </div>
      )}

      {showLoadMoreBtn && (
        <input
          id="btnMore"
          onClick={loadMore}
          type="button"
          className={`large button expand ${errorMsg ? 'invisible' : ''}`}
          value={isLoading ? 'Loading...' : 'View More'}
        />
      )}

      {selectedImage && (
        <PetImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default AdoptableDogs;
