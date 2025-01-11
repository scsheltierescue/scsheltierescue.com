import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const ReactSlickSlider: React.FC<ReactSlickSliderProps> = ({ items }) => {
  const settings = {
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
        {items.map(({ id, ...rest }) => (
          <img key={id} {...rest} />
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlickSlider;
