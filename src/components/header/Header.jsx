import React from "react";
import {Link} from "react-router-dom";
import { HeaderContainer, Image } from "../header/Header-style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
      <Image src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
