import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clientReview } from "../../utils/data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ClientSlider.css";

function ClientSlider() {
  return (
    <div className="Client-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
      >
        {clientReview.map((r) => (
          <>
            <SwiperSlide key={r.id}>
              <div className="ClientSlideCard">
                <h2>{r.name} </h2>
                <div className="ratingIcon">
                  <ul className="ratingIconUl">
                    {r.rating.map((s) => (
                      <>
                        <li>
                          <img src={s} alt="" />
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <hr />
                <p>{r.description}</p>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientSlider;
