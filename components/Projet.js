import Image from "next/image";
import { ItemPro } from "./../components/item/ItemPro";

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
                <div className="img-container">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <Image
                      src={item.imagePro}
                      alt={item.altPro}
                      layout="responsive"
                      width={612.5}
                      height={457.5}
                      quality={100}
                    ></Image>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="button-project">
          <a
            href="https://wa.me/594694224717?text=J'aimerais%20voir%20les%20projets%20déja%20réalisés"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Projet/button voir tous les projets.svg"
              alt="bouton pour voir tous les projets"
              width={100}
              height={100}
              quality={100}
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
}
