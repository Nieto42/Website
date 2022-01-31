import Image from "next/image";
import { ItemPro } from "./ItemPro";

export default function Projet() {
  return (
    <div className="projet">
      <div className="cta-top">
        <div className="button-cta">
          <a
            href="https://wa.me/594694224717"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Projet/button projet.svg"
              alt="bouton cta projet primo frances"
              width=" 120"
              height="120"
              quality={100}
            ></Image>
          </a>
        </div>
      </div>
      <div className="intro">
        <p className="mot">Projets</p>
        <h2>Réalisation | Projet </h2>
      </div>
      <div className="container-projet">
        <ul>
          {ItemPro.map((item, pro) => {
            return (
              <li key={pro} className="container-title">
                <hr />
                <div className="info">
                  <div className="descriptif">
                    <h5>{item.company}</h5>
                    <p>{item.descrip}</p>
                  </div>
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
