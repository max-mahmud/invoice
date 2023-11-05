import Link from "next/link";
import ThemeLink from "./ThemeLink";

const Navbar = () => {
  return (
    <nav className="bg-violet-600 py-[6px] fixed w-full shadow z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-3xl font-bold">
            Invoicer
          </Link>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="/">Pricing</Link>
            </li>
            <li>
              <Link href="/">Feature</Link>
            </li>
            <li>
              <Link href="/">Free Tools</Link>
            </li>
          </ul>
          <ul className="flex items-center space-x-4 text-white">
            <li>
              <ThemeLink name={"Login"} toLink="/" color="n" />
            </li>
            <li>
              <ThemeLink name={"Register"} toLink="/gg"  />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
