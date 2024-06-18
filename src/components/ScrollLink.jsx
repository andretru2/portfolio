import { Link } from 'react-scroll';

export default function ScrollLink({ children, to }) {
  return (
    <Link
      href="/"
      to={to}
      activeClass="bg-bottom bg-[length:100%_6px]"
      offset={-160}
      spy={true}
      smooth={true}
      isDynamic={true}
      duration={500}
      className="cursor-pointer rounded-lg bg-secondary-gradient bg-[length:100%_0%] bg-bottom bg-no-repeat px-3 py-2 text-lg transition-[background-size] hover:bg-[length:100%_100%] hover:text-light"
      alt={to}
    >
      {children}
    </Link>
  );
}
