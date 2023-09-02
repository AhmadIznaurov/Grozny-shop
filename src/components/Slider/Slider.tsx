import React, {  useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



export const Slider: React.FC = ({item}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='slider_container'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={5}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        direction={'horizontal'}
        initialSlide={0}
        width={900}
        effect={'slide'}
        loop={false}
      >
        <SwiperSlide>
          <img src={item.largeImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={9}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        setWrapperSize={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={item.largeImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_4} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
