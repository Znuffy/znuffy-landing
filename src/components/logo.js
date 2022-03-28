/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import logo from "../assets/logo/Znuffy.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image src={logo} width="150" height="100" alt="startup landing logo" />
    </Link>
  );
}
