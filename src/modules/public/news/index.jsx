import "./styles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig.js";

export default function News() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [newsList, setNewsList] = useState([]);
  const [eventImages, setEventImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsSnapshot = await getDocs(collection(db, "news"));
        const newsData = newsSnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => {
            const dateA = a.createdAt?.toDate?.() || new Date(0);
            const dateB = b.createdAt?.toDate?.() || new Date(0);
            return dateB - dateA; // Newest first
          });
        setNewsList(newsData);

        const querySnapshot = await getDocs(collection(db, "event"));
        const imageData = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => {
            const dateA = a.createdAt?.toDate?.() || new Date(0);
            const dateB = b.createdAt?.toDate?.() || new Date(0);
            return dateB - dateA; // Newest first
          });
        setEventImages(imageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  const chunkArray = (array, chunks) => {
    const result = [];
    const size = Math.ceil(array.length / chunks);
    for (let i = 0; i < chunks; i++) {
      result.push(array.slice(i * size, (i + 1) * size));
    }
    return result;
  };

  const eventChunks = chunkArray(eventImages, 3);

  return (
    <section className="event-box content-heading max-width">
      <div className="media-box">
        {/* NEWS SECTION */}
        <div className="news-container">
          <h2 style={{ textAlign: "center" }}>News</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              "@0.00": { slidesPerView: 1, spaceBetween: 10 },
              "@0.75": { slidesPerView: 2, spaceBetween: 20 },
              "@1.00": { slidesPerView: 3, spaceBetween: 40 },
              "@1.50": { slidesPerView: 4, spaceBetween: 50 },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {newsList.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="news-card">
                  <div className="news-img">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="slider-image"
                      onClick={() => openImage(item.imageUrl)}
                    />
                  </div>
                  <div className="news-details">
                    <h3 className="news-title">{item.title}</h3>
                    <a className="news-date">{item.date}</a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* EVENTS SECTION */}
        <div className="events-box">
          <h2 className="events-heading">Events</h2>

          {eventChunks.map((chunk, index) => (
            <div key={index} className="event-swiper-wrapper">
              <h4 style={{ textAlign: "center" }}>Event Gallery {index + 1}</h4>
              <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  "@0.00": { slidesPerView: 1, spaceBetween: 10 }, // Mobile
                  "@0.75": { slidesPerView: 2, spaceBetween: 15 }, // Tablet
                  "@1.00": { slidesPerView: 3, spaceBetween: 20 }, // Desktop
                  "@1.50": { slidesPerView: 4, spaceBetween: 30 }, // Larger desktops
                }}
                className="eventSwiper"
              >
                {chunk.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="events-card"
                      onClick={() => openImage(item.imageUrl)}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`event-${idx}`}
                        className="event-image"
                      />
                      <FaPlus className="plus-icon" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}

          {/* MODAL */}
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
