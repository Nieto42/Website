import Image from "next/image";

export default function Media() {
  return (
    <div className="media">
      <p className="call-action">Jettez un oeil</p>
      <div className="icontact">
        <div className="rs">
          <Image
            src="/linkedin img primo.svg"
            alt="Logo linkedin primo frances "
            width="72"
            height="72"
            className="logo"
            quality={100}
          ></Image>
        </div>
        <div className="rs">
          <Image
            src="/instagram img primo.svg"
            alt="Logo instagram primo frances "
            width="72"
            height="72"
            className="logo"
            quality={100}
          ></Image>
        </div>
        <div className="rs">
          <Image
            src="/whatzaap img.svg"
            alt="Logo whatzaap primo frances slm "
            width="72"
            height="72"
            className="logo"
            quality={100}
          ></Image>
        </div>
      </div>
    </div>
  );
}
