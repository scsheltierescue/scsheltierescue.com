import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Settings } from 'react-slick';

export interface Item {
  id: number;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface ReactSlickSliderProps {
  items: Item[];
}

export default function ReactSlickSlider({ items }: ReactSlickSliderProps) {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    easing: 'linear',
    fade: true,
    focusOnSelect: true,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map(({ id, alt = '', ...rest }) => (
          <img key={id} alt={alt} loading="lazy" {...rest} />
        ))}
      </Slider>
    </div>
  );
}
