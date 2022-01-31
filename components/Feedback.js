import Image from "next/image";
import { ItemFeedback } from "./ItemFeedback";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function Feedback() {
  return (
    <div className="feedback">
      <div className="intro">
        <p className="mot">Témoignage</p>
        <h4>
          Feedback |<br /> Client{" "}
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
        <Swiper>
          {ItemFeedback.map((item, project) => {
            return (
              <SwiperSlide key={project} className="slide">
                <div className="container">
                  <hr className="trait1" />
                  <div className="img">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      layout="responsive"
                      width={64}
                      height={64}
                      quality={100}
                      className="img"
                    ></Image>
                  </div>
                  <div className="container-text">
                    <hr className="trait2" />
                    <p className="text">{item.feed}</p>
                  </div>
                  <div className="container-name">
                    <p className="name">{item.name}</p>
                    <div className="container-poste">
                      <hr />
                      <p className="poste">{item.poste}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
