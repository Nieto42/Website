import Image from "next/image";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#8873EF",
  "&:hover": {
    backgroundColor: "#8873EF",
  },
}));

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">
        <div className="img">
          <Image
            src="/icon primo frances.svg"
            alt="Logo primo frances "
            width="42"
            height="42"
            className="logo"
            quality={100}
          ></Image>
        </div>
        <p>
          Primo <br></br> Frances{" "}
        </p>
      </div>

      <a href=" https://wa.me/594694224717" target="_blank">
        <ColorButton
          variant="contained"
          startIcon={<WhatsAppIcon></WhatsAppIcon>}
          className="btn"
        >
          Contactez
        </ColorButton>
      </a>
    </nav>
  );
}
