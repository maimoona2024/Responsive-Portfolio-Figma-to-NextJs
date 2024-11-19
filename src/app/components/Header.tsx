import Link from "next/link";
import { NextFont } from "next/font/google"; // Import the type for better typing

interface HeaderProps {
  font: NextFont; // Expect a `font` prop of type `NextFont`
}

export default function Header({ font }: HeaderProps) {
  return (
    <div className={`${font.className} links-parent`}>
      <ul className="links">
        <li className="link">
          <Link href="">Works</Link>
        </li>
        <li className="link">
          <Link href="">Blog</Link>
        </li>
        <li className="link">
          <Link href="">Contact</Link>
        </li>
      </ul>
    </div>
  );
}


  