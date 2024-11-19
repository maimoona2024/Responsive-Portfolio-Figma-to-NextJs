import Link from "next/link";

interface HeaderProps {
  data?: {
    font?: {
      className?: string;
    };
  };
}

export default function Header({ data }: HeaderProps) {
  const className = data?.font?.className || ""; // Use a fallback value if undefined

  return (
    <div className={`${className} links-parent`}>
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

  