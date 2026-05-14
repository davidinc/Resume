import Link from 'next/link';
import { navLinks } from '../data/resumeData';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">DAWIT<span>.</span></div>
      <ul className="nav-links">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
