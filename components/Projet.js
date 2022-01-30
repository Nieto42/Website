import Image from "next/image";

export default function Projet() {
  return (
    <div className="projet">
      <div className="cta-top">
        <div className="button-cta">
          <Image
            src="/Projet/button projet.svg"
            alt="bouton cta projet primo frances"
            width=" 100"
            height="100"
            quality={100}
          ></Image>
        </div>
      </div>
      <div className="intro">
        <h2>Réalisation | Projet </h2>
      </div>
    </div>
  );
}
