import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import Image from "next/image";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#8873EF",
  // iconSize: 100,
  "&:hover": {
    backgroundColor: "#8873EF",
  },
}));

export default function Homesection() {
  return (
    <div className="home">
      <div className="mot">
        <p>Hello!</p>
      </div>
      <cite>
        "Un service complet et de proximité pour les entrepreuneurs de SLM"
      </cite>

      <h1>Webmarketing de proximité pour les TPE et PME</h1>
      <div className="caption">
        <hr></hr>
        <p className="caption1">
          Oi ! je suis webmaster - créateur de site web, d'interface UX/UI
          Design et de publicité en ligne sur Saint Laurent Du Maroni
        </p>
      </div>
      <ColorButton
        size="large"
        endIcon={
          <Image
            src="/icon send message.svg"
            alt="Logo linkedin primo frances "
            width="24"
            height="24"
            quality={100}
          ></Image>
        }
      >
        Discuton<br></br>Ensemble
      </ColorButton>
      <div className="scroolContainer">
        <p>Scrool vers le bas</p>
        <hr className="scrool1" />
        <hr className="scrool2" />
      </div>
    </div>
  );
}
