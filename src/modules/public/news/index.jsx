import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import { NewsEvents } from "../../../utils/data";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function News() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <section className="event-box content-heading max-width">
      <div className="media-box">
        <div className="news-container">
          <h2 style={{ textAlign: "center" }}>News</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination,Autoplay]}
            className="mySwiper"
          >
            {NewsEvents.news.map((item, index) => (
              <SwiperSlide key={index}> 
                <div className="news-card">
                  <div className="news-img">
                    <img
                      src={item.link}
                      alt={item.paper}
                      className="slider-image"
                    />
                  </div>
                  <div className="news-details">
                    <h3 className="news-title">{item.paper}</h3>
                    <a className="news-date">{item.date}</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="events-box">
          <h2 className="events-heading">Events</h2>
          <div className="events-grid">
            {NewsEvents.events.map((item, index) => (
              <div
                className="events-card"
                key={index}
                onClick={() => openImage(item)}
              >
                <img src={item} alt={item} className="event-image" />
                <FaPlus className="plus-icon" />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className="modal" onClick={closeImage}>
              <div className="modal-content">
                <img
                  src={selectedImage}
                  alt="Full View"
                  className="full-image"
                />
                <FaTimes className="close-icon" onClick={closeImage} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
