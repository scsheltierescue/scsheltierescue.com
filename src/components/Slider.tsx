import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

export interface Item {
  id: number;
  src: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function ReactSlickSlider({ items }: { items: Item[] }) {
  let settings = {
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
        {items.map(({ id, ...rest }) => <img key={id} {...rest} />)}
      </Slider>
    </div>
  );
}