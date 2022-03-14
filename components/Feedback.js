import Image from "next/image";
import { ItemFeedback } from "../components/item/ItemFeedback";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

export default function Feedback() {
  return (
    <div className="feedback">
      <div className="intro">
        <p className="mot">Témoignage</p>
        <h4>
          Feedback <br /> Client{" "}
        </h4>
        <div className="caption">
          <hr />
          <p className="caption1">
            Nous aidons les entreprises de Saint Laurent du Maroni à se
            digitaliser, surmonter leur probleme à travers des solutions
            digitales et du consulting en web marketing.
          </p>
        </div>
      </div>

      <div className="feed">
        <div className="arrow-nav-swiper">
          <button className="swiper-button-prev">
            <Image
              src="/feed/Arrow down.svg"
              alt="icon fleche pour voir les commentaires a gauche"
              loading="lazy"
              layout="fixed"
              width={52}
              height={48}
            />
          </button>
          <button className="swiper-button-next">
            <Image
              src="/feed/Arrow up.svg"
              alt="icon fleche pour voir les commentaires a gauche"
              loading="lazy"
              layout="fixed"
              width={52}
              height={48}
            />
          </button>
        </div>
        <Swiper
          // {...params}
          //       slidesPerView={1}
          centeredSlides={true}
          spaceBetween={150}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, A11y, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false,
          }}
          className="swiper-class"
        >
          {ItemFeedback.map((item, project) => {
            return (
              <SwiperSlide key={project} className="slide">
                <div className="container">
                  <div className="img">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      layout="responsive"
                      loading="lazy"
                      height={100}
                      width={100}
                      quality={90}
                      className="imge"
                    ></Image>
                    <span className="fond"></span>
                  </div>
                  <div className="container-teste">
                    <hr className="trait1" />
                    <div className="container-text">
                      <p className="text">{item.feed}</p>
                    </div>
                    <div className="container-name">
                      <p className="name">{item.name}</p>
                      <div className="container-poste">
                        <hr className="poste-trait" />
                        <p className="poste">{item.poste}</p>
                      </div>
                    </div>
                    <hr className="end-trait" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
