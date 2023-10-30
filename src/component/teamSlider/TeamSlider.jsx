import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { image } from "../../assets/img/img";
import { Swiper, SwiperSlide } from "swiper/react";
import { team } from "../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./TeamSlider.css";

const TeamSlider = () => {
  return (
    <div className="team-slider-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper" // Add a custom class name for styling
      >
        {team.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="slideTestimonial">
              <img src={t.img} alt="" />
              <p>{t.name}</p>
              <p>{t.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
