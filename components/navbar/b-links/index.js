import Link from "next/link";

// nota: en la linea 8 podriamos desestructurar, pero no seria tan legible,
// para no repetir link.href o link.name
const Links = ({ links }) => (
  <div className="links-container">
    {links.map((link, i) => (
      <Link key={i} href={link.href}>
        <a>{link.name}</a>
      </Link>
    ))}

    <style jsx>
      {`
        .links-container {
          width: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }
        a {
          margin: 0 1em;
          color: white;
          font-weight: bold;
          font-size: 1.5em;
        }
        // ==================RESPONSIVE=========================
        @media (max-width: 800px) {
          .links-container {
            display: none;
          }
        }
      `}
    </style>
  </div>
);

export default Links;
