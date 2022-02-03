import Image from "next/image";
import { ItemContact } from "./ItemContact";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="container-intro">
          <div className="intro">
            <p className="mot">Contact</p>
            <h6>
              Au tour de |<br /> Votre Projet
            </h6>
          </div>
          <div className="contact-info">
            <ul>
              {ItemContact.map((item, contact) => {
                return (
                  <li key={contact}>
                    <hr className="train-info" />

                    <div className="container-element-info">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={item.img}
                          alt={item.alt}
                          width="62"
                          height="62"
                          quality={100}
                        ></Image>
                      </a>
                      <div className="contact-primo">
                        <p className="info-title">{item.title}</p>
                        <h6 className="info-primo">{item.info}</h6>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="container-byen">
          <div className="container-element">
            <p className="hello">&#128075;&#127997; {""}Byen Bonjour !</p>
            <a
              href="https://wa.me/594694224717"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/button rond.svg"
                alt="Petit bouton pour voir l'ensemble des services "
                width="72"
                height="72"
                quality={100}
              ></Image>
            </a>
          </div>
        </div>
      </div>
      <div className="container-end">
        <hr className="trait-end" />
        <div className="container-h6">
          <p className="copy"> &copy; 2022 All Right Reserved</p>
          <h6>contact@primofrances.com</h6>
        </div>
      </div>
    </div>
  );
}
