// React
import React from "react";

// Components
import Logo from "../Logo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <nav>
        <Logo />
      </nav>
    </header>
  );
};

export default Header;
