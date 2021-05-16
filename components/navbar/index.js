import Logo from "./a-logo";
import Links from "./b-links";
import MenuBurger from "./c-menu-burger";

// Este array lo lo envio como prop al componente: <Links /> y <MenuBurger />
// para utilizar .map y hacer dinamico todo.
const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Books",
    href: "/books",
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Links links={links} />
      <MenuBurger links={links} />
      <style jsx>{`
        .navbar {
          width: 100vw;
          position: fixed;
          top: 0;
          padding: 1em 2em;
          display: flex;
          justify-content: center;
          background: #1c1c1c;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
