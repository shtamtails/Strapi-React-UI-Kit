import { HeaderLogo } from "./HeaderLogo";
import { HeaderSearch } from "./HeaderSearch";

export const Header = ({ children }) => {
  return (
    <header>
      {children}
      <HeaderSearch />
    </header>
  );
};

Header.Logo = HeaderLogo;
