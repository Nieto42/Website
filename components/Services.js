import Image from "next/image";
import { ItemService } from "../components/item/ItemService";

export default function Services() {
  return (
    <div className="services-container">
      <div className="title">
        <span className="mot">Service</span>
        <h2>Services | Offres</h2>
        <div className="caption">
          <hr />
          <p className="caption1">
            J’aide les entreprises de SLM qui souhaite générer plus de profils
            grâce aux digitales en élaborant des sites web, du contenus
            photos/videos et en générons du traffic web à partir des publicités
            en ligne.
          </p>
        </div>
        <div className="cta">
          <a
            href="https://wa.me/594694224717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/services/litle button rond.svg"
              alt="Petit bouton pour voir l'ensemble des services "
              width="92"
              height="92"
              quality={100}
            ></Image>
          </a>
        </div>
      </div>
      <div className="services">
        <ul className="services">
          {ItemService.map((item, index) => {
            return (
              <li key={index}>
                <hr />
                <div className="text">
                  <p className="number">{item.number}/</p>
                  <h3>{item.title}</h3>
                </div>

                <div className="more">
                  <p>En savoir plus</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-link"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width="54"
                      height="54"
                      quality={100}
                    ></Image>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
