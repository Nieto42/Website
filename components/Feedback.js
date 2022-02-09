import Image from "next/image";
import { ItemFeedback } from "./ItemFeedback";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

// const params = {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "bullets",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// };

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
            Nous aidons les entreprise de saint laurent du maroni a se
            digitaliser et résoudre leur probleme a travers des solution
            digitale et du consulting en marketing
          </p>
        </div>
      </div>
      <div className="feed">
        <Swiper
          // {...params}
          //       slidesPerView={1}
          centeredSlides={true}
          spaceBetween={150}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, A11y]}
          navigation
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
                      width={100}
                      height={100}
                      quality={100}
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
