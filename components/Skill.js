import Image from "next/image";
import { ItemSkill } from "./../components/item/ItemSkill";
import { ItemExp } from "../components/item/ItemExp";

export default function Skill() {
  return (
    <div className="skill-exp">
      <div className="skill">
        <p className="mot">Expérience</p>
        <h2>
          Skill |<br /> Expérience
        </h2>
        <div className="caption">
          <hr />
          <p className="caption1">
            Spécialiste en marketing digital. Passionnez de résoudre les
            problèmes en proposant des solutions web adapté et un service de
            proximité sur Saint Laurent Du Maroni
          </p>
        </div>
        <div className="item-skill">
          <h4>Skill</h4>
          <div className="item-container">
            <ul>
              {ItemSkill.map((item, key) => {
                return (
                  <li key={key}>
                    <div className="img">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        width="64"
                        height="64"
                        quality={100}
                      ></Image>
                      <h3>{item.title}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="exp-container">
        <h3>Expérience </h3>
        <div className="exp">
          <ul>
            {ItemExp.map((item, exp) => {
              return (
                <li key={exp} className="container-etude">
                  <hr />
                  <div className="info">
                    <p className="date">{item.date}</p>
                    <div className="name">
                      <h4>{item.title}</h4>
                      <p className="company">{item.company}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="container-img">
          <div className="img-button">
            <div className="background">
              <Image
                src="/skill/background blue.svg"
                alt="background image primo frances"
                width="240"
                height="240"
                quality={100}
              ></Image>
            </div>
            <div className="foto">
              <Image
                src="/skill/CTA primo like.png"
                alt="background image primo frances"
                width="500"
                height="500"
                quality={100}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
